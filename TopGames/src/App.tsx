import Header from "./Components/Header"
import { Routes, Route } from "react-router-dom"
import HotelCasinos from "./Pages/HotelCasinos"
import ContactUs from "./Pages/ContactUs"
import AboutUs from "./Pages/AboutUs"
import NoPage from "./Pages/NoPage"
import Footer from "./Components/Footer"
function App() {


  return (
    <>

      <Header />



      <Routes>
        <Route path="/" element={<HotelCasinos />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <Footer />

    </>

  )
}

export default App
