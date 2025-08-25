import React from 'react'

const Navigation = () => {
  return (
    <nav className='flex items-center py-6 px-16 justify-between gap-40'>
        <div className='flex items-center gap-6'>
            {/* logo */}
            <a className='text-3xl text-black gap-8 font-bold' href='/'>ShopEase</a>
        </div>
        <div className='flex flex-wrap items-center gap-10 flex-1'>
          {/* Navitems */}
          <ul className='flex gap-14 text-gray-600 hover:text-black'>
            <li><a href="/">Shop</a></li>
            <li><a href="/mens">Mens</a></li>
            <li><a href="/womens">Womens</a></li>
            <li><a href="/kids">Kids</a></li>
          </ul>
        </div>
        <div className='flex justify-center'>
          {/* searchbar */}
          <div >

          </div>
        </div>
        <div>
          {/* action items */}
        </div>

    </nav>
  )
}

export default Navigation
