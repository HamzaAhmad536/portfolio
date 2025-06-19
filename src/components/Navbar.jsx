import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setActive('')}
        >
          <span className="text-white text-[18px] font-bold cursor-pointer flex">Hamza Ahmad</span>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li
            className={`${active === '' ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive('')}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`${active === 'projects' ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive('projects')}
          >
            <Link to="/projects">Projects</Link>
          </li>
          <li
            className={`${active === 'contact' ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive('contact')}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar