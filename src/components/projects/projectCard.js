import { Card, CardBody, Text, Image, Stack, Heading, useColorModeValue, Icon } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { BsBoxArrowUpRight } from "react-icons/bs"
import { useState } from "react"
import { MotionConfig } from "framer-motion"
import { motion } from "framer-motion"
const PCard = (info) => {

    const [isOn, setIsOn] = useState(false);

    const textCol = useColorModeValue('#61876E', '#A6BB8D')
    const darkCol = useColorModeValue('#3C6255', '#EAE7B1')

    return (
        <>
            <motion.div>
                <Card w = "500px">
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