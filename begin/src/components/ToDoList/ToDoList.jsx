import React, { useEffect, useState } from "react";
import './ToDoList.css'
// import Delete from "./Delete";
// import Edit from "./Edit";
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '/node_modules/bootstrap/dist/js/bootstrap.bundle'

//to get data from the Local Storage
const getLocalItems = () =>{
    const list = localStorage.getItem('list')

    if(list){
        return JSON.parse(localStorage.getItem('list'))
    }
    else{
        return [];
    }
}

const ToDoList = () => {

    

    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalItems);  //isse Items array ban gya 
    const [toggleAdd, setToggleAdd] = useState(true)  // for changing the icon/state(+ symbol) when we click  on the edit button to the edit symbol so we can update our list 
    const [isEdit, setIsEdit] = useState(null)

    const eventList = (event) => {
        setInputData(event.target.value)

    }

    //add items
    const addItem = () => {

        if (!inputData) {
            alert('plzz enter data');
        } 
        
        else if (inputData && !toggleAdd) {
            setItems(
            items.map((elem) => {
                if(elem.id === isEdit) {
                    return { ...elem, name: inputData }
                }
                return elem;
            })
            )
                setToggleAdd(true);
                setInputData('');
                setIsEdit(null)
        }
        else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData };
            // setItems((oldItems) => {
            //     return [...oldItems,allInputData ]
            setItems([...items, allInputData]);
            setInputData('');
        }
    };

    //delete items
    const deleteItem = (id) => {
        // alert("Deleted")
        console.log('deleted');
        setItems((oldItems) => {
            return oldItems.filter((arrElem) => {
                return id !== arrElem.id;
            });
        });
    };


    //edit items
    const editItem = (id) => {
        const newItem = items.find((parameter) => {
            return parameter.id === id;
        })
        // console.log(newItem);
        setToggleAdd(false)
        setInputData(newItem.name)
        setIsEdit(id)
    }

    //add items to local storage
    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(items))
        // yeh parameter key value pair mein leta hai and value hamesha string wali accept krta hai isiliye we used JSON.stringify
    },[items])



    return (
        <div className="main_div">
            <div className="inner_div">
                <h1>ToDo List</h1>
                <br />
                {/* <i class="fa-solid fa-pencil fa-lg " style={{paddingLeft:'100px'}}></i> */}
                <input type="text" placeholder="Add Items" onChange={eventList} value={inputData}
                />
                {/* add */}
                {
                    toggleAdd ? <button onClick={addItem}><i className="fa-solid fa-plus fa-sm "></i></button> :
                        <i className="fa-regular fa-pen-to-square fa-lg" onClick={addItem}
                        ></i>
                }
                {/* toggleAdd mtlb edit click krne pr add symbol edit mein change ho jayega for updation  */}


                {/* button click hone pr ek array bne jisme items add hote jaaye aur array mein jo hai wo display bhi ho jaaye */}



                <ol>

                    {items.map((itemVal) => {
                        return (
                            <>
                                {/* yeh jab hai when we have another component for delete */}
                                {/* <Delete
                                text={itemVal.name}  
                                key={itemVal.id}
                                id={itemVal.id}
                                onSelect={deleteItem}
                            /> */}

                                <div className="todo_style">

                                    {/* Delete */}
                                    <button onClick={() => {
                                        deleteItem(itemVal.id);
                                    }
                                    } className="btn"><i className="fa-solid fa-trash fa-2xs"></i></button>

                                    <li className="listItem" >{itemVal.name}</li>


                                    {/* Edit */}
                                    <i className="fa-regular fa-pen-to-square fa-lg edit" onClick={() => editItem(itemVal.id)}
                                    ></i>
                                </div>
                            </>
                        )
                    })}



                </ol>

            </div>

        </div >

    );
}

export default ToDoList;