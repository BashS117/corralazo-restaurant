import React from 'react'
import { AppContext } from '../../Context/AppContext'
import { useContext } from 'react'

const Header = () => {
    const {setFilter}=useContext(AppContext)
  return (
    <header className='w-full'>
        <div className='flex justify-between '>
            <figure>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/39ff23185580241.65887d5f1f855.png" alt="logo" />
            </figure>
            <div className='w-[65%] mt-[10px] pl-[5px]'>
                <h1 className='titlePage text-[2.8rem] text-orange'>Corralazo</h1>
                <p className='subtitle'>Comidas Rapidas</p>
                <div className='flex-col gap-1 flex items-end'>
                    <p className='text-[0.8rem] bg-orange rounded-sm px-1 text-white  '>Calle 5 #9-40 Corinto</p>
                    <p  className='text-[0.8rem]  bg-orange rounded-sm px-1 text-white '>Cel: 323 475 4284</p>
                </div>
                 <lo className='text-[0.7rem]'>
                    <li> Elige categoría y escoge tu producto</li>
                    <li> Envia tu pedido y espera tu domicilio</li>
                </lo>
            </div>
        </div>
        <input className='w-[80%] h-[30px] mt-2 py-1 pr-1 text-[1.4rem]' 
        onChange={(event) => setFilter(event.target.value.trim() || null)}
        placeholder='🔎 Busca tu comida'
        type="search" />
    </header>
  )
}

export default Header