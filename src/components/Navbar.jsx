import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import { Link, NavLink } from 'react-router-dom';

import logo from '../imgs/logo.png'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
        {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, screenSize, setScreenSize, currentColor } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false);
    }
    else{
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu />}/>
      <div className="flex justify-between items-center">
          <Link to="/" className="items-center gap-3 ml-3 mt-1 mb-1 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <img src={logo} className="w-10" /><span>Rotas</span>
          </Link>
      </div>
    </div>
  );
};

export default Navbar;