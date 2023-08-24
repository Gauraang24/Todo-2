import React, { useState } from 'react'
import Logo from "../images/todo.jpeg"
import List from './List'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Todo = () => {

    // const [inputData,setINputData]=useState('')
    const [list, setList] = useState("mango")
    const [list1, setList1] = useState([])
    // const [items,setItems]=useState(getLocalItems())

    const [toggleSubmit, setToggleSubmit] = useState(true)
    const [isEditItem, setIsEditItem] = useState(null)


    const ClickEvent = () => {
        if (!list) {
            alert("plzz fill data")
        } else if (list && !toggleSubmit) {
            setList1(
                list1.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: list }
                    }
                    return elem
                })
            )
            setToggleSubmit(true)

            setList("")

            setIsEditItem(null)
        } else {
            const allInputData = { id: new Date().getTime().toString(), name: list }
            setList1([...list1, allInputData])
            setList('')
        }
    }

    const deleteItems = (id) => {

        const filterDate = list1.filter((elem) => {
            return elem.id !== id
        })

        setList1(filterDate)

    }

    const removeAll = () => {
        setList1([])
    }

    const editItem = (id) => {
        let newEditItem = list1.find((elem) => {
            return elem.id === id
        })
        console.log(newEditItem)

        setToggleSubmit(false)

        setList(newEditItem.name)

        setIsEditItem(id)
    }





    return (
        <>
            <div className='main_div'>
                <div className='child-div'>
                    <figure className='figure_div'>
                        <img src={Logo} alt="" />
                    </figure>
                    <h1>Add Your List Here</h1>

                    <div className='inputbar'>
                        <input type="text" placeholder='Add items...' value={list} onChange={(e) => { setList(e.target.value) }} />

                        {
                            toggleSubmit ? <button onClick={ClickEvent}><AddBoxOutlinedIcon /></button> : <button onClick={ClickEvent}><ModeEditIcon /></button>
                        }

                    </div>


                    {list1.map((val) => {
                        return <List name={val.name} key={val.id} id={val.id} delete={deleteItems} edit={editItem} />
                    })}

                    {/* {
                        list1.map((elem) => {
                            return (
                                <div className='List' key={elem.id}>
                                    <p>{elem.name}</p>
                                    <button onClick={()=>{deleteItems(elem.id)}}>-</button>
                                </div>
                            )
                        })
                    } */}

                    <button className='checkList' onClick={removeAll} >Remove All</button>


                </div>
            </div>
        </>
    )
}

export default Todo
