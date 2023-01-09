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
  const [scrollBehavior, setScrollBehavior] = useState('inside')
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

      <Modal onClose={onClose} isOpen={isOpen} isCentered >
        <ModalOverlay />
        <ModalContent maxW="80%">
          <ModalHeader color={darkCol}>{info.projectName}</ModalHeader>
          <ModalBody >
            <HStack>
              <Image src={image} h="500px"></Image>
              <Flex boxSize="50%" h="500px" justifyContent="center" overflow="scroll">
                <VStack>
                  <VStack>
                    <Heading>Technologies</Heading>
                    <Text>{info.technologies}</Text>
                  </VStack>
                  <HStack>
                    <Button>
                        Github
                    </Button>
                    <Button>
                        Live
                    </Button>
                  </HStack>
                  <VStack>
                    <Heading>Description</Heading>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Diam vulputate ut pharetra sit. Lacus viverra
                      vitae congue eu consequat ac felis donec et. Odio
                      pellentesque diam volutpat commodo. At tempor commodo
                      ullamcorper a. Eleifend quam adipiscing vitae proin
                      sagittis nisl. Ut faucibus pulvinar elementum integer enim
                      neque. Vivamus arcu felis bibendum ut tristique et egestas
                      quis. Morbi tristique senectus et netus et malesuada.
                      Facilisi cras fermentum odio eu feugiat pretium nibh.
                      Egestas maecenas pharetra convallis posuere morbi leo urna
                      molestie at. Vitae justo eget magna fermentum iaculis eu
                      non diam phasellus. Ut tristique et egestas quis ipsum.
                      Donec ultrices tincidunt arcu non sodales neque.
                      Adipiscing vitae proin sagittis nisl rhoncus mattis
                      rhoncus urna neque. Id venenatis a condimentum vitae
                      sapien. Ut porttitor leo a diam sollicitudin tempor. In
                      cursus turpis massa tincidunt dui ut ornare lectus sit.
                      Orci a scelerisque purus semper eget duis at tellus at.
                      Auctor elit sed vulputate mi sit amet mauris. Id venenatis
                      a condimentum vitae sapien pellentesque habitant morbi.
                      Euismod nisi porta lorem mollis. Eleifend mi in nulla
                      posuere. Facilisis leo vel fringilla est ullamcorper eget.
                      Arcu ac tortor dignissim convallis aenean. Tortor at
                      auctor urna nunc id cursus. Tristique senectus et netus et
                      malesuada fames. Nulla pharetra diam sit amet nisl
                      suscipit adipiscing bibendum. Ut ornare lectus sit amet
                      est placerat in. Fringilla urna porttitor rhoncus dolor
                      purus. Malesuada bibendum arcu vitae elementum curabitur
                      vitae nunc sed velit. A condimentum vitae sapien
                      pellentesque habitant morbi. Dignissim convallis aenean et
                      tortor at risus viverra adipiscing. Sed egestas egestas
                      fringilla phasellus faucibus scelerisque eleifend donec.
                      Fames ac turpis egestas maecenas pharetra convallis. Neque
                      convallis a cras semper. Adipiscing commodo elit at
                      imperdiet dui. Sed augue lacus viverra vitae congue eu.
                      Sed vulputate odio ut enim blandit volutpat maecenas.
                      Malesuada proin libero nunc consequat interdum. Auctor
                      urna nunc id cursus metus aliquam. Mi in nulla posuere
                      sollicitudin aliquam ultrices sagittis orci a. Suspendisse
                      faucibus interdum posuere lorem. Mauris a diam maecenas
                      sed enim ut sem viverra. Aliquet bibendum enim facilisis
                      gravida neque convallis a. Morbi enim nunc faucibus a
                      pellentesque sit. Amet venenatis urna cursus eget nunc
                      scelerisque viverra mauris. Ac auctor augue mauris augue
                      neque gravida in fermentum. Libero enim sed faucibus
                      turpis in. Pretium nibh ipsum consequat nisl vel pretium
                      lectus quam id. Elementum tempus egestas sed sed risus
                      pretium quam vulputate. Pellentesque nec nam aliquam sem
                      et. Nam aliquam sem et tortor. Sed vulputate mi sit amet
                      mauris commodo quis imperdiet. Ultrices in iaculis nunc
                      sed augue lacus viverra. Ac odio tempor orci dapibus.
                      Tellus rutrum tellus pellentesque eu tincidunt tortor
                      aliquam. Tristique magna sit amet purus gravida quis
                      blandit. Justo laoreet sit amet cursus. Fermentum posuere
                      urna nec tincidunt praesent semper feugiat. Aliquam id
                      diam maecenas ultricies mi eget mauris pharetra et. Ac
                      orci phasellus egestas tellus rutrum tellus pellentesque
                      eu. Ut porttitor leo a diam. Eget nunc scelerisque viverra
                      mauris in aliquam sem fringilla ut. Aliquam malesuada
                      bibendum arcu vitae elementum curabitur vitae. Cras
                      pulvinar mattis nunc sed blandit libero volutpat.
                      Ultricies tristique nulla aliquet enim tortor. In vitae
                      turpis massa sed elementum tempus. Arcu vitae elementum
                      curabitur vitae nunc sed velit dignissim sodales. Accumsan
                      sit amet nulla facilisi. Nec sagittis aliquam malesuada
                      bibendum arcu. Malesuada bibendum arcu vitae elementum
                      curabitur vitae. Cum sociis natoque penatibus et. Duis
                      ultricies lacus sed turpis tincidunt id aliquet. Quam
                      viverra orci sagittis eu volutpat odio facilisis mauris.
                      Suspendisse interdum consectetur libero id faucibus.
                      Varius vel pharetra vel turpis nunc eget lorem dolor sed.
                      Sagittis orci a scelerisque purus semper eget duis at
                      tellus. Amet facilisis magna etiam tempor orci.
                      Pellentesque elit eget gravida cum sociis natoque
                      penatibus. Porta nibh venenatis cras sed felis eget. Ac
                      auctor augue mauris augue neque gravida in fermentum.
                      Laoreet id donec ultrices tincidunt arcu. Euismod
                      elementum nisi quis eleifend quam adipiscing. Lorem ipsum
                      dolor sit amet consectetur adipiscing. Maecenas sed enim
                      ut sem viverra. Euismod nisi porta lorem mollis. Viverra
                      mauris in aliquam sem fringilla. Ac auctor augue mauris
                      augue neque. Egestas congue quisque egestas diam in arcu
                      cursus euismod. Mattis enim ut tellus elementum sagittis
                      vitae et leo. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Sit amet purus gravida quis. Eget
                      nulla facilisi etiam dignissim diam quis enim. Nulla at
                      volutpat diam ut venenatis. Quis eleifend quam adipiscing
                      vitae proin sagittis nisl rhoncus mattis. Vitae aliquet
                      nec ullamcorper sit. Tincidunt lobortis feugiat vivamus
                      at. Sit amet consectetur adipiscing elit. Volutpat est
                      velit egestas dui id ornare. Aliquet eget sit amet tellus
                      cras. Vitae congue mauris rhoncus aenean vel.
                    </Text>
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
