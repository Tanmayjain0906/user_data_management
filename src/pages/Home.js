import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
   const navigate = useNavigate();

  return (
    <div>
        <button className='home-btn' onClick={() => navigate("/counter")}>Counter</button>
        <button className='home-btn' onClick={() => navigate("/user")}>User Data Form</button>
        <button className='home-btn' onClick={() => navigate("/text-editor")}>Rich Text Editor</button>
    </div>
  )
}

export default Home;