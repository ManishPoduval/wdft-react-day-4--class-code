import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import PokemonDetail from './components/PokemonDetail'

function PokemonApp() {

    const [pokemons, updatePokemons] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then((response) => {
                    updatePokemons(response.data.results)
            })
            .catch(() => {
                console.log('Error while getting pokemons')
            })
    }, [])

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

export default PokemonApp