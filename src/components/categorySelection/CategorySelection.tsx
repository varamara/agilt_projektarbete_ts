import BtnOutlineBlack from "../buttons/BtnOutlineBlack";
import "./category_selection.scss";
import { Link } from 'react-router-dom';




const CategorySelection = () => {
  return (
    <div className='cat_select'>
      <Link to="/dresses">
        <BtnOutlineBlack className='btn_outline_black'>Klänningar</BtnOutlineBlack>
      </Link>
      <BtnOutlineBlack className='btn_outline_black'>Blusar</BtnOutlineBlack>
      <BtnOutlineBlack className='btn_outline_black'>Toppar</BtnOutlineBlack>
      <BtnOutlineBlack className='btn_outline_black'>Kjolar</BtnOutlineBlack>
      <BtnOutlineBlack className='btn_outline_black'>Byxor</BtnOutlineBlack>
      <BtnOutlineBlack className='btn_outline_black'>Shorts</BtnOutlineBlack>
      <BtnOutlineBlack className='btn_outline_black'>Jumpsuits</BtnOutlineBlack>
      <BtnOutlineBlack className='btn_outline_black'>Kimonos</BtnOutlineBlack>
    </div>
  );
};

export default CategorySelection;
