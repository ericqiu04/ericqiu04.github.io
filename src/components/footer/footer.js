import { Flex, HStack, Text, Icon, useColorModeValue } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from "framer-motion"
export const Footer = () => {
    const textCol = useColorModeValue('#61876E', '#A6BB8D')

    return (
        <>
            <Flex justifyContent="Center" p={30}>
                <HStack>
                    <Text color = {textCol}>
                        Created and Designed by Eric Qiu, 2023
                    </Text>
                    <motion.a
                        href="https://github.com/ericqiu04"
                        target="blank"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Icon
                            color={textCol}
                            as={FaGithub}
                            boxSize={["5", "5", "5", "5"]}
                        />
                    </motion.a>

                    <motion.a
                        color={textCol}
                        href="https://www.linkedin.com/in/eric-qiu-72115623b/"
                        target="blank"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Icon
                            color={textCol}
                            as={FaLinkedin}
                            boxSize={["5", "5", "5", "5"]}
                        />
                    </motion.a>

                </HStack>

            </Flex>


        </>
    )

}

