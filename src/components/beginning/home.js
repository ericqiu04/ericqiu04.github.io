import { Text, Flex, Box, Image, Fade} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';
import { useColorModeValue } from "@chakra-ui/react";
import img from'../../background.png'
const Home = () => {
    const textCol = useColorModeValue('#3C6255', '#EAE7B1')
    return (
        <>
        <Fade in = {true} delay = '100ms'>
            <Box bgGradient='linear(to-r, #5FC8FF, #6CCFFF, #7CD5FF, #89DAFF, #96DFFD, #A2E4FE, #AFE8FD, #B9EBFD, #C2F1FE, #CDF5FD, #CFF6F9, #D4F6F7, #D9F7F5, #DCF7F2, #DEF7F1)'>
            <Flex display={['none', 'none', 'block', 'block']} mt = {-40} >
                <Center height='40em' pt = {20}>
                    <Text fontSize="75px" as='b' color={textCol} mt = {200}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Hi. I am Eric Qiu.').start();
                            }
                            }
                        />
                    </Text>
                </Center>
            </Flex>

            <Flex display={['block', 'block', 'none', 'none']}  mt = {-40}>
                <Center height='50em' >
                    <Text fontSize="75px" as='b' color={textCol} mt = "2em">
                        <Typewriter
                        textAlign = "center"
                            onInit={(typewriter) => {
                                typewriter.typeString('Hi. I am <br>Eric Qiu.').start();
                            }
                            }
                            
                        />
                    </Text>

                </Center>
            </Flex>
            

            </Box>
            <Image src = {img}></Image>
            </Fade>
        </>

    )
}

export default Home;
