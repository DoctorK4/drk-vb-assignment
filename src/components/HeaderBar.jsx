import styled from "styled-components";
import isOpponent from "../utils/isOpponent"
import Avatar from "./Avatar"
import Bar from "./Bar"
import chevron_left from "../assets/chevron_left.svg";
import Button from "./Button";

const HeaderBar = ( { chatData } ) => {

  return (
    <Bar type="header" >
      <Button type="button" alt="뒤로가기" imgSrc={chevron_left}/>
      <OppoentName>{chatData.find((item) => isOpponent(item.user_id)).user_name}</OppoentName>
      <Avatar src={ chatData.find((item) => isOpponent(item.user_id)).photo_url} />
    </Bar>
  )
};

export default HeaderBar;

const OppoentName = styled.p`
  font-size: large;
`;

