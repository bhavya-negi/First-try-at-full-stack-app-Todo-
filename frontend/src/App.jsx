import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { RenderTodo } from './components/RenderTodo'

function App() {
    const [todos, setTodos] = useState([])

    // fetch("http://localhost:3000/todos")
    // .then(async (res) => {
    //     const json = await res.json()
    //     setTodos(json.todos)

    // })

    return (
        <div>
            <CreateTodo />
            <RenderTodo todos={todos}/>
        </div>
    )
}

export default App
