import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import logo from '../imgs/logo.png'

import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../links'
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  const handleCloseSidebar = () => {
    if(activeMenu || screenSize <= 900){
      setActiveMenu(false);
    }
  }

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10" >
      {activeMenu && (<>
        <div className="flex justify-between items-center">
          <Link to="/" onClick={handleCloseSidebar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <img src={logo} className="w-10" /><span>Rotas</span>
          </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
            <button type="button" onClick={() => setActiveMenu(false)} style={{ color: 'rgb(50, 50, 50)', borderRadius: '50%' }} className="text-2xl p-3 mt-4 hover:drop-shadow-xl hover:bg-light-gray">
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className="mt-10">
          {links.map((item) => (
            <div key={item.title}>
              <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
              {item.links.map((link) => (
                <NavLink to={`/${link.name}`} key={link.name} onClick={handleCloseSidebar} className={({ isActive }) => isActive ? activeLink : normalLink} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : ''})}>
                  <span className="capitalize">
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar