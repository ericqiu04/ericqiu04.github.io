import {Container, Icon} from '@chakra-ui/react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {GrDocumentPdf} from 'react-icons/gr'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
const Navbar = () => {
   
   return(<Box maxW ='100%' p={4}>
        <HStack spacing = {8} justify = 'right' mr = {20} mt = {5}>
            <Icon as={FaGithub} boxSize = {10}/>
            <Icon as = {GrDocumentPdf} boxSize = {10}/>
            <Icon as = {FaLinkedin} boxSize = {10}/>
        </HStack>
    </Box>
   )
}

export default Navbar;