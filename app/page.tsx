import React from 'react'

const Home = () => {
  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-3xl font-bold mb-4">TODO app</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter a todo item"
          className="border border-gray-400 mr-2 px-4 py-2 flex-grow"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
      </div>
      <ul className="list-disc list-insite my-4"></ul>
    </div>
  )
}

export default Home
