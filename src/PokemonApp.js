import React, { Component } from 'react'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import PokemonDetail from './components/PokemonDetail'

class PokemonApp extends Component {

    state = {
        pokemons: []
    }

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then((response) => {
                this.setState({
                    pokemons: response.data.results
                })
            })
            .catch(() => {
                console.log('Error while getting pokemons')
            })
    }


    render() {
        const {pokemons} = this.state
        return (
            <div className="columns">
                <div className="column">
                    <h1>Gotta catch em all</h1>
                    {
                        pokemons.map((pokemon, index) => {
                            return <div key={index}>
                                <Link to={`/pokemon/${index+1}`}>{pokemon.name}</Link>
                            </div>
                        })
                    }
                </div>
                <div className="column">
                   <Route path='/pokemon/:pokemonId' component={PokemonDetail} />
                </div>
          </div>
        )
    }
}

export default PokemonApp