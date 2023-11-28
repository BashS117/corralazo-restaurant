import React from 'react'
import AcordionHeadingItem from '../AcordionHeadingItem';
import AcordionPanel from '../AcordionPanel';
import { useContext } from "react";
import { AppContext } from '../../Context/AppContext';
const AcordionItem = ({data}) => {
    
    const {category,products}= data;

    const {state,dispatch}=useContext(AppContext)
console.log("state.panelOpen:", state)

    const handlePanelOpen = (category) => {        
         console.log('Categoría seleccionada:', category);
        dispatch({ 
            type: 'PANELOPEN', 
            payload: category
        });
       
      
      };
      const PanelClose=()=>{
        dispatch({ 
            type: 'PANELCLOSE', 
            payload: category
        });
      }

    console.log("datat:",data)
  return (  
    <div>
        <AcordionHeadingItem 
        category={category}
        isPanelOpen={state.panelOpen}
        handlePanelOpen={handlePanelOpen}
        PanelClose={PanelClose}
        />
         <AcordionPanel category={category} products={products}/>
       


    </div>
  )
}

export default AcordionItem                     