import { Flex, Icon, Text } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { HStack} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('white', 'black')
    const color = useColorModeValue('black', 'white')
    return (<Box maxW='100%' p={4} bg={bg} color={color} >
        <Flex alignItems = "center" justify = "space-between" ml = {20} mr = {20}>

        <Text as = 'b'fontSize = '30px' justify='left'>Eric Qiu</Text>
        <HStack spacing={8} justify="right">
            
            <a href = "https://github.com/ericqiu04" target = "blank"><Icon as={FaGithub} boxSize={10} /></a>
            <a href = "home" target = "blank"><Icon as={HiDocumentText} boxSize={10}/></a>
            <a href = "https://www.linkedin.com/in/eric-qiu-72115623b/" target = "blank"><Icon as={FaLinkedin} boxSize={10}/></a>
            {colorMode === "dark" ? (
                <Icon as={SunIcon} boxSize={10} onClick={toggleColorMode} />
            ) : (
                <Icon as={MoonIcon} boxSize={10} onClick={toggleColorMode} />
            )
            }
            
        </HStack>
        </Flex>
    </Box>
    )
}

export default Navbar;