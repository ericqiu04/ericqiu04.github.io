import { HStack, Card, CardBody, Text, Stack, Heading, useColorModeValue, IconButton, Image } from "@chakra-ui/react"
import { BsBoxArrowDownLeft } from "react-icons/bs"
import { motion } from "framer-motion"
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
        </>
    )
}

export default PCardExpand;