import {Icon} from '@chakra-ui/react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {GrDocumentPdf} from 'react-icons/gr'
import { useColorMode, useColorModeValue} from '@chakra-ui/react'
import { HStack} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
const Navbar = () => {
    const { toggleColorMode } = useColorMode()
    const bg = useColorModeValue('white', 'black')
    const color = useColorModeValue('black', 'white')

   return(<Box maxW ='100%' p={4} bg = {bg} color = {color} >

        <HStack spacing = {8} justify = 'right' mr = {20} mt = {5}>
            <Icon as={FaGithub} boxSize = {10}/>
            <Icon as = {GrDocumentPdf} boxSize = {10}/>
            <Icon as = {FaLinkedin} boxSize = {10} onClick = {toggleColorMode}/>
        </HStack>
    </Box>
   )
}

export default Navbar;