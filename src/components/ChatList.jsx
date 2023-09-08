import styled from "styled-components";
import isOpponent from "../utils/isOpponent";
import MsgBox from "./MsgBox";
import showDateSeparator from "../utils/showDateSeparator";
import formatKRDate from "../utils/formatKRDate";

const ChatList = ({ data }) => {
  const sortedData = data.sort((a, b) =>  new Date(a.created_at) - new Date(b.created_at));

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <ChatContainer>
      {
        data && sortedData.map((item, index) => showDateSeparator(item, index, sortedData) ? 
          <>
            <DateSeparator>{formatKRDate(item.created_at)}</DateSeparator>
            <MsgBox key={item.id} msgInfo={item} type={isOpponent(item.user_id)}/>
          </>
        :
          <MsgBox key={item.id} msgInfo={item} type={isOpponent(item.user_id)}/>)
      }
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 720px;
  overflow-y: scroll;
  padding: 0 1rem;
  background-color: #FFF9EF;
  align-items: flex-start;
  padding: 15px;
`;

const DateSeparator = styled.p`
  display: inline-block;
  text-align: center;
  font-size: xx-small;
  color: white;
  background-color: lightgray;
  border-radius: 3px;
  width: 30%;
  height: 1rem;
  line-height: 1rem;
  margin: 0.5rem auto;
`;

export default ChatList;