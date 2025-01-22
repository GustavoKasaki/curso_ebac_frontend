import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([])
  const [tempTask, setTempTask] = useState('')

  function registerTask() {
    setTasks([...tasks, tempTask])
    setTempTask('')
  }

  return (
    <div className="App">
      <input data-testid='task-field' type="text" value={tempTask} onChange={e => setTempTask(e.target.value)}/>
      <button data-testid='task-btn' onClick={registerTask} type="button">Register</button>
      <ul>
        {tasks.map(task => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
