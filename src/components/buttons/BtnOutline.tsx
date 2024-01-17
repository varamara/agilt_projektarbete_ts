import "./btn_outline.scss"

import { ButtonHTMLAttributes, FC } from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnProp?: string;
}

const BtnOutline: FC<ButtonProps> = ({ children, btnProp, ...rest }) => {
  return (
    <button {...rest}>
      {children}
      {btnProp && <span>{btnProp}</span>}
    </button>
  );
};

export default BtnOutline;