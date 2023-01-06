import { Text } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';
import { useColorModeValue } from "@chakra-ui/react";
const Home = () => {
    const textCol = useColorModeValue('#3C6255', '#EAE7B1')
    return (

        <Center height='20em'>
            <Text fontSize="75px" as='b' color = {textCol}>
                <Typewriter
                     onInit={(typewriter) => {
                        typewriter.typeString('Hi. I am Eric Qiu.').start();}
                     }
                />
            </Text>
        </Center>

    )
}

export default Home;
