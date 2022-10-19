import React from 'react'
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Math = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-gray-800 rounded-xl">
      <Header title="Math" />
      <hr />
      <br />
      <div className="bg-white flex w-fit p-2 rounded-xl">
        
      </div>
    </div>
  )
}

export default Math