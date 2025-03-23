import { useEffect, useState } from "react";

const BusinessStatus = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
      const hour = now.getHours();
      const minutes = now.getMinutes();

      let closingHour = 23; // Cierra a las 11:00 PM por defecto

      // Lunes cerrado
      if (day === 1) {
        setIsOpen(false);
        return;
      }

      // Martes, Miércoles y Jueves cierran a las 10:30 PM
      if (day === 2 || day === 3 || day === 4) {
        closingHour = 22; // 10:00 PM
      }

      // Determinar si está abierto
      const isOpenNow =
        (hour > 17 || (hour === 17 && minutes >= 0)) && // Después de las 5:00 PM
        (hour < closingHour || (hour === closingHour && minutes <= 30));

      setIsOpen(isOpenNow);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Actualiza cada minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`absolute flex flex-col gap-0 w-[100px] h- right-1 top-1 p-1 text-[#000000] text-[14px] font-bold rounded-lg shadow-md bg-white/80`}
    >
   
<div className=" flex gap-1 items-center">
<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className={`w-5 v-icon__svg ${isOpen?'fill-secondary':'fill-primary'} `}
      >
        <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z"></path>
      </svg>
{isOpen ? <p> Abierto</p> : <p>Cerrado</p> }

</div>
{isOpen ? '': <span className="font-light text-[10px]">Pedir para luego

</span> }

    </div>
  );
};

export default BusinessStatus;
