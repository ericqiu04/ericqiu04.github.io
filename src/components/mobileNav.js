import { Box, Flex, Text, VStack, Icon, HStack } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { motion } from "framer-motion";
import '../styles.css'



const MobileNav = () => {

    var fontSize = 30;
    const textCol = useColorModeValue('#61876E', '#A6BB8D')
    return (

        <motion.div className="mobileNavigation" >
            <Box position="fixed" right="0" h="100%" w="250px" backdropFilter='auto' backdropBlur='8px'>
                <Flex position="fixed" h="100%" w="100%" textAlign="center">
                    <VStack spacing={10} w="250px" mt="50px" >
                        <motion.a
                            href="https://github.com/ericqiu04"
                            target="blank"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                            <HStack>
                                <Icon color={textCol} as={FaGithub} boxSize={['10', '10', '10', '10']} />
                                <Text color={textCol} as='b' fontSize={fontSize} display="block">Github</Text>
                            </HStack>
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/eric-qiu-72115623b/"
                            target="blank"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            color={textCol}
                        >
                            <HStack>
                                <Icon color={textCol} as={FaLinkedin} boxSize={['10', '10', '10', '10']} />
                                <Text color={textCol} as='b' fontSize={fontSize} display="block">LinkedIn</Text>
                            </HStack>
                        </motion.a>

                        <motion.a
                            href="#"
                            target="blank"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                            <HStack>
                                <Icon display="" color={textCol} as={HiDocumentText} boxSize={['10', '10', '10', '10']} />
                                <Text color={textCol} as='b' fontSize={fontSize} >Resume</Text>
                            </HStack>

                        </motion.a>

                    </VStack>

                </Flex>
            </Box>
        </motion.div>
    )
}

export default MobileNav