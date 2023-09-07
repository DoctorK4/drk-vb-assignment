import { useEffect, useState } from "react";
import ChatList from "./components/ChatList";
import getChat from "./apis/getChat";
import HeaderBar from "./components/HeaderBar";
import InputBar from "./components/InputBar";

function Chat () {
  const [ chatData, setChatData ] = useState();

  const fetchChat = async () => {
    const data = await getChat();
    setChatData(data);
  };

  useEffect(() => {
    fetchChat();
  }, [])

  if (!chatData) return <div>loading...</div>;

  return (
    <div>
      <HeaderBar chatData={chatData} />
      <ChatList data={chatData}/>
      <InputBar />
    </div>
  );
}

export default Chat;