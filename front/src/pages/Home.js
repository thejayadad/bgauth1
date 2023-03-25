import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Category from '../components/category/Category'
import Note from "../components/note/Note"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Category />
        <Note />

    </div>
  )
}

export default Home