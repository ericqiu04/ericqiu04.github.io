import { Collapse, Flex, Icon, IconButton, Text } from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'



import { Box } from '@chakra-ui/react'
const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    const color = useColorModeValue('black', 'white')
    return (<Box maxW='100%' p={4} color={color} >
        <Flex alignItems="center" justify="space-between" ml={['5px', '5px', '20px', '20px']} mr={['5px', '5px', '20px', '20px']}>

            <Text as='b' fontSize='30px' justify='left'>EQ</Text>

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
                    {isOpen === false ? (
                        <IconButton
                        aria-label='Open-Menu'
                        size='lg'
                        bg='default'
                        mr={2}
                        icon={<HamburgerIcon />}
                        onClick={onToggle}
                    />
                    ) : (<IconButton
                        aria-label='Open-Menu'
                        size='lg'
                        bg='default'
                        mr={2}
                        icon={<CloseIcon />}
                        onClick={onToggle}
                    />)}

                </HStack>
            </Flex>



        </Flex>
    </Box>
    )
}

export default Navbar;