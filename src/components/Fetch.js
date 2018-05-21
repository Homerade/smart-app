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
                const ships = Object.keys(parsedData).map(key => parsedData[key]);
                console.log(ships);
                const data = ships.map(each => {
                    return <li key={each.name}>{each.name}, {each.length}</li>
                })
                this.setState({ battleships: data });        
            })
            .catch(error => console.log(error));
        }        


render() {
    // console.log(this.state);
    return <ul>{this.state.battleships}</ul>
    }    
}


