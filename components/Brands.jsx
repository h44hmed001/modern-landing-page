import React from 'react'
import { brands } from '../utils/inports'
import Image from 'next/image'
const Brands = () => {
    
  return (
    <div className='items-center justify-center gap-10 flex flex-wrap'>
      {brands.map((brand)=><Image alt="" width={112.44} height={24.15} src={brand.src} />
      )}
    </div>
  )
}

export default Brands
