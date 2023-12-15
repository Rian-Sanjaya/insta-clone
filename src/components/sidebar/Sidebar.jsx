import { Link as RouterLink } from "react-router-dom"
import { Box, Flex, Link } from "@chakra-ui/layout"
import { InstagramLogo, InstagramMobileLogo, SearchLogo, NotificationsLogo, CreatePostLogo } from "../../assets/constant"
import { AiFillHome } from "react-icons/ai"
import { BiLogOut } from "react-icons/bi"
import { Avatar } from "@chakra-ui/avatar"
import { Tooltip } from "@chakra-ui/tooltip"

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notification",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Rian S" src="/profilepic.png" />,
      text: "Profile",
      link: "/kapiten"
    }
  ]

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      px={{ base: 2, md: 4}}
      position={"sticky"}
      top={0}
      left={0}
    >
      <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
        <Link 
          as={RouterLink} 
          to={"/"} 
          p={2} 
          display={{ base: "block", md: "none" }} 
          cursor={"pointer"} 
          borderRadius={6} 
          w={10}
          _hover={{
            bg: "whileAlpha.200",
          }}
        >
          <InstagramMobileLogo />
        </Link>
        <Link as={RouterLink} to={"/"} pl={2} display={{ base: "none", md: "block" }} cursor={"pointer"}>
          <InstagramLogo />
        </Link>

        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "noone"}}
            >
              <Link
                as={RouterLink}
                to={item.link}
                display={"flex"}
                alignItems={"center"}
                gap={4}
                _hover={{
                  bg: "whiteAlpha.400"
                }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                { item.icon }
                <Box display={{ base: "none", md: "block" }}>
                  { item.text }
                </Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>

        <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "noone"}}
        >
          <Link
            as={RouterLink}
            to={"/auth"}
            display={"flex"}
            alignItems={"center"}
            gap={4}
            _hover={{
              bg: "whiteAlpha.400"
            }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            mt={"auto"}
          >
            <BiLogOut size={25} />
            <Box display={{ base: "none", md: "block" }}>
              Logout
            </Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  )
}

export default Sidebar