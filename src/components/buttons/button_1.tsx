import "./button_1.scss"
import { ButtonHTMLAttributes, FC } from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnProp?: string;
}

const Button: FC<ButtonProps> = ({ children, btnProp, ...rest }) => {
  return (
    <button {...rest}>
      {children}
      {btnProp && <span>{btnProp}</span>}
    </button>
  );
};

export default Button;