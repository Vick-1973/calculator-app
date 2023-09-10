import React from 'react';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { Link, NavLink } from 'react-router-dom';

const NotFound = () => {
	 const { currentColor } = useStateContext();
    return(
    	<div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-gray-800 rounded-xl">
      <Header title="Page not found" />
      <hr />
      <br />

      <p className="text-lg font-medium tracking-tight text-slate-900 dark:text-white">
        Oops! Looks like something went wrong.
        <br/><br/>
        <NavLink action="replace" to={"/"} ><span className="hover:underline" style={{color:currentColor}}> Return to homepage </span>
        </NavLink>
      </p>
      
    </div> 
    )
}

export default NotFound