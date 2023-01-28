import React from 'react';
import Card from '../Card/Card';
import '../FeaturedProducts/FeaturedProducts.css'

function FeaturedProducts({type}) {
    const data = [
        {
            id:1,
            img: "img/Card_images/ren.jpg",
            img2:"img/Card_images/iphone.jpeg",
            title:'Food',
            isNew:true,
            oldPrice:'56',
            price:'50'
        },
        {
            id:2,
            img: "img/Card_images/ren.jpg",
            img2:"img/Card_images/iphone.jpeg",
            title:'Food',
            isNew:true,
            oldPrice:'56',
            price:'50'
        },
        {
            id:3,
            img: "img/Card_images/ren.jpg",
            img2:"img/Card_images/iphone.jpeg",
            title:'Food',
            isNew:true,
            oldPrice:'56',
            price:'50'
        },
        {
            id:4,
            img: "img/Card_images/ren.jpg",
            img2:"img/Card_images/iphone.jpeg",
            title:'Food',
            isNew:true,
            oldPrice:'56',
            price:'50'
        }
    ]
    return ( 
        <div className="featureditems" style={{paddingTop:'4rem',paddingBottom:'4rem'}}>
            <div className="topFeature">
                <h3 className='h3'><b>{type} Products</b></h3>
                <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita a maiores quae doloribus animi reiciendis ducimus doloremque non quia molestias beatae recusandae mollitia accusantium,</p>
            </div>
            <div className="bottomFeature">
               {data.map(item=>(
                <Card item={item} key={item.id}/>
               ))
               }
            </div> 
        </div>
     );
}

export default FeaturedProducts;