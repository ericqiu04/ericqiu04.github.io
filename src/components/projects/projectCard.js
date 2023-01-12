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
  Img,
} from "@chakra-ui/react";
import { BsBoxArrowDownLeft } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
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
import "../../styles.css";
import PCardExpand from "./projectCardExpand";
import { Projects } from "./projects";
const PCard = (info) => {
  const flip = {
    hidden: {
      transform: "scale(0) rotateX(-360deg)",
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    visible: {
      transform: " scale(1) rotateX(0deg)",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      transform: "scale(0) rotateX(360deg)",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const [modalOpen, setModalOpen] = useState(false);
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
          display={["none", "none", 'none', "block", "block"]}
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
          display={["none", "block", 'block', "none", "none"]}
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
          w="250px"
          display={["block", "none", 'none', "none", "none"]}
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
      </motion.div>






      <Modal onClose = {onClose} isOpen={isOpen} isCentered overflow="scroll">

        <ModalOverlay />


        {info.projectIMG == null ? (

          <ModalContent maxW="80%" display={['block', 'block', 'block', 'block', 'block']}>
            <ModalHeader color={darkCol}>{info.projectName}</ModalHeader>
            <ModalBody align="center">
              <Flex boxSize="100%" justifyContent="center" overflow="scroll">
                <VStack>
                  <VStack>
                    <Heading>Technologies</Heading>
                    <Text>{info.technologies}</Text>
                  </VStack>
                  <HStack>
                    <Button><a href={info.projectGithub} target ="blank">Github</a></Button>
                  </HStack>
                  <VStack>
                    <Heading>Description</Heading>
                    <Text>{info.description}</Text>
                  </VStack>
                </VStack>
              </Flex>

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

        ) : (

          <ModalContent maxW="80%" display={['none', 'none', 'none', 'block', 'block']}>
            <Box display={['none', 'none', 'none', 'block', 'block']}>
              <ModalHeader color={darkCol}>{info.projectName}</ModalHeader>
              <ModalBody>
                <HStack>
                  <Image src={info.projectIMG} boxSize="50%"></Image>
                  <Flex boxSize="50%" justifyContent="center" overflow="scroll">
                    <VStack>
                      <VStack>
                        <Heading>Technologies</Heading>
                        <Text>{info.technologies}</Text>
                      </VStack>
                      <HStack>
                        <Button><a href={info.projectGithub} target="blank">Github</a></Button>
                      </HStack>
                      <VStack>
                        <Heading>Description</Heading>
                        <Text>{info.description}</Text>
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
            </Box>

            <Box display={['block', 'block', 'block', 'none', 'none']}>
              <ModalHeader color={darkCol}>{info.projectName}</ModalHeader>
              <ModalBody>
                <VStack>
                  <Image src={info.projectIMG} boxSize="100%"></Image>
                  <Flex boxSize="100%" justifyContent="center" overflow="scroll">
                    <VStack>
                      <VStack>
                        <Heading>Technologies</Heading>
                        <Text>{info.technologies}</Text>
                      </VStack>
                      <HStack>
                        <Button><a href={info.projectGithub}>Github</a></Button>

                      </HStack>
                      <VStack>
                        <Heading>Description</Heading>
                        <Text>{info.description}</Text>
                      </VStack>
                    </VStack>
                  </Flex>
                </VStack>
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
            </Box>
          </ModalContent>




        )
        }
      </Modal>
    </>
  );
};

export default PCard;

