import { Flex, Icon, IconButton, Text, Slide } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HiDocumentText } from "react-icons/hi";
import { useColorModeValue } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { useDisclosure, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import MobileNav from "./mobileNav";
import icon from "../../matcha-tea-icon.png";
import { Link } from "react-scroll";
import resume from '../../images/Eric_Qiu_Resume.pdf'

import { Box } from "@chakra-ui/react";
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  {
    //const { colorMode, toggleColorMode } = useColorMode()
  }
  const color = useColorModeValue("black", "white");
  const textCol = useColorModeValue("#61876E", "#A6BB8D");
  {
    /*const handleClick = () => {
        toggleColorMode();
        const styleEl = document.createElement('style');
        const cssText = document.createTextNode(
            'html * { transition: color, background-color 0.5s ease-out!important }',
        );
        styleEl.appendChild(cssText);
        document.head.appendChild(styleEl);
        setTimeout(() => {
            document.head.removeChild(styleEl);
        }, 300);
    };*/
  }
  return (
    <Box
      bg="transparent"
      maxW="100%"
      w="100%"
      py={4}
      color={color}
      zIndex={100}
      position="fixed"


    >
      <Box backdropFilter='auto' backdropBlur='20px' p={4} mt={-5}
      >
        <Flex
          alignItems="center"
          justify="space-between"
          ml={["10px", "10px", "40px", "40px"]}
          mr={["10px", "10px", "40px", "40px"]}
        >
          <motion.a
            behavior="smooth"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="home" spy={true} smooth={true} duration={500}>

              <HStack>
                <Text color={textCol} as="b" fontSize="40px" justify="left">
                  EQ
                </Text>
                <Image boxSize="50px" src={icon}></Image>
              </HStack>
            </Link>
          </motion.a>



          <Flex display={["none", "none", 'none', "flex", "flex"]}>
            <HStack spacing={8} justify="right">

              <motion.a

                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link to="home" spy={true} smooth={true} duration={500}>
                  <HStack>
                
                    <Text color={textCol} as="b" fontSize="15px">
                      Home
                    </Text>
                  </HStack>
                </Link>

              </motion.a>

              <motion.a

                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link to="projects" spy={true} smooth={true} duration={500} offset = {-300}>
                  <HStack>
                    
                    <Text color={textCol} as="b" fontSize="15px">
                      Projects
                    </Text>
                  </HStack>
                </Link>

              </motion.a>

              <motion.a

                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link to="about" spy={true} smooth={true} duration={500} offset = {-150}>
                  <HStack>
                    
                    <Text color={textCol} as="b" fontSize="15px">
                      About Me
                    </Text>
                  </HStack>

                </Link>

              </motion.a>

              <motion.a

                target="blank"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link to="contact" spy={true} smooth={true} duration={500}>
                  <HStack>
                    
                    <Text color={textCol} as="b" fontSize="15px">
                      Contact Me
                    </Text>
                  </HStack>
                </Link>

              </motion.a>

              <motion.a
                href = {resume}
                target="blank"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
               
                  <HStack>
                    <Icon
                      color={textCol}
                      as={HiDocumentText}
                      boxSize={["5", "5", "7", "7"]}
                    />
                    <Text color={textCol} as="b" fontSize="15px">
                      Resume
                    </Text>
                  </HStack>

               

              </motion.a>

              {/** 
                    {colorMode === "dark" ? (
                        <Icon color={textCol} as={MoonIcon} boxSize={['5', '5', '10', '10']} onClick={handleClick}>
                            Toggle {colorMode === "light" ? "Dark" : "Light"}
                        </Icon>
                    ) : (
                        <Icon color={textCol} as={SunIcon} boxSize={['5', '5', '10', '10']} onClick={handleClick}>
                            Toggle {colorMode === "light" ? "Dark" : "Light"}
                        </Icon>

                    )
                    }
                **/}
            </HStack>
          </Flex>

          <Flex display={["flex", "flex", 'flex', "none", "none"]}>
            <HStack spacing={8} justify="right">
              {/** {colorMode === "dark" ? (
                        <Icon color={textCol} as={MoonIcon} boxSize={['10', '10', '10', '10']} onClick={handleClick}>
                            Toggle {colorMode === "light" ? "Dark" : "Light"}
                        </Icon>
                    ) : (
                        <Icon color={textCol} as={SunIcon} boxSize={['10', '10', '10', '10']} onClick={handleClick}>
                            Toggle {colorMode === "light" ? "Dark" : "Light"}
                        </Icon>

                    )
                    } **/}

              {isOpen === false ? (
                <IconButton
                  color={textCol}
                  aria-label="Open-Menu"
                  size="lg"
                  bg="default"
                  fontSize="40"
                  mr={2}
                  icon={<HamburgerIcon />}
                  onClick={onToggle}
                />
              ) : (
                <></>
              )}
            </HStack>
          </Flex>
        </Flex>
        <Flex>
          <Slide
            zIndex={20}
            direction="right"
            in={isOpen}
            sx={{ position: "-webkit-sticky", /* Safari */ position: "sticky" }}
          >
            <IconButton
              zIndex={30}
              position="absolute"
              right={10}
              top={10}
              md={20}
              color={textCol}
              aria-label="Open-Menu"
              size="lg"
              fontSize="30"
              bg="default"
              mr={2}
              icon={<CloseIcon />}
              onClick={onToggle}
            />

            <MobileNav />
          </Slide>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
