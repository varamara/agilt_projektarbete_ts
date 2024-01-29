import BtnOutlineBlack from "../buttons/BtnOutlineBlack";
import "./category_selection.scss";
import { Link } from 'react-router-dom';




const CategorySelection = () => {
  return (
    <div className='cat_select'>
      <Link to="/dresses">
        <BtnOutlineBlack className='btn_outline_black' aria-label="Go to dresses" title="klänningar">Klänningar</BtnOutlineBlack>
      </Link>
      <Link to="/blouses">
      <BtnOutlineBlack className='btn_outline_black' aria-label="Go to blouses" title="blusar">Blusar</BtnOutlineBlack>
      </Link>
      <Link to="/tops">
      <BtnOutlineBlack className='btn_outline_black' aria-label="Go to tops" title="toppar">Toppar</BtnOutlineBlack>
      </Link>
      <Link to="/skirts">
      <BtnOutlineBlack className='btn_outline_black' aria-label="Go to skirts" title="kjolar">Kjolar</BtnOutlineBlack>
      </Link>
      <Link to="/pants">
      <BtnOutlineBlack className='btn_outline_black' aria-label="Go to pants" title="byxor">Byxor</BtnOutlineBlack>
      </Link>
      <Link to="/shorts">
      <BtnOutlineBlack className='btn_outline_black' aria-label="Go to shorts" title="shorts">Shorts</BtnOutlineBlack>
      </Link>
      <Link to="/jumpsuits">
      <BtnOutlineBlack className='btn_outline_black' aria-label="Go to jumpsuits" title="jumpsuits">Jumpsuits</BtnOutlineBlack>
      </Link>
      <Link to="/kimonos">
      <BtnOutlineBlack className='btn_outline_black' aria-label="Go to kimonos" title="kimonos">Kimonos</BtnOutlineBlack>
      </Link>
    </div>
  );
};

export default CategorySelection;
