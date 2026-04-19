import React, { useState } from 'react'
import styles from './Task.module.css'

const Task = ({ dispatch }) => {
  const [taskName, setTaskName] = useState('')
  const [taskDetail, setTaskDetail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!taskName.trim()) return
    dispatch({ type: 'ADD', taskName: taskName.trim(), taskDetail: taskDetail.trim() })
    setTaskName('')
    setTaskDetail('')
  }

  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', weekday: 'long'
  })

  return (
    <div className={styles.wrapper}>

      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>Welcome back!</h1>
          <p className={styles.subtitle}>Stay on top of your tasks — you've got this.</p>
        </div>
        <img
          className={styles.heroImg}
          src="https://i.pinimg.com/736x/4c/66/1c/4c661c33e230bd4431c105b53627557a.jpg"
          alt="illustration"
        />
      </div>

      <div className={styles.topBar}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputWrap}>
            <span className={styles.searchIcon}>⌕</span>
            <input
              className={styles.input}
              type="text"
              placeholder="Add a new task..."
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className={styles.detailInput}>
            <input
              type="text"
              placeholder="Task details (optional)"
              value={taskDetail}
              onChange={(e) => setTaskDetail(e.target.value)}
            />
          </div>
          <button className={styles.button} type="submit">+ Add Task</button>
        </form>
        <span className={styles.dateLabel}>{today}</span>
      </div>

    </div>
  )
}

export default Task
