import React from 'react';
import './brands.scss';

const Brands: React.FC = () => {
    return (
    <div className='container'>
        <div>
        <img src="src\assets\images\FrankDandy.png" alt="frank-dandy"  title='brand'/>
        </div>
        <div>
            <img src="src\assets\images\modstrom.png" alt="modstrom" title='brand'/>
        </div>
        <div>
            <img src="src\assets\images\OrionLondon.jpg" alt="OrionLondon" title='brand'/>
        </div>
        <div>
            <img src="src\assets\images\oddmolly.png" alt="oddmolly" title='brand'/>
        </div>
        <div>
            <img src="src\assets\images\OrionLondon.jpg" alt="OrionLondon" title='brand'/>
        </div>
        <div>
            <img src="src\assets\images\FrankDandy.png" alt="frank-dandy" title='brand'/>
        </div>
    </div>
    );
};

export default Brands;
