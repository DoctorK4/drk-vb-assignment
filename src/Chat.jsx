import { useEffect, useState } from "react";
import styled from "styled-components";
import getChat from "./apis/getChat";
import ChatList from "./components/ChatList";
import HeaderBar from "./components/HeaderBar";
import InputBar from "./components/InputBar";
import arrow_upward from "./assets/arrow_upward.svg";
import placeholder from "./constant/placeholder";
import useInput from "./hooks/useInput";
import formatMsgtoAdd from "./utils/formatMsgtoAdd";

function Chat () {
  const [ chatData, setChatData ] = useState();
  const { value, setValue, onChange} = useInput();
  const fetchChat = async () => {
    const data = await getChat();
    setChatData(data);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newData = [...chatData, formatMsgtoAdd(value, chatData.length)]
    setChatData(newData);
    setValue(prev => "");
    window.scrollTo(0, document.body.scrollHeight);
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
          <MsgInput placeholder={placeholder} value={value} onChange={onChange}/>
          <SubmitButton type="submit" alt="전송" disabled={!value}/>
        </form>
      </InputBar>
    </div>
  );
}

export default Chat;

const MsgInput = styled.input`
  display: inline-block;
  margin: 0 auto;
  position: relative;
  right: 50%;
  top: 25%;
  border-radius: 12px;
  width: 100%;
  height: 32px;
  border: lightgray 2px solid;
  padding: 0 1rem;
`;

const SubmitButton = styled.button`
  border: none;
  background-color: ${({disabled}) => disabled ? "lightgray" : "blue"};
  border-radius: 50%;
  cursor: pointer;
  background-image: url(${arrow_upward});
  background-repeat: no-repeat;
  background-size: cover;
  width: 28px;
  height: 28px;
  position: relative;
  background-position: 0px 0px;
  left: 60%;
  bottom: 22%;
`