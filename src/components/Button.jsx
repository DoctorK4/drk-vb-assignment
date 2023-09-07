const Button = ({ type, imgSrc, ...rest }) => {
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
        position: "relative",
        backgroundPosition: "0px 0px",}}
    {...rest}
    ></button>);
};


export default Button;