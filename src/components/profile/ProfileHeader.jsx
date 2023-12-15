import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react"

const ProfileHeader = () => {
  return (
    <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }}>
      <AvatarGroup size={{ base: "xl", md: "2xl" }} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
        <Avatar name="Lonecode" src="/profilepic.png" alt="Lonecode logo" />
      </AvatarGroup>

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex 
          direction={{ base: "column", sm: "row"}} 
          justifyContent={{ base: "center", sm: "flex-start" }} 
          alignItems={"center"}
          gap={4}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>Lonecode</Text>
          <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
            <Button bg={"white"} color={"black"} _hover={"whiteAlpha.800"} size={{ base: "xs", md: "sm" }}>
              Update Profile
            </Button>
          </Flex>
        </Flex>

        <Flex aligItems={"center"} gap={{ base: 2, md: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              149
            </Text>
            Followers
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              175
            </Text>
            Following
          </Text>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Text fontWeight={"bold"} fontSize={"sm"}>As a Lonecode</Text>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Text fontWeight={"bold"} fontSize={"sm"}>
            Tutorial that are meant to level up your skills as a programmer
          </Text>
        </Flex>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader