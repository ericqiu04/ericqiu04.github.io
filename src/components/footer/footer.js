import { Flex, HStack, Text, Icon, useColorModeValue} from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
    const textCol = useColorModeValue('#61876E', '#A6BB8D')

    return (
        <>
            <Flex justifyContent="Center" p={30}>
                <HStack>
                    <Text>
                        Created and Designed by Eric Qiu, 2023
                    </Text>
                    <Icon color={textCol} as={FaGithub} boxSize={['5', '5', '5', '5']} />
                    <Icon color={textCol} as={FaLinkedin} boxSize={['5', '5', '5', '5']} />

                </HStack>

            </Flex>


        </>
    )

}

