import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Center,
  InputGroup,
  Icon,
  Highlight,
  Image,
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaUserSecret } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { socket } from "../socket-client";

const SignIn = () => {
  const { invitedRoomName } = useParams();
  const roomInvitedText = `You've been invited to join room: ${invitedRoomName}`;
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", userroom: "" });

  useEffect(() => {
    if (invitedRoomName) {
      setUser((prevState) => ({
        ...prevState,
        userroom: invitedRoomName,
      }));
    }
  }, []);

  const handleLogin = () => {
    const userState = {
      username: user.username,
      room: user.userroom,
    };
    localStorage.setItem("user", JSON.stringify(userState));
    socket.connect();
    socket.emit("join-room", userState);
    navigate("/chat", {
      state: userState,
    });
  };

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center height={"40rem"}>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading>
              <Icon as={FaUserSecret} boxSize={12} />
            </Heading>
            <Heading fontSize="2xl">Anonymous Chatting</Heading>
          </Stack>
          {invitedRoomName && (
            <Heading size="sm" lineHeight="tall" textAlign="center">
              <Highlight
                query={invitedRoomName}
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "purple.100",
                }}
              >
                {roomInvitedText}
              </Highlight>
            </Heading>
          )}
          <VStack
            as="form"
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h="max-content !important"
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            p={{ base: 5, sm: 10 }}
            spacing={8}
            onSubmit={handleLogin}
          >
            <VStack spacing={4} w="100%">
              <FormControl id="email">
                <FormLabel>Username</FormLabel>
                <Input
                  variant="filled"
                  rounded="md"
                  type="text"
                  isRequired
                  value={user.username}
                  onChange={(e) =>
                    setUser((prevState) => ({
                      ...prevState,
                      username: e.target.value,
                    }))
                  }
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Room</FormLabel>
                <InputGroup size="md">
                  <Input
                    variant="filled"
                    rounded="md"
                    type="text"
                    isRequired
                    value={user.userroom}
                    onChange={(e) =>
                      setUser((prevState) => ({
                        ...prevState,
                        userroom: e.target.value,
                      }))
                    }
                  />
                </InputGroup>
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Button
                type="submit"
                bg="green.400"
                color="white"
                _hover={{
                  bg: "green.500",
                }}
                rounded="md"
                w="100%"
              >
                Enter Room
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Center>
      <Link href="https://github.com/prempro42/anonymous-chat-app" isExternal>
        <Image
          pos="absolute"
          top="5"
          right="5"
          width="30px"
          src="/icons8-github.svg"
        />
      </Link>
    </Container>
  );
};

export default SignIn;
