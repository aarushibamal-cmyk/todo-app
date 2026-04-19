import React, { useReducer, useEffect, useState } from 'react'
import Task from './components/Task.jsx'
import Cards from './components/Cards.jsx'
import FilterTabs from './components/FilterTabs.jsx'
import styles from './App.module.css'
 
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, {
        id: Date.now(),
        taskName: action.taskName,
        taskDetail: action.taskDetail,
        completed: false,
        isEditing: false,
      }]
    case 'DELETE':
      return state.filter(t => t.id !== action.id)
    case 'TOGGLE_COMPLETE':
      return state.map(t => t.id === action.id ? { ...t, completed: !t.completed } : t)
    case 'START_EDIT':
      return state.map(t => t.id === action.id ? { ...t, isEditing: true } : t)
    case 'SAVE_EDIT':
      return state.map(t => t.id === action.id
        ? { ...t, taskName: action.taskName, taskDetail: action.taskDetail, isEditing: false }
        : t)
    case 'CANCEL_EDIT':
      return state.map(t => t.id === action.id ? { ...t, isEditing: false } : t)
    default:
      return state
  }
}
 
const App = () => {
  const [tasks, dispatch] = useReducer(todoReducer, [], () => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })
 
  const [filter, setFilter] = useState('all')
 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
 
  const filteredTasks = tasks.filter(t => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })
 
  const counts = {
    all: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length,
  }
 
  return (
    <div className={styles.app}>
      <Task dispatch={dispatch} />
      <div className={styles.listSection}>
        <FilterTabs filter={filter} setFilter={setFilter} counts={counts} />
        <Cards tasks={filteredTasks} dispatch={dispatch} />
      </div>
    </div>
  )
}
 
export default App
