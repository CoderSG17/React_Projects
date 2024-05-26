import React, { useState } from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.bundle'
import Card from './Card'
import Menu from './Menu'
import './style.css'
import Category from './Category'

const Gallery = () => {

    //Rather than creating different buttons for each categories we used set (which consist of only unique values) so that whenver a new categories comes in your api it will fetch it 
    const allCategories = [...new Set(Menu.map((curElem) => {
        return curElem.category
    })), 'AllCategories']

    //... (spread operator ) iss liye use kiya so that values direct array mein aa jaaye 
    // nhi use krenge toh set ke andar set phir usme enteries aaynegi 

    // console.log(allCategories);

    const [items, setItems] = useState(Menu);
    const [category, setCategory] = useState(allCategories);

    const filterItem = (parameter) => { //parameter mein Breakfast , Lunch , .... yeh sab pass hote rahenge 

        if (parameter === 'AllCategories') {
            setItems(Menu)
            return;
    }
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === parameter
        })
        setItems(updatedItems);
    }

    return (
        <>
            <h1 style={{ textAlign: 'center', marginTop: '5px' }}>Order Your Favourite Dish</h1>
            <hr />

            <Category filterItem={filterItem} category={category}></Category>

            {/* <div className="menu-tabs container">
            <div className="menu-tab d-flex justify-content-around">
                <button className="btn btn-warning" onClick={()=>filterItem('Breakfast')} >Breakfast</button>
                <button className="btn btn-warning" onClick={()=>filterItem('Lunch')}>Lunch</button>
                <button className="btn btn-warning" onClick={()=>filterItem('Snack')}>Snacks</button>
                <button className="btn btn-warning" onClick={()=>filterItem('Dinner')}>Dinner</button>
                <button className="btn btn-warning" onClick={()=>filterItem('Dessert')}>Dessert</button>
                <button className="btn btn-warning" onClick={()=>setItems(Menu)}>All</button>
            </div>
            </div> */}

            {/* {
                items.map((val) => {
                    return (
                        <Card
                            key={val.id}
                            image_link={val.image_link}
                            title={val.title}
                            // category={val.category}
                            price={val.price}
                            description={val.description}
                        ></Card>
                    )
                })
            } */}
            {/* In the Card file we could use props and then get all the values */}



            {/* This is the another  way to display all items . In this we use map function in the Card component only and pass attribute items so that everything could be accessed  */}
            <Card items={items}></Card>
        </>
    )
}

export default Gallery