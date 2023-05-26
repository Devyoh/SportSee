import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./pages/Home/home";
import Error from "./pages/Error/error";
import User from "./pages/User/user";
import Sidebar from './components/SideBar/sideBar'

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <main>
        <Sidebar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </main>  
    </BrowserRouter>
  );
}
