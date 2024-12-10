import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import { AppProvider } from './Context/AppContext'
import Order from './components/Order'
import './App.css'
import AdminDashboard from './components/Admin'

function App() {

  return (
    <>
    <AppProvider>
    <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<AdminDashboard/>} />
      
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
      <Order/>
      
    </BrowserRouter>
    </AppProvider>
    </>
  )
}

export default App
