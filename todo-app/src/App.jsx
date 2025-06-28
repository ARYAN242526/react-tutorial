import { useCallback, useEffect, useState } from 'react'


function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])


  const handleTask = useCallback(() => {
    if(!task.trim()) return;
    setTasks((prev) => [...prev , {id : Date.now() , text : task , done : false}])
    setTask("")
  } , [task])

  // Load tasks from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks") ?? "[]")
    if(saved) setTasks(saved)
  },[])

  // Save tasks whenever they change
  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

const toggleTask = useCallback((id) => {
  setTasks((prev) => prev.map((t) => (t.id === id ? {...t,done : !t.done} : t)))
} , [])

const deleteTask = useCallback((id) => {
  setTasks((prev) => prev.filter((t) => t.id !==id));
},[])

  return (
    <>
     <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4'>Todo App</h1>
      <input
      type='text'
      value={task}
      onChange={(e) => {setTask(e.target.value)}}
      className='border p-2 mr-2'
      placeholder='Enter task'
      />
      <button 
      onClick={handleTask}
      className='bg-blue-500 text-white p-2'>Add Task</button>
    </div>

    <ul className='mt-4'>
      {
        tasks.map((t) => (
          <li key = {t.id} className='flex items-center gap-2 mb-2'>
            <span className= {`${t.done ? "line-through text-gry-500" : ""} cursor-pointer`}
            onClick={() => toggleTask(t.id)}>
              {t.text}
            </span>
            <button className='text-red-500' onClick={() => {
              deleteTask(t.id)
            }}>X</button>
          </li>
        ))
      }
    </ul>
    </>
  )
}

export default App
