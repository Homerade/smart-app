import React from 'react';


export default class Fetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            battleships: []
        };
    }

componentDidMount() {
    fetch('https://sl-battle-api.herokuapp.com/ships')
        .then((response) => {
            return response.json() })
        .then(parsedData => {
            console.log(parsedData);
            this.setState({ battleships: parsedData });
        
        })
        // .catch(error => console.log(error));
}



render() {
    // console.log(this.state);
    return <ul>{this.state.battleships}</ul>
}    

}