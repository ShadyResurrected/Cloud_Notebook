import React from 'react'
import { useContext,useEffect } from 'react'
import noteContext from '../context/notes/NoteContext'

const About = () => {
  const a = useContext(noteContext)

  useEffect(() => {
    a.update()
  }, [])
  
  return (
    <div>This is {a.state.name} and studies in class {a.state.class}</div>
  )
}

export default About