import BtnOutlineBlack from "../buttons/BtnOutlineBlack";
import "./category_selection.scss";
import { Link } from 'react-router-dom';




const CategorySelection = () => {
  return (
    <div className='cat_select'>
      <Link to="/dresses">
        <BtnOutlineBlack className='btn_outline_black'>Klänningar</BtnOutlineBlack>
      </Link>
      <Link to="/blouses">
      <BtnOutlineBlack className='btn_outline_black'>Blusar</BtnOutlineBlack>
      </Link>
      <Link to="/tops">
      <BtnOutlineBlack className='btn_outline_black'>Toppar</BtnOutlineBlack>
      </Link>
      <Link to="/skirts">
      <BtnOutlineBlack className='btn_outline_black'>Kjolar</BtnOutlineBlack>
      </Link>
      <Link to="/pants">
      <BtnOutlineBlack className='btn_outline_black'>Byxor</BtnOutlineBlack>
      </Link>
      <Link to="/shorts">
      <BtnOutlineBlack className='btn_outline_black'>Shorts</BtnOutlineBlack>
      </Link>
      <Link to="/jumpsuits">
      <BtnOutlineBlack className='btn_outline_black'>Jumpsuits</BtnOutlineBlack>
      </Link>
      <Link to="/kimonos">
      <BtnOutlineBlack className='btn_outline_black'>Kimonos</BtnOutlineBlack>
      </Link>
    </div>
  );
};

export default CategorySelection;
