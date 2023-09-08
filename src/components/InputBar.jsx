import styled from "styled-components";
import Bar from "./Bar";
import add_circle from "../assets/add_circle.svg";

const InputBar = ({ children }) => {
  return (
    <Bar type="input">
      <OptionButton type="button" alt="옵션" />
      { children }
    </Bar>
  );
}

const OptionButton = styled.button`
  position: relative;
  left: 3%;
  margin-top: 17px;
  margin-left: 4px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  background-image: url(${add_circle});
  background-repeat: no-repeat;
  background-size: cover;
  width: 28px;
  height: 28px;
  background-position: 0px 0px;
`;

export default InputBar;