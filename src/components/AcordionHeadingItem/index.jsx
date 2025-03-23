import React from 'react'

const AcordionHeadingItem = ({category,categoryImg,index,handlePanelOpen,rightPanel,isPanelOpen}) => {
  console.log(isPanelOpen)
    const handleClick = ()=>{
        handlePanelOpen(category)
    }
  return (
    <div className={`${rightPanel? 'h-[120px]':'h-[90px]'} items-center p-[5px] flex justify-between mb-[10px]  border-[1px] border-orange rounded-lg shadow-orange shadow-[0px_2px_8px]`} onClick={handleClick} >
        <div className={`${rightPanel? 'flex flex-col':'flex  items-center '} gap-[5px] w-full font-bold `}>
        <figure>
              <img className=' w-[110px] h-[80px] rounded-md object-cover' src={categoryImg} alt="" />
          </figure>
          <p className={`${index === 0  ? 'whitespace-normal break-words w-[75px]' : ''} bg-dark-gray/90 text-white font-semibold shadow-lg rounded-md px-1`}>   {category}</p>
        </div>
      
        {isPanelOpen? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF570C" className="w-6 h-6 ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
      </svg>
      :
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
        </svg> 
      }

   </div>
  )
}

export default AcordionHeadingItem