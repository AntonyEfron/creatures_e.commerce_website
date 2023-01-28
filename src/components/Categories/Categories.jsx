import React from 'react';
import { Link } from 'react-router-dom';
import '../Categories/Categories.css'


function Categories() {
    return ( 
        <div className="categories" style={{margin:'4rem'}}>
            <div className="col">
                <div className="rows">
                    <img src="img/Categories/1.jpg" alt="" />
                    <button id='link'><Link to="/products/1" className='link'>Herbs</Link></button>
                </div>
                <div className="rows">
                    <img src="img/Categories/2.jpg" alt="" />
                    <button id='link'><Link to="/products/1" className='link'>Climbers</Link></button></div>
            </div>
            <div className="col">
                <div className="rows">
                    <img src="img/Categories/3.jpg" alt="" />
                    <button id='link'><Link to="/products/1" className='link'>Carnivorous</Link></button></div>
            </div>
            <div className="col col-l">
                <div className="rows">
                    <div className="col">
                        <div className="rows">
                        <img src="img/Categories/4.jpg" alt="" />
                       <button id='link'><Link to="/products/1" className='link'>Bushes</Link></button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="rows">
                        <img src="img/Categories/5.jpg" alt="" />
                    <button id='link'><Link to="/products/1" className='link'>Bonsai Trees</Link></button>
                        </div>
                    </div>
                </div>
                <div className="rows">
                <img src="img/Categories/6.jpg" alt="" />
                    <button id='link'><Link to="/products/1" className='link'>Medicinal</Link></button>
                </div>
            </div>
        </div>
     );
}

export default Categories;