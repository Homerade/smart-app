import React from 'react';
import axios from 'axios';

export default class Compo1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            battleships: []
        };
    }

componentDidMount() {
    axios.get('https://sl-battle-api.herokuapp.com/ships')
        .then(response => {
            console.log(response);
            return Array.prototype.map((each) => {
            console.log(each);
            return <li key={each.name}>{each}</li>}, response.data);  
        
        })
        .then(data => {
            this.setState({ battleships: data });
        })
        .catch(error => console.log(error));
}



render () {
    console.log(this.state);
    return <ul>{this.state.battleships}</ul>
}    

}