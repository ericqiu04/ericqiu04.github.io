import { Information } from "../../js files/projectInfo";
import PCard from "./projectCard";
import { VStack, Text, HStack, Flex, Grid } from "@chakra-ui/react";
export const Projects = () => {


    return (
        <>

            <Flex display={['none', 'none', 'none', 'block', 'block']}>
                <VStack>
                    <Text fontSize={50} as='b' mt={-200} color="#3C6255">
                        Projects
                    </Text>


                    <HStack>
                        <Grid templateColumns='repeat(2, 1fr)' gap={20} padding={10}>
                            {Information.map(PCard)}
                        </Grid>
                    </HStack>


                </VStack>
            </Flex>

            <Flex display={['block', 'block', 'block', 'none', 'none']} >
                <VStack >
                    <Text fontSize={50} as='b' mt={-50} mb={10} color="#3C6255">
                        Projects
                    </Text>

                    <VStack>
                        <Grid templateColumns='repeat(1, 1fr)' gap={10} padding={10}>
                            {Information.map(PCard)}
                        </Grid>
                    </VStack>


                </VStack>
            </Flex>
        </>

    )
}