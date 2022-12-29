import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Sidebar from "./Components/Sidebar/Sidebar"

const Layout = () => {
  return (
    <>
    <Header/>
    <Sidebar/>
    <div className="content">
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout