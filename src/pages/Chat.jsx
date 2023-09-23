import { useEffect, useState } from "react";
import { Container, useDisclosure } from "@chakra-ui/react";
import ChatHeader from "../components/ChatHeader";
import ChatFooter from "../components/ChatFooter";
import ChatMessages from "../components/ChatMessages";
import { UsersList } from "../components/UsersList";
import { ShareInviteModal } from "../components/ShareInviteModal";
import { useLocation } from "react-router-dom";
import { socket } from "../socket-client";

function Chat() {
  const usersListModal = useDisclosure();
  const shareInviteModal = useDisclosure();
  let { state } = useLocation();
  if (!state) {
    state = JSON.parse(localStorage.getItem("user"));
  }

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;
    socket.emit("message", data);
    setInputMessage("");
  };

  useEffect(() => {
    socket.on("messageChannel", (data) => {
      setMessages((old) => [...old, data]);
    });
  }, [socket]);

  return (
    <Container
      maxW={{ base: "100%", md: "container.sm" }}
      h={"100vh"}
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={"column"}
    >
      <ChatHeader
        state={state}
        usersListModal={usersListModal}
        shareInviteModal={shareInviteModal}
      />
      <ChatMessages messages={messages} username={state.username} />
      <ChatFooter
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
      />
      <UsersList usersListModal={usersListModal} />
      <ShareInviteModal shareInviteModal={shareInviteModal} state={state} />
    </Container>
  );
}

export default Chat;
