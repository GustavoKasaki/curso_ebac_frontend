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
      <input type="text" value={tempTask} onChange={e => setTempTask(e.target.value)}/>
      <button onClick={registerTask} type="button">Register</button>
      <ul>
        {tasks.map(task => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
