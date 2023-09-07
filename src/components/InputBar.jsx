import Bar from "./Bar";
import Button from "./Button";
import add_circle from "../assets/add_circle.svg";

const InputBar = ({ children }) => {
  return (
    <Bar type="input">
      <Button type="button" alt="옵션" imgSrc={add_circle}/>
      { children }
    </Bar>
  );
}

export default InputBar;



