import "./style.scss";
import { Container } from "@containers";
import LOGO from "@images/Frame.svg";
import { NavLink, Outlet } from "react-router-dom";


const index = () => {
  return (
    <>
        <header className="bg-black py-[73px]">
      <Container>
        <nav className="flex justify-between items-center">
          <img className="mr-[100px]" src={LOGO} alt="img" />
          <ul className="flex items-center gap-x-[33px]">
            <NavLink className={({isActive})=>
                isActive ? "activeHome text-white font-medium text-[16px] py-[4px] px-[16px]" : "text-white font-medium text-[16px] py-[4px] px-[16px]"
            } to={"/"}>Model S</NavLink>
            <NavLink className={({isActive}) =>
                isActive ? "activeModel3 text-white font-medium text-[16px] py-[4px] px-[16px]" : "text-white font-medium text-[16px] py-[4px] px-[16px]"
            } to={"/model_3"}>Model 3</NavLink>
            <NavLink className={({isActive}) =>
                isActive ? "activeModelx text-white font-medium text-[16px] py-[4px] px-[16px]" : "text-white font-medium text-[16px] py-[4px] px-[16px]"
            } to={"/model_x"}>Model X</NavLink>
            <NavLink className={({isActive}) => 
                isActive ? "activeModely text-white font-medium text-[16px] py-[4px] px-[16px]" : "text-white font-medium text-[16px] py-[4px] px-[16px]"
            } to={"/model_y"}>Model Y</NavLink>
            <NavLink className="text-white font-medium text-[16px] py-[4px] px-[16px] border-[2px] border-[#00000000]" to={"/solar_roof"}>Solar Roof</NavLink>
            <NavLink className="text-white font-medium text-[16px] py-[4px] px-[16px] border-[2px] border-[#00000000]" to={"/solar_panels"}>Solar Panels</NavLink>
          </ul>
          <div className="flex justify-between gap-[63px]">
            <button className="bg-[#F4FBFF1A] rounded-[85px] py-[10px] px-[47px] flex items-center gap-2 text-white font-medium">
              <i className="bx bx-search-alt-2 text-white"></i>
              Search
            </button>
            <button className="bg-[#F4FBFF1A] rounded-[85px] w-[40px] h-[40px]">
              <i className="bx bx-user text-white "></i>
            </button>
            <button className="bg-[#F4FBFF1A] rounded-[85px] w-[40px] h-[40px]">
              <i className="bx bx-menu text-white "></i>
            </button>
          </div>
        </nav>
      </Container>
        </header>
        <Outlet/>
    </>
  );
};

export default index;
