import React from 'react'
import { navdata } from '../../data/navdata'
import { NavLink } from 'react-router-dom'

const Navber = () => {
  return (
    <header>
      <nav className='bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 flex justify-between p-4'>
      <h1 className='text-white font-bold'>CMS</h1>
        <div>
          <ul className="flex gap-4">
            {navdata.map((item, index) => (
              <li key={index}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-white font-bold" 
                      : "text-gray-200 hover:text-white"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navber
