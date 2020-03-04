import React from "react";

class CharacterCard extends React.Component {
    render() {
        const { character } = this.props.location.state;
        console.log("Character:")
        console.log(character);

        const episodes = character.episode.map(episode => {
            return (
                <li class="list-group-item">
                    {episode}
                </li>
            );
        });

        return (
            <div>
                <nav class="navbar navbar-dark bg-dark sticky-top ">
                    <a class="navbar-brand"><img src='/img/Rick_and_Morty_logo.png' alt="Logo"></img></a>
                </nav>

                <div class="container-fluid">

                    <div class="card mb-3 border-dark">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={character.image} class="card-img" alt={character.name} />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body flush">
                                    <h4 class="card-title">{character.name}</h4>
                                    <p class="card-text">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Gender: {character.gender}</li>
                                            <li class="list-group-item">Location: {character.location.name}</li>
                                            <li class="list-group-item">Origin: {character.origin.name}</li>
                                            <li class="list-group-item">Species: {character.species}</li>
                                            <li class="list-group-item">Status: {character.status}</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="card">
                        <div class="card-header flush">
                            <h4 class="card-title">Episodes</h4>
                        </div>
                        <ul class="list-group list-group-flush">
                            {episodes}
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default CharacterCard;