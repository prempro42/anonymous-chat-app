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
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUserSecret } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const naviagate = useNavigate();
  const [user, setUser] = useState({ username: "", userroom: "" });
  const handleLogin = () => {
    naviagate("/chat", { state: { user: user.username, room: user.userroom } });
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
    </Container>
  );
};

export default SignIn;
