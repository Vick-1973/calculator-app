import React from 'react'
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
var Latex = require('react-latex');

const Math = () => {
  const { currentColor } = useStateContext();

  const exp1 = `$$\\Delta y = vsin(\\theta)t+\\frac{1}{2}gt^2$$`;
  const exp2 = `$$\\Delta x = vcos(\\theta)t$$`;
  const exp3 = `$$\\frac{1}{2}mv^2=\\frac{1}{2}kx^2$$`;
  const exp4 = `$$v=x\\sqrt{\\frac{k}{m}}$$`;
  const exp5 = `$$t=\\frac{\\Delta x}{vcos(\\theta)}$$`;
  const exp6 = `$$\\Delta y = vsin(\\theta) \\left(\\frac{\\Delta x}{vcos(\\theta)}\\right)+\\frac{1}{2}g\\left(\\frac{\\Delta x}{vcos(\\theta)}\\right)^2=\\Delta x tan(\\theta)+\\frac{g(\\Delta x)^2sec^2(\\theta)}{2v^2}$$`;
  const exp7 = `$$tan^2(\\alpha) + 1 = sec^2(\\alpha)$$`;
  const exp8 = `$$\\left(\\frac{g(\\Delta x)^2}{2v^2}\\right)tan^2(\\theta) + \\left(\\Delta x \\right)tan(\\theta) + \\left(\\frac{g(\\Delta x)^2}{2v^2} - \\Delta y\\right) = 0$$`;
  const exp9 = `$$\\theta = tan^{-1}($$ans$$)$$`;

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-gray-800 rounded-xl">
      <Header title="Math" />
      <hr />
      <br />
      <p className="md:text-lg font-medium tracking-tight text-slate-900 dark:text-white pb-5">
        Comenzamos con estas 3 ecuaciones simples y sin despejar, de movimiento parabólico y conservación de energía. De todos estos datos, el usuario ingresa la distancia horizontal, distancia vertica, gravedad, masa, y constante del resorte, lo que nos deja al tiempo, angulo, compresión y velocidad como incógnitas.
      </p>
      <div className="flex items-center justify-center">
        <div className="bg-white p-3 rounded-xl text-2xl mr-1" style={{marginLeft:"20%"}}>
          <Latex>{exp1}</Latex>
        </div>
        <div className="bg-white flex p-3 rounded-xl text-2xl" style={{marginRight:"5%", marginLeft:"5%"}}>
          <Latex>{exp2}</Latex>
        </div>
        <div className="bg-white flex p-3 rounded-xl text-2xl ml-1" style={{marginRight:"20%"}}>
          <Latex>{exp3}</Latex>
        </div>
      </div>
      <br /><br />
      
      <p className="text-lg font-medium tracking-tight text-slate-900 dark:text-white pb-5">
        Despejamos la ecuación de conservación de energía para la velocidad, y vemos que tenemos como incógnita la compresión. Para esta solución asumiremos que la compresión siempre es la máxima (1 metro), y solo modificaremos el ángulo para que el proyectil llegue al objetivo. Mientras que el objetivo esté dentro del rango máximo del cañón (delimitado por la compresión máxima), sabemos que existirá algún ángulo que cumpla el objetivo.
      </p>
      <div className=" flex items-center justify-center">
      <div className="bg-white flex p-3 rounded-xl text-2xl">
        <Latex>{exp4}</Latex>
      </div>
      </div>
      <br />< br />

      <p className="text-lg font-medium tracking-tight text-slate-900 dark:text-white pb-5">
        Despejamos la ecuación de movimiento horizontal para el tiempo, y sustituimos el valor en la ecuación de movimiento vertical.
      </p>
      <div className="-mx-5 flex items-center justify-center">
      <div className="bg-white flex p-3 rounded-xl text-2xl" style={{marginLeft:"15%"}}>
        <Latex>{exp5}</Latex>
      </div>
      <div className="bg-white flex p-3 rounded-xl text-2xl ml-1" style={{marginLeft:"3%", marginRight:"15%"}}>
        <Latex>{exp6}</Latex>
      </div>
      </div>
      <br /><br />

      <p className="text-lg font-medium tracking-tight text-slate-900 dark:text-white pb-5">
        Utilizamos una identidad trigonométrica para deshacernos del secante, y reacomodamos los términos para formar una ecuación cuadrática en términos de la tangente del ángulo.
      </p>
      <div className="-mx-5 flex items-center justify-center">
      <div className="bg-white flex p-3 rounded-xl text-2xl" style={{marginLeft:"15%"}}>
        <Latex>{exp7}</Latex>
      </div>
      <div className="bg-white flex p-3 rounded-xl text-2xl" style={{marginLeft:"3%", marginRight:"15%"}}>
        <Latex>{exp8}</Latex>
      </div>
      </div>
      <br /><br />

      <p className="text-lg font-medium tracking-tight text-slate-900 dark:text-white pb-5">
        Tomamos el arcotangente de la solución a la ecuación cuadrática, y nos queda el ángulo de lanzamiento theta. A veces existirán 2 soluciones, representando 2 posibles trayectorias que llegan al objetivo, pero utilizaremos la que tarde menos, es decir, la del menor ángulo final.
      </p>
      <div className="flex items-center justify-center">
      <div className="bg-white flex p-3 rounded-xl text-2xl">
        <Latex>{exp9}</Latex>
      </div>
      </div>
    </div>
  )
}

export default Math