import React from 'react'
// import Menu from './Menu'


const Category = ({ filterItem, category }) => {
    return (
        <div className="menu-tabs container">
            <div className="menu-tab d-flex justify-content-around">
                {
                    category.map((curElem ,index) => {
                        return <button className="btn btn-warning" key ={index} onClick={() => filterItem(curElem)} >{curElem}</button>

                    })
                }


                {/* Rather than adding  */}
                {/* <button className="btn btn-warning" onClick={() => filterItem('Breakfast')} >Breakfast</button>
                <button className="btn btn-warning" onClick={() => filterItem('Lunch')}>Lunch</button>
                <button className="btn btn-warning" onClick={() => filterItem('Snack')}>Snacks</button>
                <button className="btn btn-warning" onClick={() => filterItem('Dinner')}>Dinner</button>
                <button className="btn btn-warning" onClick={() => filterItem('Dessert')}>Dessert</button> */}
                {/* <button className="btn btn-warning" onClick={()=>Menu}>All</button> */}



            </div>
        </div>
    )
}

export default Category