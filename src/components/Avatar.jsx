import styled from "styled-components";

const Avatar = ({ src, size = 30, alt = "", page }) => (
  <Img
    src={src}
    alt={alt}
    size={size}
    page={page}
  />
);

const Img = styled.img`
  border-radius: 50%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  object-fit: cover;
  position: relative;
  top: ${({ page }) => page === "chat" ? "42px" : "12px"};
  right: ${({ page }) => page === "chat" ? "0" : "210px"};
`;

export default Avatar;