import React from 'react'
import Tasks from '../tasks/tasks'
import Sidebar from '../sidebar/sidebar'

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="sidebar">
         <Sidebar />
        </div>

        <div className="center-div"></div>
        <div className="right-side-div">

        </div>
      </div>
    </div>
  )
}

export default Home