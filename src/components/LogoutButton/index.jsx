import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
const LogoutButton = () => {


    const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Has cerrado sesión correctamente.");
      navigate("/admin"); // Redirige a la página de inicio de sesión
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Error al cerrar sesión. Intentalo de nuevo");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-orange absolute text-[12px] sm:right-[0px] right-[32px] sm:w-[68px] sm:flex-col-reverse text-white items-center flex px-4 py-1 rounded-lg hover:bg-red-600"
    >
      Cerrar sesión
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
</svg>

    </button>
  );
};

export default LogoutButton;
