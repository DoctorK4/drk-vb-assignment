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
        data && sortedData.map((item, index) => 
          <>
            { showDateSeparator(item, index, sortedData) ? 
            <DateSeparator>{formatKRDate(item.created_at)}</DateSeparator> 
            : null }
            <Section >
              <MsgBox key={item.id} msgInfo={item} type={isOpponent(item.user_id)} />
            </Section>
          </>
        )
      }
    </ChatContainer>
  );
}

const ChatContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 720px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 1rem 1rem 1rem;
  background-color: #FFF9EF;
  align-items: flex-start;
`;

const Section = styled.section`
  line-height: 100%;
  width: 100%;
  height: fit-content;
  margin: 0.5rem 0;
`;

const DateSeparator = styled.p`
  display: block;
  text-align: center;
  font-size: xx-small;
  color: white;
  background-color: lightgray;
  border-radius: 8px;
  width: 30%;
  line-height: 1rem;
  margin: 0.5rem auto;
  position: relative;
  top: 0rem;
`;

export default ChatList;