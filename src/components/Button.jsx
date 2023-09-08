import styled from "styled-components";

const Button = ({ type, imgSrc, icon, ...rest }) => {
  return (
  <CommonButton 
    type={type}
    imgSrc={imgSrc} 
    icon={icon}
    {...rest}
    ></CommonButton>);
};

const CommonButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  background-image: url(${({imgSrc}) => imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  width: 32px;
  height: 32px;
  position: relative;
  background-position: 0px 0px;
  top: ${({icon}) => icon === "goback" ? "12px" : "0"};
  left: ${({icon}) => icon === "goback" ? "6px" : "0"};
`;

export default Button;