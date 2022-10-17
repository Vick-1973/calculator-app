import React from 'react';
import { Header } from '../components';

const Simulator = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 dark:bg-gray-800 bg-white rounded-xl">
      <Header title="Simulator" />
      <hr /><br />
      <iframe src="https://www.geogebra.org/classic/vgxfzagp" className="w-full aspect-[16/13]" />
    </div>
  )
}

export default Simulator