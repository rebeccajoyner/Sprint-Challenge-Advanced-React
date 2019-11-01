import React from "react";
import axios from "axios";



class Players extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            players: []
        };
    }

    componentDidMount() {
        this.fetchPlayers();
    }

    fetchPlayers = () => {

        axios
            .get('http://localhost:5000/api/players')
            .then(response => {
                this.setState({ players: response.data });
            })

    };




    render() {
        return (

            <div>

                {this.state.players.map(player => {
                    return (
                        <div className="players" key={player.id}>


                            <h3>Name: {player.name}</h3>
                            <h4>Country: {player.country}</h4>
                            <h5>Searches: {player.searches}</h5>

                        </div>
                    );
                })}
                
            </div>

        );
    }
}




export default Players;