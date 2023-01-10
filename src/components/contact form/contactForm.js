import { Component } from "react";

import {
    Input,
    Stack,
    InputGroup,
    InputLeftElement,
    Icon,
    Textarea,
    Button,
    HStack,
    Text,
    Flex,
    VStack,
    Heading,
    Box
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { BiUser } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri"
import { useColorModeValue } from "@chakra-ui/react";

const ContactMe = () => {


    const textCol = useColorModeValue('#61876E', '#A6BB8D')
    const darkCol = useColorModeValue('#3C6255', '#EAE7B1')

    return (

        <Flex justifyContent='center' alignItems='center' mt={10} p={30}>

            <Flex display={['none', 'none', 'none', 'flex', 'flex']}>

                <HStack spacing={10} >
                    <div>
                        <Text fontSize="30px">
                            <Heading textAlign='center' color={darkCol} >
                                Contact Me
                            </Heading>
                        </Text>

                        <Text color={textCol}>
                            I would love to get to know you as well!
                        </Text>
                        <Text color={textCol}>
                            Feel free to reach out and have a chat with me!
                        </Text>
                    </div>



                    <Stack spacing={3} w={500} id="contactform">
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="#3C6255"
                                fontSize="1.2em"
                                children={<Icon as={BiUser} />}
                            />
                            <Input variant="flushed" placeholder="First Name" />
                        </InputGroup>

                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="#3C6255"
                                fontSize="1.2em"
                                children={<Icon as={BiUser} />}
                            />
                            <Input variant="flushed" placeholder="Last Name" />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="#3C6255"
                                fontSize="1.2em"
                                children={<EmailIcon />}
                            />

                            <Input type="email" variant="flushed" placeholder="Email" />
                        </InputGroup>
                        <Textarea
                            htmlSize={15}
                            width="auto"
                            height={250}
                            placeholder="Enter Message Here"
                            resize="none"
                        />
                        <Button color="white" leftIcon={<Icon as={RiSendPlaneFill} color='white' />} bg="#3C6255" variant="solid">
                            Send
                        </Button>
                    </Stack>
                </HStack >
            </Flex>

            <Flex display={['flex', 'flex', 'flex', 'none', 'none']}>

                <VStack spacing={10} >
                    <Heading color="#3C6255">
                        Contact Me
                    </Heading>
                    <div>
                        <Text fontSize="20px">
                            I would love to get to know you as well!
                        </Text>
                        <Text fontSize="20px">
                            Feel free to reach out and have a chat with me!
                        </Text>
                    </div>



                    <Stack spacing={3} w={500} id="contactform">
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="#3C6255"
                                fontSize="1.2em"
                                children={<Icon as={BiUser} />}
                            />
                            <Input variant="flushed" placeholder="First Name" />
                        </InputGroup>

                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="#3C6255"
                                fontSize="1.2em"
                                children={<Icon as={BiUser} />}
                            />
                            <Input variant="flushed" placeholder="Last Name" />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="#3C6255"
                                fontSize="1.2em"
                                children={<EmailIcon />}
                            />

                            <Input type="email" variant="flushed" placeholder="Email" />
                        </InputGroup>
                        <Textarea
                            htmlSize={15}
                            width="auto"
                            height={250}
                            placeholder="Enter Message Here"
                            resize="none"
                        />
                        <Button color="white" leftIcon={<Icon as={RiSendPlaneFill} color='white' />} bg="#3C6255" variant="solid">
                            Send
                        </Button>
                    </Stack>
                </VStack >
            </Flex>

        </Flex>


    );

}

export default ContactMe;