import { Flex, Icon, IconButton, Text } from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Stack, HStack } from '@chakra-ui/react'

import { Box } from '@chakra-ui/react'
const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('white', 'black')
    const color = useColorModeValue('black', 'white')
    return (<Box maxW='100%' p={4} bg={bg} color={color} >
        <Flex alignItems="center" justify="space-between" ml={['5px', '5px', '20px', '20px']} mr={['5px', '5px', '20px', '20px']}>

            <Text as='b' fontSize='30px' justify='left'>Eric Qiu</Text>

            <Flex display={['none', 'none', 'flex', 'flex']} >
                <HStack spacing={8} justify="right">

                    <a href="https://github.com/ericqiu04" target="blank"><Icon as={FaGithub} boxSize={['5', '5', '10', '10']} /></a>
                    <a href="home" target="blank"><Icon as={HiDocumentText} boxSize={['5', '5', '10', '10']} /></a>
                    <a href="https://www.linkedin.com/in/eric-qiu-72115623b/" target="blank"><Icon as={FaLinkedin} boxSize={['5', '5', '10', '10']} /></a>
                    {colorMode === "dark" ? (
                        <Icon as={SunIcon} boxSize={['5', '5', '10', '10']} onClick={toggleColorMode} />
                    ) : (
                        <Icon as={MoonIcon} boxSize={['5', '5', '10', '10']} onClick={toggleColorMode} />
                    )
                    }

                </HStack>
            </Flex>

            <Flex display={['flex', 'flex', 'none', 'none']}>
                
                <HStack spacing={8} justify="right">
                    {colorMode === "dark" ? (
                        <Icon as={SunIcon} boxSize={['5', '5', '10', '10']} onClick={toggleColorMode} />
                    ) : (
                        <Icon as={MoonIcon} boxSize={['5', '5', '10', '10']} onClick={toggleColorMode} />
                    )
                    }
                    <IconButton
                        aria-label='Open-Menu'
                        size='lg'
                        mr={2}
                        icon={<HamburgerIcon />}
                    />
                </HStack>
            </Flex>



        </Flex>
    </Box>
    )
}

export default Navbar;