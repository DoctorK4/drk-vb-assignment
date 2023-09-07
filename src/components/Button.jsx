const Button = ({ type, imgSrc, }) => {
  return (
  <button type={type} 
    style={{
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
        backgroundImage: `url(${imgSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "32px",
        height: "32px",
        backgroundPosition: "0px 0px",}}
        aria-label="뒤로가기"
    ></button>);
};


export default Button;