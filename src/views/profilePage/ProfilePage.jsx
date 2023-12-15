import { Container, Flex } from "@chakra-ui/react"
import ProfileHeader from "../../components/profile/ProfileHeader"
import ProfileTabs from "../../components/profile/ProfileTabs"
import ProfilePosts from "../../components/profile/ProfilePosts"

const ProfilePage = () => {
  return (
    <Container maxW={"container.lg"} py={5}>
      <Flex
        flexDirection={"column"}
        w={"full"}
        mx={"auto"}
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
      >
        <ProfileHeader />
      </Flex>
      <Flex
        maxW={"full"}
        mx={"auto"}
        px={{ base: 2, sm: 4 }}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
        direction={"column"}
      >
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  )
}

export default ProfilePage