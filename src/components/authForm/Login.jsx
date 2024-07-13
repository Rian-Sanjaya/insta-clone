import { useState } from "react"
import { Input, Button, Alert, AlertIcon, Tooltip } from "@chakra-ui/react"
import useLogin from "../../hooks/useLogin"

const Login = () => {
  
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })
  const { loading, error, login } = useLogin();
  
  return (
    <>
      <Tooltip
				hasArrow
				label={"try username: johndoe@gmail.com"}
				placement="bottom"
				ml={1}
				openDelay={500}
			>
        <Input
          placeholder="johndoe@gmail.com"
          fontSize={14}
          type="email"
          size={"sm"}
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
      </Tooltip>

      <Tooltip
				hasArrow
				label={"try password: password"}
				placement='bottom'
				ml={1}
				openDelay={500}
			>
        <Input
          placeholder="password"
          fontSize={14}
          type="password"
          size={"sm"}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
      </Tooltip>

      {error && (
				<Alert status='error' fontSize={13} p={2} borderRadius={4}>
					<AlertIcon fontSize={12} />
					{error.message}
				</Alert>
			)}
      <Button
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
        // isDisabled={loading}
        isLoading={loading}
        onClick={() => login(inputs)}
      >
        Log in
      </Button>
    </>
  )
}

export default Login