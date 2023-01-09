import { Flex, Icon, IconButton, Text, Slide } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { useColorModeValue } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { useDisclosure, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import MobileNav from "./mobileNav";
import icon from "../../matcha-tea-icon.png";

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
      p={4}
      color={color}
      sx={{
        position: "-webkit-sticky",
        /* Safari */ position: "sticky",
        top: "0",
      }}
      backdropBlur="20px"
      zIndex={100}
      position="relative"
      
    >
      <Box backdropFilter='auto' backdropBlur='20px' p = {4} mt = {-5}
      >
        <Flex
          alignItems="center"
          justify="space-between"
          ml={["5px", "5px", "20px", "20px"]}
          mr={["5px", "5px", "20px", "20px"]}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <HStack>
              <Text color={textCol} as="b" fontSize="40px" justify="left">
                EQ
              </Text>
              <Image boxSize="50px" src={icon}></Image>
            </HStack>
          </motion.a>

          <Flex display={["none", "none", "flex", "flex"]}>
            <HStack spacing={8} justify="right">
              <motion.a
                href="https://github.com/ericqiu04"
                target="blank"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Icon
                  color={textCol}
                  as={FaGithub}
                  boxSize={["5", "5", "12", "12"]}
                />
              </motion.a>

              <motion.a
                color={textCol}
                href="home"
                target="blank"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Icon
                  color={textCol}
                  as={HiDocumentText}
                  boxSize={["5", "5", "14", "14"]}
                />
              </motion.a>

              <motion.a
                color={textCol}
                href="https://www.linkedin.com/in/eric-qiu-72115623b/"
                target="blank"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Icon
                  color={textCol}
                  as={FaLinkedin}
                  boxSize={["5", "5", "12", "12"]}
                />
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

          <Flex display={["flex", "flex", "none", "none"]}>
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
