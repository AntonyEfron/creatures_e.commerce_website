import React from 'react';
import Card from '../Card/Card';
import '../FeaturedProducts/FeaturedProducts.css'

function FeaturedProducts({type}) {
    const data = [
        {
            id:1,
            img: "img/Card_images/herbal-tea.jpg",
            img2:"img/Card_images/tea1.jpg",
            title:'Tea Herbs',
            isNew:true,
            oldPrice:'30',
            price:'25'
        },
        {
            id:2,
            img: "img/Card_images/carnivorous.jpg",
            img2:"img/Card_images/carnivorous1.jpg",
            title:'Carnivorous',
            isNew:true,
            oldPrice:'56',
            price:'50'
        },
        {
            id:3,
            img: "img/Card_images/sunflower.jpg",
            img2:"img/Card_images/lotus.jpg",
            title:'Flowering',
            isNew:true,
            oldPrice:'89',
            price:'80'
        },
        {
            id:4,
            img: "img/Card_images/creeper.jpg",
            img2:"img/Card_images/creepers1.jpg",
            title:'Creepers',
            isNew:true,
            oldPrice:'56',
            price:'50'
        }
    ]
    return ( 
        <div className="featureditems" style={{paddingTop:'4rem',paddingBottom:'4rem'}}>
            <div className="topFeature">
                <h3 className='h3'><b>{type} Creatures</b></h3>
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