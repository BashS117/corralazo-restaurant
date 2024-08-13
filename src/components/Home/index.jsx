import React from 'react'
import AcordionLeft from '../AcordionLeft'
import AcordionRight from '../AcordionRight'
import FilterResult from '../FilterResult'
import AcordionPanel from '../AcordionPanel'
import { AppContext } from '../../Context/AppContext'
import { useContext } from 'react'
const Home = () => {

  const {filteredProducts}= useContext(AppContext)
  console.log("PRODUCTOS FILTRADOS: ",filteredProducts)

  const renderFilter =()=>{
    if (filteredProducts?.length > 0) {
      return (
  <FilterResult 
   products={filteredProducts}
   />
      )
    }else{
      return(
<div className='flex mt-[10px] gap-[10px] w-full relative'>
      
        <AcordionLeft/>
        <AcordionRight/>


    </div>      )
    }
  
  }

  return (<>
        {renderFilter()}

  </>
  )
}

export default Home