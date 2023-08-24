import React, { useState } from 'react'

const Home = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  const handleAddTodo = () => {
    setTodos([...todos, inputValue])
    setInputValue('')
  }
  const handleDeleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }
  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-3xl font-bold mb-4">TODO app</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter a todo item"
          className="border border-gray-400 mr-2 px-4 py-2 flex-grow"
          value={inputValue}
          onChange={handleInputValue}
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </div>
      <ul className="list-disc list-inside my-4">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
