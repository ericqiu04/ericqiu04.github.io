import { Box, Flex, Text, VStack, Icon, HStack } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai"
import { IoIosContact } from "react-icons/io"
import { MdWork } from "react-icons/md"
import { HiDocumentText } from 'react-icons/hi'
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import resume from '../../images/Eric_Qiu_Resume.pdf'




const MobileNav = () => {

    var fontSize = 30;
    const textCol = useColorModeValue('#61876E', '#A6BB8D')
    return (

        <Flex>
            <motion.div className="mobileNavigation"  >
                <Box position="fixed" right="0" h="100%" w="250px" backdropFilter='auto' backdropBlur='20px' pt={20}>
                    <Flex position="fixed" h="100%" w="100%" textAlign="center">
                        <VStack spacing={10} w="250px" mt="50px" >
                            <motion.a
                                target="blank"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <Link to="home" spy={true} smooth={true} duration={500}>
                                    <HStack>
                                        <Icon
                                            color={textCol}
                                            as={FaHome}
                                            boxSize={["5", "5", "7", "7"]}
                                        />
                                        <Text color={textCol} as="b" fontSize="15px">
                                            Home
                                        </Text>
                                    </HStack>

                                </Link>

                            </motion.a>
                            <motion.a

                                target="blank"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <Link to="projects" spy={true} smooth={true} duration={500} offset = {-150}>
                                    <HStack>
                                        <Icon
                                            color={textCol}
                                            as={MdWork}
                                            boxSize={["5", "5", "7", "7"]}
                                        />
                                        <Text color={textCol} as="b" fontSize="15px">
                                            Projects
                                        </Text>
                                    </HStack>

                                </Link>

                            </motion.a>

                            <motion.a

                                target="blank"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <Link to="about" spy={true} smooth={true} duration={500} offset = {-150}>
                                    <HStack>
                                        <Icon
                                            color={textCol}
                                            as={IoIosContact}
                                            boxSize={["5", "5", "7", "7"]}
                                        />
                                        <Text color={textCol} as="b" fontSize="15px">
                                            About Me
                                        </Text>
                                    </HStack>

                                </Link>

                            </motion.a>

                            <motion.a

                                target="blank"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <Link to="contact" spy={true} smooth={true} duration={500}>
                                    <HStack>
                                        <Icon
                                            color={textCol}
                                            as={AiFillMessage}
                                            boxSize={["5", "5", "7", "7"]}
                                        />
                                        <Text color={textCol} as="b" fontSize="15px">
                                            Contact Me
                                        </Text>
                                    </HStack>

                                </Link>

                            </motion.a>

                            <motion.a
                                href = {resume}
                                target="blank"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                    <HStack>
                                        <Icon
                                            color={textCol}
                                            as={HiDocumentText}
                                            boxSize={["5", "5", "7", "7"]}
                                        />
                                        <Text color={textCol} as="b" fontSize="15px">
                                            Resume
                                        </Text>
                                    </HStack>


                            </motion.a>

                        </VStack>

                    </Flex>
                </Box>
            </motion.div>
        </Flex>
    )
}

export default MobileNav