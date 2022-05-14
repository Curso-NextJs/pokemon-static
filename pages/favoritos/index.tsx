import { useState, useEffect } from 'react';
import { NextPage } from "next"
import { Layout } from "../../components/layouts"
import { NoFavorites } from '../../components/ui';
import { localFavorites } from "../../utils";
import { FavoritePokemons } from '../../components/pokemon';

const FavoritosPage: NextPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.getFavorites());
    }, [])
    

    return (
        <Layout title="Pokémons Favoritos">
            {
                favoritePokemons.length === 0
                ? ( <NoFavorites /> )
                : ( <FavoritePokemons pokemons={ favoritePokemons } />)
            }
        </Layout>
    )
}

export default FavoritosPage