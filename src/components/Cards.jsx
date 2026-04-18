import React from 'react'
import styles from './Cards.module.css'


const Cards = ({ savedTask, taskDetail, taskName ,deleteNote}) => {


  return (
    <div>
      <div className={styles.datastorage}>
        <h1>Recent Notes</h1>
        <div className={styles.card}>
          {savedTask.map(function (elem , idx) {
            return <div key={idx} className={styles.cards}>
              <h2>Your task is: {elem.taskName}</h2>
                <p>Details: {elem.taskDetail}</p>
                <button className={styles.button} onClick={()=>{
                  deleteNote(idx);
                }}> Delete </button>
              </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Cards
