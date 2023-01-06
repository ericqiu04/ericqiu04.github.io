import { Box, Center, Flex, Text, Stack} from "@chakra-ui/react"

const MobileNav = () => {
    return (

        <Box position="fixed" right="0" h="100%" w="200px">
            <Flex position="fixed" h="100%" w="100%" textAlign="center">
                <Stack w = "200px" mt = "50px">
                    <Text display="block">Github</Text>
                    <Text display="block">LinkedIn</Text>
                </Stack>

            </Flex>
        </Box>

    )
}

export default MobileNav