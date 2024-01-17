import { useState } from "react"
import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />

      <Input
        placeholder="Username"
        fontSize={14}
        type="text"
        size={"sm"}
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />

      <Input
        placeholder="Fullname"
        fontSize={14}
        type={ showPassword ? "text" : "password" }
        size={"sm"}
        value={inputs.fullname}
        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
      />

      <InputGroup>
        <Input
          placeholder="Password"
          fontSize={14}
          type="password"
          size={"sm"}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />

        <InputRightElement>
          <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Sign Up
      </Button>
    </>
  )
}

export default Signup