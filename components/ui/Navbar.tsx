import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";
import NextLink from 'next/link'

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray900.value,
        }}>

            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="icono de la aplicación"
                height={70}
                width={70}
            />

            <NextLink href="/" passHref>
                <Link>
                    <Text h2>P</Text>
                    <Text h3>okémon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: '1' }}/>

            <NextLink href="/favoritos" passHref>
                <Link>
                    <Text>Favoritos</Text>
                </Link>
            </NextLink>
            
        </div>
    )
}
