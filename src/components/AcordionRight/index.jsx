import AcordionItem from '../AcordionItem';
const AcordionRight = ({secondaryProductsUpdated}) => {
    return (
      <div className='w-[40%]'>
         {
            secondaryProductsUpdated.map((data, index)=>(
                <AcordionItem rightPanel={true} key={index} data={data} />
            ))
        }
      </div>
    )
  }
  
  export default AcordionRight;