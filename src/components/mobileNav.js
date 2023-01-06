import { Box,  Flex, Text, VStack} from "@chakra-ui/react"

const MobileNav = () => {
    var fontSize = 20;
    return (

        <Box position="fixed" right="0" h="100%" w="250px">
            <Flex position="fixed" h="100%" w="100%" textAlign="center">
                <VStack spacing = {4}w = "250px" mt = "50px">
                    <a  href="https://github.com/ericqiu04" target="blank"><Text fontSize = {fontSize} display="block">Github</Text></a>
                    <a href="https://www.linkedin.com/in/eric-qiu-72115623b/" target="blank"><Text fontSize = {fontSize} display="block">LinkedIn</Text></a>
                    <a href="#" target="blank"><Text fontSize = {fontSize} display="block">Resume</Text></a>
                </VStack>

            </Flex>
        </Box>

    )
}

export default MobileNav