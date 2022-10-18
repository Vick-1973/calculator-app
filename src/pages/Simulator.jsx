import React from 'react';
import { useState, useEffect } from 'react';
import { Header } from '../components';

const Simulator = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  };
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  };
  const { height, width } = useWindowDimensions();

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 dark:bg-gray-800 bg-white rounded-xl">
      <Header title="Simulator" />
      <hr /><br />
      <iframe src="https://www.geogebra.org/classic/vgxfzagp" className="w-full" style={{height: (height * 0.75)}}/>
    </div>
  )
};

export default Simulator;