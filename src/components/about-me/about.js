import { Box, Flex, Text, VStack } from "@chakra-ui/react"

export const About = () => {
    return (
        <>

            <Flex justifyContent="center" >
                <VStack spacing = {20}>
                    <Box mt={30} justifyItems="center" w='60%' align='left' >
                        <Box align='center' pb = {10}>
                            <Text fontSize={50} as='b' color="#3C6255" display="box">
                                About Me
                            </Text>
                        </Box>

                        
                            <Text fontSize={20} pb = {5} >
                                Hello! I'm Eric Qiu, I am currently a first year <Flex color="#61876E" display="inline">Computer Engineering student</Flex> at the <Flex color="#61876E" display="inline">University of Waterloo</Flex>
                            </Text>
                            <Text fontSize={20} pb = {5}>
                                I am very interested in <Flex color="#61876E" display="inline">Web Development, Data Science </Flex>, and <Flex color="#61876E" display="inline"> Maching Learning </Flex>. I am currently learning Data Science using Python and learning more about React.JS.
                            </Text>
                            <Text fontSize={20} pb = {5}>
                                When I am not programming, you can find me learning about stocks, watching anime, doing homework, or hanging out with family and friends.
                            </Text>
                            <Text fontSize={20} pb = {5}>
                                If you would like to connect, feel free to reach out, I am always open to making new friends!
                            </Text>
        
                    </Box>
                </VStack>
            </Flex>




        </>



    )
}