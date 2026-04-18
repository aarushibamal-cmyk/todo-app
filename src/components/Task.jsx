import React, { useState } from 'react'
import styles from './Task.module.css'

const Task = ({taskDetail,taskName,setTaskDetail,setTaskName,handleSave}) => {

     const submitHandle=(e) =>{
    e.preventDefault();
    console.log("working button")
    handleSave();  
    setTaskDetail('');
    setTaskName('')

  }
  return (
    <div>
      <form className={styles.flex} onSubmit={(e)=>{
        submitHandle(e)
      }}>
       <div className={styles.formContent}>
         <input className={styles.input} type='text' placeholder='Enter your task' value={taskName}  onChange={(task)=>{
           setTaskName(task.target.value)
         }}></input>
        <input className={styles.textarea}name='detail' id='details' placeholder='Enter Details of your task'  value={taskDetail} onChange={(detail)=>{
            setTaskDetail(detail.target.value)
        }}></input>

        <button className={styles.button}>Save Task</button>
       </div>
       <div className={styles.imageBox}>
        <img src='https://i.pinimg.com/736x/4c/66/1c/4c661c33e230bd4431c105b53627557a.jpg'></img>
        </div>
      </form>
    </div>
  )
}

export default Task
