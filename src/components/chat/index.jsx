import React from "react";
import { StyledChat, StyledChatButton } from "./styled";
import chatIcon from "../../assets/message-icon.png";

function Chat() {
    return (
        <StyledChat>
            <StyledChatButton>
                <img src={chatIcon} />
            </StyledChatButton>
        </StyledChat>
    )
}

export default Chat;