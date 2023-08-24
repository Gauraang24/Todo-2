import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const List = (props) => {
    return (
        <>
            <div className='List'>
                <p>{props.name}</p>


                {/* <button onClick={()=>{
                    props.delete(props.id)
                }}>-</button> */}
                <ModeEditIcon className='btn' onClick={()=>{props.edit(props.id)}}/>
                <DeleteOutlineOutlinedIcon className='btn' onClick={()=>{
                    props.delete(props.id)
                }}/>
            </div>
        </>
    )
}

export default List
