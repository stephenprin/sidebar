import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { links } from './data'

const Sidebar = () => {
  return (
      <aside className={`sidebar show-sidebar`}>
          <div className="sidebar-header">
              <h5>PrinceMac</h5>
              <button className="close-btn">
                    <FaTimes />
              </button>
        
      </div>
      <ul className='links'>
            {links.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <li key={id}>
                  <a href={url}>
                  {icon}
                    {text}
                   
                  </a>
                </li>
              )
              
            })}
            </ul>
    </aside>
  )
}

export default Sidebar
