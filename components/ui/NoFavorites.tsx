import { useState, useEffect } from 'react';
import { Container, Image, Text } from "@nextui-org/react"
import { localFavorites } from '../../utils';

export const NoFavorites = () => {

    const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])

    useEffect(() => {
        setfavoritePokemons( localFavorites.getFavorites() )
    }, [])
    

    return (
        <Container css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'calc(100vh - 70px)'
            }}>
            <Text h1>No hay favoritos</Text>
            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                alt="Ditto"
                width={ 250 }
                height={ 250 }
                css={{
                    opacity: 0.1
                }}
            />
        </Container>
    )
}
