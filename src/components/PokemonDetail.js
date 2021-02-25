import React, { Component } from 'react'
import axios from 'axios'

class PokemonDetail extends Component {

    state = {
        pokemon: {}
    }

    getPokemon = () => {
        let id = this.props.match.params.pokemonId
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => {
                let pokemon = {
                    id: id,
                    height: response.data.height,
                    weight: response.data.weight,
                    image: response.data.sprites.other.dream_world.front_default
                }

                this.setState({
                    pokemon: pokemon
                })
            })
    }

    componentDidMount(){
        console.log('Detail Component Mounted')
        this.getPokemon()
    }

    componentDidUpdate(){
        console.log('Detail Component Updated')
        // some comparison ?????????
        // compare the new one with the one in state
        let id = this.props.match.params.pokemonId
        console.log('-----------------------------')
        console.log('ID is did update is', id)
        console.log('state id is', this.state.pokemon.id)
        if (this.state.pokemon.id !== id) {
            this.getPokemon()
        }
        //this.getPokemon()
    }


    render() {
        
        const {pokemon: {image, height}, pokemon} = this.state
        console.log('Render, pokemon is', pokemon.id )
        return (
            <div>
                Pokemon Detail page
                <img src={image}/>
                <h3>Height: {height}</h3>
            </div>
        )
    }
}

export default PokemonDetail
