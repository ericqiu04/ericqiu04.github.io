import { HStack, Card, CardBody, Text, Stack, Heading, useColorModeValue, IconButton, Image } from "@chakra-ui/react"
import { BsBoxArrowDownLeft } from "react-icons/bs"
import { motion } from "framer-motion"
import Backdrop from "./backdrop"
import image from '../../images/Coding-vs-programming.jpg'

const PCardExpand = ({ handleClose, text }) => {
    const textCol = useColorModeValue('#61876E', '#A6BB8D')
    const darkCol = useColorModeValue('#3C6255', '#EAE7B1')
    const dropIn = {
        hidden: {
            y: "-100vh",
            opacity: 0,
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 500,
            },
        },
        exit: {
            y: "100vh",
            opacity: 0,
        },
    };
    return (
        <>
            <Backdrop onClick={handleClose}>
                <motion.div align='center'
                    onClick={(e) => e.stopPropagation()}
                    className="modal orange-gradient"
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit" >
                    <Card maxW='80%' display={['none', 'none', 'block', 'block']} >
                        <CardBody>
                            <HStack>
                                <Image></Image>
                                <Stack mt='6' spacing='3' py={40} overflow="scroll" textAlign='center'>
                                    <Heading color={darkCol} textAlign="center" size='lg'>Project Name</Heading>
                                    <Text color={textCol} fontSize='15px' as='b' textAlign='center'>
                                        Technologies Used
                                    </Text>
                                    <Text fontSize='15px' textAlign='center'>
                                        Description
                                    </Text>
                                    <IconButton onClick = {handleClose} bg='default' color={textCol} position="absolute" top="10px" right="20px" boxSize="30px" as={BsBoxArrowDownLeft}></IconButton>
                                </Stack>

                            </HStack>

                        </CardBody>
                    </Card>


                    <Card maxW='80%' pb={80} display={['block', 'block', 'none', 'none']} overflow="scroll">
                        <CardBody>
                            <Stack mt='6' spacing='3' py={40} >
                                <Image></Image>
                                <Heading color={darkCol} textAlign="center" size='lg'>Project Name</Heading>
                                <Text color={textCol} fontSize='15px' as='b' textAlign='center'>
                                    Technologies Used
                                </Text>
                                <Text fontSize='15px' textAlign='center'>
                                    Description
                                </Text>
                                <IconButton bg='default' color={textCol} position="absolute" top="10px" right="20px" boxSize="30px" as={BsBoxArrowDownLeft}></IconButton>
                            </Stack>
                        </CardBody>
                    </Card>
                </motion.div>
            </Backdrop>
        </>
    )
}

export default PCardExpand;