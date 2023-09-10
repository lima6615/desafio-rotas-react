import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar";

function Home() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Home;
