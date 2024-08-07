import { Box, Flex, Text } from "@chakra-ui/react"
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs"

const ProfileTabs = () => {
  return (
    <Flex
      justifyContent={"center"}
      w={"full"}
      gap={{ base: 4, sm: 10 }}
      textTransform={"uppercase"}
      fontWeight={"bold"}
      mb={4}
    >
      <Flex borderTop={"1px solid white"} gap={1} p={3} alignItems={"center"} cursor={"pointer"}>
        <Box fontSize={20}><BsGrid3X3 /></Box>
        <Text fontSize={12} display={{ base: "none", sm: "block"}}>Posts</Text>
      </Flex>
      
      <Flex gap={1} alignItems={"center"} cursor={"pointer"}>
        <Box fontSize={20}><BsBookmark /></Box>
        <Text fontSize={12} display={{ base: "none", sm: "block"}}>Saved</Text>
      </Flex>

      <Flex gap={1} alignItems={"center"} cursor={"pointer"}>
        <Box fontSize={20}><BsSuitHeart fontSize={"bold"} /></Box>
        <Text fontSize={12} display={{ base: "none", sm: "block"}}>Likes</Text>
      </Flex>
    </Flex>
  )
}

export default ProfileTabs