import { Card, CardBody, Text, Image, Stack, Heading, useColorModeValue, Icon } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { BsBoxArrowUpRight } from "react-icons/bs"
import { useState } from "react"
import { MotionConfig } from "framer-motion"
import { motion } from "framer-motion"
import '../../styles.css'
const PCard = (info) => {

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const textCol = useColorModeValue('#61876E', '#A6BB8D')
    const darkCol = useColorModeValue('#3C6255', '#EAE7B1')

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => (modalOpen ? close() : open())}
                className = "projectCard"
                >
                <Card w="500px" display = {['none', 'none', 'block', 'block']}>
                    <CardBody>
                        <Stack mt='6' spacing='3' p={10}>
                            <Heading color={darkCol} textAlign="center" size='lg'>{info.projectName}</Heading>
                            <Text color={textCol} fontSize='15px' as='b' textAlign='center'>
                                {info.technologies}
                            </Text>
                            <Text fontSize='15px' textAlign='center'>

                            </Text>
                            <Icon color={textCol} position="absolute" top="10px" right="20px" boxSize="30px" as={BsBoxArrowUpRight}></Icon>
                        </Stack>
                    </CardBody>
                </Card>
                
                <Card w="400px" display = {['block', 'block', 'none', 'none']}>
                    <CardBody>
                        <Stack mt='6' spacing='3' p={10}>
                            <Heading color={darkCol} textAlign="center" size='lg'>{info.projectName}</Heading>
                            <Text color={textCol} fontSize='15px' as='b' textAlign='center'>
                                {info.technologies}
                            </Text>
                            <Text fontSize='15px' textAlign='center'>

                            </Text>
                            <Icon color={textCol} position="absolute" top="10px" right="20px" boxSize="30px" as={BsBoxArrowUpRight}></Icon>
                        </Stack>
                    </CardBody>
                </Card>
            </motion.div>
        </>
    )

}

export default PCard;