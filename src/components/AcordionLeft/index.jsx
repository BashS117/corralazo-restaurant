import AcordionItem from '../AcordionItem'

const AcordionLeft = ({productsUpdated}) => {
 
  return (
    <div className='w-[60%]'>
       
        {
            productsUpdated.map((data,index)=>(
                <AcordionItem key={index} index={index} data={data} />
            ))
        }

    </div>
  )
}

export default AcordionLeft