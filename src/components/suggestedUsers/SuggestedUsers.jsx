import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={"bold"} cursor={"pointer"} _hover={{ color: "gray.400" }}>
          See all
        </Text>
      </Flex>

      <SuggestedUser name="Dan Abramov" follower={1392} avatar="https://bit.ly/dan-abramov" />
      <SuggestedUser name="Ryan Florence" follower={567} avatar="https://bit.ly/ryan-florence" />
      <SuggestedUser name="Christian Nwamba" follower={759} avatar="https://bit.ly/code-beast" />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        @ 2023 Build By{" "}
        <Link href="https://rian-sanjaya.github.io/" target="_blank" color={"blue.500"} fontSize={14}>Lonecode</Link>
      </Box>
    </VStack>
  )
}

export default SuggestedUsers