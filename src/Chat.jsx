import { useEffect, useState } from "react";
import styled from "styled-components";
import getChat from "./apis/getChat";
import ChatList from "./components/ChatList";
import HeaderBar from "./components/HeaderBar";
import InputBar from "./components/InputBar";
import Button from "./components/Button";
import arrow_upward from "./assets/arrow_upward.svg";
import placeholder from "./constant/placeholder";
import useInput from "./hooks/useInput";
import formatNowtoString from "./utils/formatNowtoString";

function Chat () {
  const [ chatData, setChatData ] = useState();
  const inputValue = useInput();
  const fetchChat = async () => {
    const data = await getChat();
    setChatData(data);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const msgToAdd =  {
      "id": chatData.length + 1,
      "user_id": 1,
      "user_name": "소개녀",
      "photo_url": "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      "created_at": formatNowtoString(),
      "msg": {
          "mtype": "text",
          "content": inputValue.value,
        }
    };
    const newData = [...chatData, msgToAdd]
    setChatData(newData);
    inputValue.setValue("");
  };

  useEffect(() => {
    fetchChat();
  }, [])

  if (!chatData) return <div>loading...</div>;

  return (
    <div>
      <HeaderBar chatData={chatData} />
      <ChatList data={chatData}/>
      <InputBar>
        <form onSubmit={handleSubmit}>
          <MsgInput placeholder={placeholder} {...inputValue}/>
          <Button type="submit" alt="전송" imgSrc={arrow_upward}/>
        </form>
      </InputBar>
    </div>
  );
}

export default Chat;

const MsgInput = styled.input`
  border-radius: 12px;
  width: 60%;
  height: 32px;
  border: lightgray 2px solid;
`;