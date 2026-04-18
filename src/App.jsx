import React from 'react'
import { useState } from 'react'
import Cards from './components/Cards.jsx'
import Task from './components/Task.jsx'

const App = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDetail, setTaskDetail] = useState('');
  const [savedTask, setSavedTask] = useState([]);

  const deleteNote = (idx) => {
    const copyTask = [...savedTask];
    copyTask.splice(idx, 1)
    setSavedTask(copyTask);
  }
  const handleSave = () => {
    const copyTask = [...savedTask];
    copyTask.push({ taskName, taskDetail });
    setSavedTask(copyTask);
    setTaskDetail('');
    setTaskName('');
  }

  return (
    <div>
      <Task taskName={taskName}
        taskDetail={taskDetail}
        setTaskDetail={setTaskDetail}
        setTaskName={setTaskName}
        handleSave={handleSave}

      />
      <Cards savedTask={savedTask}
        taskDetail={taskDetail}
        taskName={taskName}
        deleteNote={deleteNote}
      />
    </div>
  )
}

export default App
