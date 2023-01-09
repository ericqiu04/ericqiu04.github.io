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

class ContactMe extends Component {
    render() {
        return (

            <Flex justifyContent='center' alignItems='center' mt={10} p={30}>

                <Flex display={['none', 'none','none', 'flex', 'flex']}>

                    <HStack spacing={10} >
                        <div>
                            <Heading textAlign = 'center'>
                                Contact Me
                            </Heading>
                            <Text>
                                I would love to get to know you as well!
                            </Text>
                            <Text>
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
                            <Text fontSize = "20px">
                                I would love to get to know you as well!
                            </Text>
                            <Text fontSize = "20px">
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
}

export default ContactMe;