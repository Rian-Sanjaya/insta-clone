import { useState } from "react"
import { Input, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })

  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />

      <Input
        placeholder="Password"
        fontSize={14}
        type="password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={() => navigate("/")}>
        Log in
      </Button>
    </>
  )
}

export default Login