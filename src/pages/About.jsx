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
        Rotas fue desarrollado como mi aportación al <a href="https://concursoopendoors.up.edu.mx" target="_blank" className="hover:underline" style={{color:currentColor}}>Concurso Open Doors de Ingenierías y Arquitectura</a> (para la sección de tiro parabólico), organizado por la Universidad Panamericana. Además de la calculadora principal, puedes encontrar información sobre los procedimientos y un <NavLink action="replace" to={"/Simulator"} ><span className="hover:underline" style={{color:currentColor}}>Simulador</span>
        </NavLink> para verificar los datos y realizar otros experimentos.
      </p>

      <p className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white mt-5">
        - ¿Cómo está hecha la página?
      </p>
      <p className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
        Esta página fue desarrollada en Javascript y HTML, con ayuda de <a href="https://reactjs.org" target="_blank" className="hover:underline" style={{color:currentColor}}>React</a> y <a href="https://tailwindcss.com" target="_blank" className="hover:underline" style={{color:currentColor}}>TailwindCSS</a>, además de algunos complementos como <a href="https://mauriciopoppe.github.io/function-plot/" target="_blank" className="hover:underline" style={{color:currentColor}}>Function Plot</a> para las gráficas, <a href="https://github.com/zzish/react-latex" target="_blank" className="hover:underline" style={{color:currentColor}}>react-latex</a> para las ecuaciones en LaTeX, y <a href="https://firebase.google.com" target="_blank" className="hover:underline" style={{color:currentColor}}>Firebase</a> para el hosting. El código fuente es de uso libre y se encuentra <a href="https://github.com/arepo90/calculator-app" target="_blank" className="hover:underline" style={{color:currentColor}}>aquí</a>.
      </p>

      <p className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white mt-5">
        - ¿Cómo se usa?
      </p>
      <p className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
        La función principal de este programa se encuentra en <NavLink action="replace" to={"/Calculator"} ><span className="hover:underline" style={{color:currentColor}}>Calculator</span>
        </NavLink>. Aqui puedes ingresar los datos necesarios (con unidades del sistema internacional) y hacer click en 'Submit' para ver los resultados. En caso de que no exista una solución posible, se mostrara 'NaN' en los resultados. Para hacer cambios, puedes modificar los datos directamente o hacer click en 'Clear' para limpiar todos los datos. 
      </p>

      <p className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white mt-5">
        - ¿Por qué se llama 'Rotas'?
      </p>
      <p className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
        Significa algo similar a 'Ruedas' en latin y aparece en el <a href="https://wikipedia.org/wiki/Sator_Square" target="_blank" className="hover:underline" style={{color:currentColor}}>Cuadrado Sator</a>, del cual también proviene mi pseudonimo, 'Arepo'. Fuera de eso, no tiene ningún otro significado.
      </p>

  

      <p className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white mt-5">
        - ¿Porqué algunas partes está en inglés y otras en español?
      </p>
      <p className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
        No hay razón. Algunos componentes y secciones son recicladas de otros proyectos míos, por lo que puede haber mezclas de idiomas.
      </p>

      <p className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white mt-5">
        - ¿Cuánto tiempo tardaste en hacer el programa? / ¿Cuántos errores tiene todavía?
      </p>
      <p className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
        Si.
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