import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Information } from "../../js files/projectInfo";
import PCard from "./projectCard";
import { VStack, Text, HStack, Flex, Grid } from "@chakra-ui/react";
export const Projects = () => {

    const [selectedId, setSelectedId] = useState(null)

    return (
        <>

            <Flex display={['none', 'none', 'block', 'block']}>
                <VStack>
                    <Text fontSize={50} as='b' mt={-200}>
                        Projects
                    </Text>


                    <HStack>
                        <Grid templateColumns='repeat(2, 1fr)' gap={6} padding = {10}>
                            {Information.map(PCard)}
                        </Grid>
                    </HStack>


                </VStack>
            </Flex>

            <Flex display={['block', 'block', 'none', 'none']} >
                <VStack >
                    <Text fontSize={50} as='b' mt={-50}>
                        Projects
                    </Text>

                    <VStack>
                        {Information.map(PCard)}
                    </VStack>


                </VStack>
            </Flex>
        </>

    )
}