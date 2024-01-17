import { Image } from "@chakra-ui/image"
import { Box, Flex, Text, VStack } from "@chakra-ui/layout"
import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"
// import { useNavigate } from "react-router-dom"

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  
  // const navigate = useNavigate()

  // const handleAuth = () => {
  //   if (!inputs.email || !inputs.password) {
  //     alert("Please fill all the fields")
  //     return
  //   }

  //   navigate("/")
  // }

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram logo" />

          {isLogin ? <Login /> : <Signup />}

          <Flex justifyContent={"center"} alignItems={"center"} my={4} gap={1} w={"full"}>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>OR</Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          <Flex justifyContent={"center"} alignItems={"center"} cursor={"pointer"}>
            <Image src="/google.png" w={3} alt="Gooogle logo" />
            <Text mx={2} color={"blue.500"}>
              Log in with google
            </Text>
          </Flex>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box color={"blue.500"} cursor={"pointer"} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default AuthForm