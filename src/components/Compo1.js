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
            let data = response.map(each => {
                return (
                    <ul>
                        <li key={each.name}>{each.name}</li>
                        <li key={each.length}>{each.length}</li>
                    </ul>    
                )
            })
            this.setState({ battleships: data });
        
        })
        .catch(error => console.log(error));
}



render () {
    // console.log(this.state);
    return <ul>{this.state.battleships}</ul>
}    

}  
