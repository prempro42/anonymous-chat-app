import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Box, Button, Center, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();

  return (
    <Box
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <VStack w={{ md: "60vw" }}>
        <Player
          src="/src/assets/404.json"
          loop={false}
          keepLastFrame={true}
          autoplay
        ></Player>
        <Button type="button" rounded="md" onClick={() => navigate("/")}>
          Go Home
        </Button>
      </VStack>
    </Box>
  );
  c;
}

export default Page404;
