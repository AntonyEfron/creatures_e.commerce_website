import React from 'react';
import { Link } from 'react-router-dom';
import '../Card/Card.css'
function Card({item}) {
    return ( 
        
           <Link to={`/products/${item.id}`} style={{textDecoration:'none',color:'gray'}}>
        <div className="card">
            <div className="image">
                <img src={item.img} alt="" className='fimg'/>
                <img src={item.img2} alt="" className='simg'/>
            </div>
            <div className="detail">  
              <div className="title">
                <p style={{margin:'0',textDecoration:'none'}}><b>{item.title}</b></p>
              </div>                    
               <div className="price">
                 <p style={{margin:'0',textDecoration:'line-through'}}>${item.oldPrice}</p> &nbsp;
                 <p style={{margin:'0'}}>${item.price}</p> 
              </div>   
            </div>
        </div>
        </Link>  
     );
}

export default Card;