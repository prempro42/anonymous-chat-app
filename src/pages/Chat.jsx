import { useState } from "react";
import { Container, useDisclosure } from "@chakra-ui/react";
import ChatHeader from "../components/ChatHeader";
import ChatFooter from "../components/ChatFooter";
import ChatMessages from "../components/ChatMessages";
import { UsersList } from "../components/UsersList";
import { ShareInviteModal } from "../components/ShareInviteModal";
import { useLocation } from "react-router-dom";

function Chat() {
  const usersListModal = useDisclosure();
  const shareInviteModal = useDisclosure();
  let { state } = useLocation();
  if (!state) {
    state = JSON.parse(localStorage.getItem("user"));
  }
  console.log({ state });
  const [messages, setMessages] = useState([
    { from: "computer", text: "Hi, I'm Ditto Bot" },
    { from: "me", text: "Hey there!" },
    { from: "me", text: `${state.user} here...` },
    {
      from: "computer",
      text: "Nice to meet you. You can send me message and i'll reply you with same message.",
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");

    setTimeout(() => {
      setMessages((old) => [...old, { from: "computer", text: data }]);
    }, 1000);
  };

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
      <ChatMessages messages={messages} />
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
