import React from 'react'
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { Link, NavLink } from 'react-router-dom';

const About = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-gray-800 rounded-xl">
      <Header title="About" />
      <hr />
      <br />

      <p className="text-lg font-medium tracking-tight text-slate-900 dark:text-white">
        Rotas es un programa cuya principal función es calcular el ángulo de lanzamiento y la compresión de un cañón de resorte, tal que el proyectil lanzado pueda llegar a cierto objetivo. El usuario ingresa datos como la distancia al objetivo, la masa del proyectil, etc., y el programa muestra el resultado siguiendo el proceso descrito en la sección de <NavLink action="replace" to={"/math"} ><span className="hover:underline" style={{color:currentColor}}> Math</span>
        </NavLink>.
      </p>
      
      <br /><br />
      <p className="text-2xl font-extrabold tracking-tight mb-2" style={{color:currentColor}}>
        FAQ's
      </p>
      <hr className="dark:border-gray-600"/>
      
      <p className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white mt-5">
        - ¿Para qué es esto?
      </p>
      <p className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
        Rotas fue desarrollado como mi aportación al Concurso Open Doors de Ingenierías y Arquitectura (para la sección de tiro parabólico), organizado por la Universidad Panamericana, a pesar de que no pueda participar oficialmente este año. <a href="https://concursoopendoors.up.edu.mx" target="_blank" className="hover:underline" style={{color:currentColor}}>Más información</a>
      </p>

      <p className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white mt-5">
        - ¿Cómo hiciste la página?
      </p>
      <p className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
        Esta página fue desarrollada en Javascript y HTML, usando las librerías de <a href="https://reactjs.org" target="_blank" className="hover:underline" style={{color:currentColor}}>React</a> y <a href="https://tailwindcss.com" target="_blank" className="hover:underline" style={{color:currentColor}}>TailwindCSS</a>, con ayuda adicional de <a href="https://mauriciopoppe.github.io/function-plot/" target="_blank" className="hover:underline" style={{color:currentColor}}>Function Plot</a> para las gráficas y <a href="https://firebase.google.com" target="_blank" className="hover:underline" style={{color:currentColor}}>Firebase</a> para el hosting. El código fuente es de uso libre y se encuentra <a href="https://github.com/arepo90/calculator-app" target="_blank" className="hover:underline" style={{color:currentColor}}>aquí</a>.
      </p>

      <p className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white mt-5">
        - ¿Cómo lo uso?
      </p>
      <p className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
        Ingresa los datos necesarios (con unidades del sistema internacional) en la sección de 
        <NavLink action="replace" to={"/Calculator"} ><span className="hover:underline" style={{color:currentColor}}> Calculadora </span>
        </NavLink>
         y haz click en 'Submit'. El resultado principal se mostrará debajo de esto, y aparecerá una gráfica y resultados parciales del lado derecho. Puedes hacer click en 'Clear' para limpiar todos los datos.
      </p>

      <p className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white mt-5">
        - ¿Por qué ese nombre?
      </p>
      <p className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
        'Rotas' significa algo similar a 'Ruedas', en latin. Quisiera poder decir que hay algún otro significado detrás de porqué usé este nombre, pero la verdad solo lo elegí porque me gusta como suena.
      </p>

      <p className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white mt-5">
        - ¿Quién eres?
      </p>
      <p className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
        Mi nombre es Esteban, aunque a veces usaré el pseudónimo de 'Arepo' en documentación y otras páginas. Soy un estudiante mexicano de preparatoria, y soy el autor y desarrollador de Rotas.
      </p>

      <p className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white mt-5">
        - ¿Porqué algunas partes está en inglés y otras en español?
      </p>
      <p className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
        La verdad no lo se. Dado que este es un concurso en México, la información y mensajes importantes estarán en Español, pero tal vez los títulos de algunas secciones y la documentación no lo estén.
      </p>

      <br /><br/>
      <p className="text-2xl font-extrabold tracking-tight mb-2" style={{color:currentColor}}>
        Contact
      </p>
      <hr className="dark:border-gray-600"/>
      <p className="text-base font-medium tracking-tight text-slate-900 dark:text-white mt-5">
        - Arepo90@proton.me<br />
        - nabetse069@gmail.com<br />
        - <a href="https://github.com/arepo90" target="_blank" className="hover:underline" style={{color:currentColor}}>Github</a>
      </p>
    </div> 
  )
}

export default About