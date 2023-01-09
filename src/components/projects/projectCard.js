import {
  Card,
  CardBody,
  Text,
  Stack,
  HStack,
  Image,
  IconButton,
  Heading,
  useColorModeValue,
  Icon,
  Flex,
  Box,
  VStack,
} from "@chakra-ui/react";
import { BsBoxArrowDownLeft } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import image from "../../images/Coding-vs-programming.jpg";
import "../../styles.css";
import PCardExpand from "./projectCardExpand";
import { Projects } from "./projects";
const PCard = (info) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const textCol = useColorModeValue("#61876E", "#A6BB8D");
  const darkCol = useColorModeValue("#3C6255", "#EAE7B1");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => (modalOpen ? close() : open())}
        className="projectCard"
        border="10px"
      >
        <Card
          w="500px"
          display={["none", "none", "block", "block"]}
          borderWidth="2px"
          borderColor={textCol}
          onClick={onOpen}
        >
          <CardBody>
            <Stack mt="6" spacing="3" p={10}>
              <Heading color={darkCol} textAlign="center" size="lg">
                {info.projectName}
              </Heading>
              <Text color={textCol} fontSize="15px" as="b" textAlign="center">
                {info.technologies}
              </Text>
              <Text fontSize="15px" textAlign="center"></Text>
              <Icon
                color={textCol}
                position="absolute"
                top="10px"
                right="20px"
                boxSize="30px"
                as={BsBoxArrowUpRight}
              ></Icon>
            </Stack>
          </CardBody>
        </Card>

        <Card
          w="400px"
          display={["block", "block", "none", "none"]}
          borderWidth="2px"
          borderColor={textCol}
        >
          <CardBody>
            <Stack mt="6" spacing="3" p={10}>
              <Heading color={darkCol} textAlign="center" size="lg">
                {info.projectName}
              </Heading>
              <Text color={textCol} fontSize="15px" as="b" textAlign="center">
                {info.technologies}
              </Text>
              <Text fontSize="15px" textAlign="center"></Text>
              <Icon
                color={textCol}
                position="absolute"
                top="10px"
                right="20px"
                boxSize="30px"
                as={BsBoxArrowUpRight}
              ></Icon>
            </Stack>
          </CardBody>
        </Card>
      </motion.div>

  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent maxW="80%">
            <ModalHeader color={darkCol}>{info.projectName}</ModalHeader>
            <ModalBody>
              <HStack>
                <Image src={image} boxSize="50%"></Image>
                <Flex boxSize="50%" justifyContent="center" overflow="scroll">
                  <VStack>
                    <VStack>
                      <Heading>Technologies</Heading>
                      <Text>{info.technologies}</Text>
                    </VStack>
                    <HStack>
                      <Button>Github</Button>
                      <Button>Live</Button>
                    </HStack>
                    <VStack>
                      <Heading>Description</Heading>
                      <Text>Hi</Text>
                    </VStack>
                  </VStack>
                </Flex>
              </HStack>
              <IconButton
                onClick={onClose}
                bg="default"
                color={textCol}
                position="absolute"
                top="20px"
                right="20px"
                boxSize="30px"
                as={BsBoxArrowDownLeft}
              ></IconButton>
            </ModalBody>
          </ModalContent>
        </Modal>
      
    </>
  );
};

export default PCard;
