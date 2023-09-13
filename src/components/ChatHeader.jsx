import { HStack, IconButton, Tooltip, useDisclosure } from "@chakra-ui/react";
import { FaCircleUser, FaShare } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { IoMdChatbubbles } from "react-icons/io";
import { BiSolidExit } from "react-icons/bi";
import ExitRoomDialog from "./ExitRoomDialog";

function ChatHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack py={4} justifyContent="space-between">
      <HStack>
        <Tooltip label="username : prem">
          <IconButton
            aria-label="username"
            size="lg"
            icon={<FaCircleUser size={24} />}
          />
        </Tooltip>
        <Tooltip label="room : chat adda">
          <IconButton
            aria-label="room"
            size="lg"
            icon={<IoMdChatbubbles size={24} />}
          />
        </Tooltip>
        <Tooltip label="users">
          <IconButton
            onClick={onOpen}
            aria-label="users"
            size="lg"
            icon={<HiUsers size={24} />}
          />
        </Tooltip>
        <Tooltip label="share invite">
          <IconButton
            onClick={onOpen}
            aria-label="share"
            size="lg"
            icon={<FaShare size={24} />}
          />
        </Tooltip>
      </HStack>

      <Tooltip label="exit room">
        <IconButton
          onClick={onOpen}
          aria-label="exit"
          size="lg"
          icon={<BiSolidExit size={24} />}
        />
      </Tooltip>

      <ExitRoomDialog isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
}

export default ChatHeader;
