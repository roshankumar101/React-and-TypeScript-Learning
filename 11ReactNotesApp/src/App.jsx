import React, { useState } from 'react'

const App = () => {

  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    let newNote = [...notes]
    
    newNote.push({title, details})

    setNotes(newNote)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    let newNote = [...notes]

    newNote.splice(idx, 1);

    setNotes(newNote);
  }

  return (
    <div className='flex flex-col lg:flex-row w-full h-full bg-gray-900 text-white p-8'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='lg:w-1/2 w-full h-full flex flex-col gap-5 p-5'
      >
        <h1 className='font-bold text-3xl flex justify-center items-center'>Add Notes</h1>

        <input type="text" placeholder='Enter Title' className='bg-gray-600 px-5 py-3 rounded-xl outline-none font-bold' value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea name="" id="" placeholder='Enter Details' className='bg-gray-600 px-5 py-2 rounded-xl outline-none h-36 font-semibold' value={details} onChange={(e) => setDetails(e.target.value)} />
        <button className='bg-white text-black font-bold px-5 py-2 rounded-xl active:scale-95 transition-all duration-400'>Add Note</button>
      </form>

      <div className='lg:w-1/2 lg:border-l-2 h-full p-5 flex flex-col gap-5'>
        <h1 className='font-bold text-3xl flex justify-center items-center'>Recent Notes</h1>
        <div className='flex flex-wrap gap-3 h-115 overflow-auto justify-start items-start' id='tasks'>
          {notes.map(function(elem, idx){

            return <>
              <div key={idx} className='flex flex-col gap-5 justify-between items-start h-52 w-44 px-5 pt-5 pb-3 bg-gray-100 rounded-xl'>
                <div className='leading-tight'>
                  <h3 className='text-xl font-semibold text-black'>{elem.title}</h3>
                  <p className='text-sm font-medium text-gray-800'>{elem.details}</p>
                </div>
                <button className='bg-red-400 w-full text-md font-semibold rounded-md active:scale-95 transition-all duration-300'
                onClick={() => {
                  deleteNote(idx);
                }}
                >
                  Delete
                </button>
              </div>
            </>
          })}
        </div>
      </div>

    </div>
  )
}

export default App