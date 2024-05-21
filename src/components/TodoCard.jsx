import React from 'react'

export default function TodoCard(props) {

  const {children, handleDeleteTodo , todoIndex , handleEditTodo} = props
  return (
    <li>
       {children}
    <div className='iconContainer'>
     
       <i className="fa-solid fa-pen-to-square"   onClick={() => {handleEditTodo(todoIndex)}}></i>
  
       
      
       <i onClick={() => {
        handleDeleteTodo(todoIndex)
       }} className="fa-solid fa-trash"></i>
      
    </div>
    </li>
  )
}
