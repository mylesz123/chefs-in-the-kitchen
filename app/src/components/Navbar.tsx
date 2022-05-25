import React from 'react'

type Props = {}

const Navbar = () => {
  return (
    <nav className='px-4 sticky top-0 left-0 bg-sea-green z-10'>
      <div className='flex justify-between items-center py-3 container'>
        <button type='button' className='btn btn-primary rounded-full'>
          menu
        </button>
        <span className='uppercase font-bold'>El Cocinero</span>
        <button type='button' className='btn btn-primary'>
          cta
        </button>
      </div>
    </nav>
  )
}

export default Navbar