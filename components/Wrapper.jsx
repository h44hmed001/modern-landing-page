import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='max-w-[1440px]  mx-auto p-5 '>
      {children}
    </div>
  )
}

export default Wrapper
