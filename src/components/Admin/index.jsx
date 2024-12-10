import React, { useState,useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db,auth } from "../../firebase/firebase";
import LoginForm from "../LoginForm";


const AdminDashboard = () => {

    const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Establece el usuario autenticado
    });

    return () => unsubscribe(); // Limpia el listener al desmontar
  }, []);
  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser); // Establece el usuario tras el inicio de sesión
  };

  const { allProductsUpdated } = useContext(AppContext); // Productos del contexto
  const [editedPrices, setEditedPrices] = useState({});

  const handlePriceChange = (productId, value) => {
    const numericValue = parseFloat(value); // Convierte a número flotante
    console.log(numericValue)
    if (!isNaN(numericValue)) {
        setEditedPrices({
          ...editedPrices,
          [productId]: numericValue,
        });
      } else {
        console.warn("Invalid price entered:", value);
      }
  };

  const handleSave = async (productId, categoryName) => {
    const newPrice = editedPrices[productId];
console.log(newPrice)
console.log(productId)
if (newPrice === undefined || newPrice === null || isNaN(newPrice)) {
    alert("Please enter a valid price.");
    return;
  }

    try {
      const productDoc = doc(db, "prices", String(productId));
      await updateDoc(productDoc, {
        price: parseFloat(newPrice),
      });

      alert(`Precio de producto actualizado en categoria: ${categoryName}.`);
    } catch (error) {
      console.error("Error updating price:", error);
      alert("Failed to update price. Please try again.");
    }
  };

  return (
    <div className="p-6 flex items-center justify-center">
      {!user ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div className=" bg-gray-100 min-h-screen">
        
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        {allProductsUpdated.map((category,index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{category.category}</h2>
            <div className="bg-white shadow rounded-lg p-4">
              {category.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between mb-4"
                >
                  <span className="text-gray-700 flex-1">{product.name}</span>
                  <input
                    type="number"
                    value={editedPrices[product.id] || product.price}
                    onChange={(e) =>
                      handlePriceChange(product.id, e.target.value)
                    }
                    className="border border-gray-300 rounded-lg p-2 w-32 text-right mr-4"
                  />
                  <button
                    onClick={() => handleSave(product.id, category.category)}
                    className="bg-orange text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Save
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
