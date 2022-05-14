import React, { FC } from 'react'
import { useRouter } from 'next/router';
import { Card, Divider, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces/pokemon-list';

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const router = useRouter()
    const { id, name, img } = pokemon;

    const onClick = () => {
        router.push(`/name/${name}`);
    }

    return (
        <Grid onClick={ onClick } xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 }  >
            <Card hoverable clickable>
            <Card.Body css={{ p: 1 }}>
                <Card.Image 
                src={ img }
                width="100%"
                height={ 140 }
                />
            </Card.Body>
            <Divider />
            <Card.Footer>
                <Row justify='space-between'>
                <Text transform='capitalize'>{ name }</Text>
                <Text>#{ id }</Text>
                </Row>
            </Card.Footer>
            </Card>
        </Grid>
    )
}
