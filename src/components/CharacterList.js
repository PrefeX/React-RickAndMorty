import React from "react";
import { Link } from 'react-router-dom';

// Constant To store API url.
const API_URL = "https://rickandmortyapi.com/api/character/";

class CharacterList extends React.Component {
    constructor(props) {
        super(props);

        // Initialize the State in Class Component.
        this.state = {
            characters: [],
            filteredCharacters: [],
            filter: '',
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    // Use ASYNC/AWAIT inside lifecycle method.
    async componentDidMount() {
        try {
            const response = await fetch(API_URL).then(resp => resp.json());

            // Create new array containing the values from the existing characters and API response.
            let chars = [...this.state.characters];
            chars.push(...response.results);

            // TODO: Add loading of additional pages (listed in JSON result)
            // if (response.info.next != "") {
            //     let nextResponse = await fetch(response.info.next).then(resp => resp.json());
            //     chars.push(...nextResponse.results);
            //     console.log("next")
            // }

            // ALWAYS use this.setState() in a Class Method.
            this.setState({
                characters: chars,
                filteredCharacters: chars
            });

            console.log(this.state.characters)
        } catch (e) {
            console.error(e);
        }
    }

    handleFilter(event) {
        this.setState({
            filter: event.target.value,
            filteredCharacters: this.state.characters.filter(character => character.name.toLowerCase().includes(event.target.value.toLowerCase()))
        });
    }


    render() {
        // Create an array of JSX to render
        const characters = this.state.filteredCharacters.map(character => {
            // This should render Character components. - Remember the key.
            return (
                <div class="col mb-4 card-list" id={"character--" + character.id}>
                    <Link to={{
                        pathname: `/character/${character.id}`,
                        state: { character: character }
                    }}>
                        <div class="card hover h-100 border-dark">
                            <img src={character.image} alt={character.name} class="card-img-top" />
                            <div class="card-body">
                                <h4 class="card-title">{character.name}</h4>
                            </div>
                        </div>
                    </Link>
                </div >
            );
        });

        // Render MUST return valid JSX.
        return (
            <div>

                <nav class="navbar navbar-dark bg-dark sticky-top ">
                    <a class="navbar-brand"><img src='/img/Rick_and_Morty_logo.png' alt="Logo"></img></a>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Filter" aria-label="Filter" value={this.state.filter} onChange={this.handleFilter} />
                    </form>
                </nav>

                <div class="container-fluid">
                    <div class="row row-cols-1 row-cols-md-4">
                        {characters}
                    </div>
                </div>
            </div >
        );
    }
}

export default CharacterList;
