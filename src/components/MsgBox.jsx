import styled from "styled-components";
import formatKRTime from "../utils/formatKRTime";

const MsgBox = ({ msgInfo, type }) => {
  if (msgInfo.msg.mtype === "photo") return null;
  
  return (
    <>
      {type === "opponent" ? 
        <>
          <Avatar src={msgInfo.photo_url} width={25} alt={"상대방 프로필"} />
          <OpponentName>{msgInfo.user_name}</OpponentName> 
        </>
      : null}
      
      <SingleMsg type={type}>
        <Box type={type}>
          {msgInfo.msg.content.split("\\n").map((line, index) => <p key={line + index}>{line}</p>)}
        </Box>
        <SentTime type={type}>{formatKRTime(msgInfo.created_at)}</SentTime>
      </SingleMsg>
    </>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ type }) => type === "opponent" ? "white" : "#03006E"};
  color: ${({ type }) => type === "opponent" ? "black" : "white"};
  border-radius: ${({ type }) => type === "opponent" ? "0 12px 12px 12px" : "12px"};
  padding: 0.5rem 1rem;
  line-height: 1.5rem;
  max-width: 70%;
  font-size: small;
  position: relative;
  margin: ${({ type }) => type === "opponent" ? "2px auto 0 2rem" : "1rem 0 0 auto"};

  p {
    margin: 0;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  object-fit: cover;
  position: relative;
  top: 3rem;
`;

const SentTime = styled.p`
  font-size: xx-small;
  color: gray;
  position: relative;
  display: inline-block;
  top: 12px;
`;

const OpponentName = styled.p`
  font-size: small;
  position: relative;
  left: 2rem;
  top: 0.5rem;
`;

const SingleMsg = styled.div`
  display: flex;
  flex-direction: ${({ type }) => type === "opponent" ? "row" : "row-reverse"};
`;

export default MsgBox;