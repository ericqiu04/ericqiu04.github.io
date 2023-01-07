import {HStack, Card, CardBody, Text, Stack, Heading, useColorModeValue, Icon, Center, IconButton, Image } from "@chakra-ui/react"
import { BsBoxArrowDownLeft } from "react-icons/bs"
import { motion } from "framer-motion"


const PCardExpand = () => {
    const textCol = useColorModeValue('#61876E', '#A6BB8D')
    const darkCol = useColorModeValue('#3C6255', '#EAE7B1')

    return (
        <>

            <motion.div align='center' >
                <Card maxW='80%' display={['none', 'none', 'block', 'block']} >
                    <CardBody>
                        <HStack>
                            <Image></Image>
                            <Stack mt='6' spacing='3' py={40} overflow="scroll" textAlign = 'center'>
                                <Heading color={darkCol} textAlign="center" size='lg'>Project Name</Heading>
                                <Text color={textCol} fontSize='15px' as='b' textAlign='center'>
                                    Technologies Used
                                </Text>
                                <Text fontSize='15px' textAlign='center'>
                                    Description
                                </Text>
                                <IconButton bg='default' color={textCol} position="absolute" top="10px" right="20px" boxSize="30px" as={BsBoxArrowDownLeft}></IconButton>
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
        </>
    )
}

export default PCardExpand;