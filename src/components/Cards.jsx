import React, { useState } from 'react'
import styles from './Cards.module.css'

const Cards = ({ tasks, dispatch }) => {
  const [editValues, setEditValues] = useState({})

  const startEdit = (task) => {
    setEditValues({ taskName: task.taskName, taskDetail: task.taskDetail })
    dispatch({ type: 'START_EDIT', id: task.id })
  }

  const saveEdit = (id) => {
    if (!editValues.taskName.trim()) return
    dispatch({ type: 'SAVE_EDIT', id, taskName: editValues.taskName.trim(), taskDetail: editValues.taskDetail.trim() })
  }

  const cancelEdit = (id) => {
    dispatch({ type: 'CANCEL_EDIT', id })
  }

  if (tasks.length === 0) {
    return <div className={styles.empty}>No tasks here — add one above!</div>
  }

  return (
    <div className={styles.tableWrap}>
      <table>
        <thead>
          <tr className={styles.thead}>
            <th></th>
            <th>Task</th>
            <th>Details</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            task.isEditing ? (
              <tr key={task.id} className={styles.editRow}>
                <td></td>
                <td colSpan={3}>
                  <div className={styles.editInputs}>
                    <input
                      className={styles.editInput}
                      value={editValues.taskName}
                      onChange={(e) => setEditValues(v => ({ ...v, taskName: e.target.value }))}
                      placeholder="Task name"
                      autoFocus
                      style={{ flex: 1 }}
                    />
                    <input
                      className={styles.editInput}
                      value={editValues.taskDetail}
                      onChange={(e) => setEditValues(v => ({ ...v, taskDetail: e.target.value }))}
                      placeholder="Details"
                      style={{ flex: 1.5 }}
                    />
                    <button className={styles.saveBtn} onClick={() => saveEdit(task.id)}>Save</button>
                    <button className={styles.cancelBtn} onClick={() => cancelEdit(task.id)}>Cancel</button>
                  </div>
                </td>
                <td></td>
              </tr>
            ) : (
              <tr key={task.id} className={`${styles.row} ${task.completed ? styles.done : ''}`}>
                <td className={styles.checkCell}>
                  <button
                    className={`${styles.checkbox} ${task.completed ? styles.checked : ''}`}
                    onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', id: task.id })}
                  >
                    {task.completed && <span className={styles.tick}>✓</span>}
                  </button>
                </td>
                <td>
                  <div className={styles.taskName}>{task.taskName}</div>
                </td>
                <td>
                  <div className={styles.taskDetail}>{task.taskDetail || '—'}</div>
                </td>
                <td>
                  <span className={`${styles.statusBadge} ${task.completed ? styles.statusDone : styles.statusActive}`}>
                    <span className={styles.dot}></span>
                    {task.completed ? 'Done' : 'Pending'}
                  </span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.editBtn} onClick={() => startEdit(task)} title="Edit">✎</button>
                    <button className={styles.deleteBtn} onClick={() => dispatch({ type: 'DELETE', id: task.id })} title="Delete">✕</button>
                  </div>
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Cards
