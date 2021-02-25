import React, { useEffect} from 'react'
import axios from 'axios'


function PokemonDetail(props) {

    const [pokemon, updatePokemon] = useEffect({})

    const getPokemon = () => {
        let id = props.match.params.pokemonId
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => {
                let pokemon = {
                    id: id,
                    height: response.data.height,
                    weight: response.data.weight,
                    image: response.data.sprites.other.dream_world.front_default
                }

                updatePokemon(pokemon)
            })
    }

    useEffect(() => {
        console.log('Detail Component Mounted')
        getPokemon()
    }, [])

    useEffect(() => {
        console.log('Detail Component Updated')
        // some comparison ?????????
        // compare the new one with the one in state
        let id = props.match.params.pokemonId
        console.log('-----------------------------')
        console.log('ID is did update is', id)
        console.log('state id is', this.state.pokemon.id)
        if (pokemon.id !== id) {
            getPokemon()
        }
    })

    const {image, height} = pokemon
    return (
        <div>
            Pokemon Detail page
            <img src={image}/>
            <h3>Height: {height}</h3>
        </div>
    )
}

export default PokemonDetail
