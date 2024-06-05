import React from 'react'

const SubMenu = ({name}) => {
  return (
    <li className='px-8 py-4 border border-b-orange-500 bg-red-300 text-black hover:text-[#ff7f45] hover:cursor-pointer'>{name}</li>
  )
}

export default SubMenu