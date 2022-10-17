import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { Header } from '../components';
import { useState, useRef } from 'react';

//El propio programa si funciona, nada mas hay que recoger los datos

let m = 0.5, g = -9.81, k = 450, L = 20, hf = 10, h0 = 0, h, t, vix, viy, vi, a, x;
let d, f, G, H, R, S, T, U, x1, x2;

function safetyCheck(){
  let check = (Math.pow(vi, 2.0) / (2*g)) - ((g*Math.pow(L, 2.0)) / (2*Math.pow(vi, 2.0)));
  if(check > h){
    return false;
  }
  return true;
}

function solveQ(A, B, C){
  let discriminant = (B * B) - (4 * A * C);
  if(discriminant > 0){
      x1 = (-B + Math.sqrt(discriminant)) / (2.0 * A);
      x2 = (-B - Math.sqrt(discriminant)) / (2.0 * A);
  }
  else{
      x1 = -B / (2.0 * A);
      x2 = x1;
  }
}

function solve1(){
  h = hf - h0;
  x = 1.0;
  vi = x * Math.sqrt((k/m));
  let temp = 0.5 * g * Math.pow((L/vi), 2.0);
  solveQ(temp, L, (temp-h));
  a = Math.atan(x1);
  vix = vi * Math.cos(a); viy = vi * Math.sin(a);
  t = L / vix;
  a *= 180.0 / Math.PI;
}

const Calculator = () => {
  const { currentColor } = useStateContext();
  const [masa, setMasa] = useState('');
  const [gravedad, setGravedad] = useState('');
  const [constante, setConstante] = useState('');
  const [hef, setHf] = useState('');
  const [he0, setH0] = useState('');
  const [distancia, setDistancia] = useState('');
  const [compresion, setCompresion] = useState('');
  const [angulo, setAngulo] = useState('');

  const submissionHandler = (e) => {
    e.preventDefault();
    m = Number(masa);
    g = Number(gravedad);
    k = Number(constante);
    hf = Number(hef);
    h0 = Number(he0);
    L = Number(distancia);
    solve1();
    a *= 1000; a = Math.trunc(a); a /= 1000;
    x *= 1000; x = Math.trunc(x); x /= 1000;
    setCompresion(x);
    setAngulo(a);
    console.log(a);
    console.log(x);
  };

  const Form = useRef(null);

  const clearHandler = () => {
    Form.current.reset();
    setAngulo("");
    setCompresion("");
  }

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 dark:bg-gray-800 bg-white rounded-xl">
      <Header title="Calculator" />
      <form onSubmit={submissionHandler} ref={Form}>
      <div class="relative z-0 w-40">
        <input required autoComplete="off" type="text" id="masa" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " onChange={(e) => {setMasa(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" style={{color: currentColor}}>Masa</label>
        </div>
        <br />

        <div class="relative z-0 w-40">
        <input required autoComplete="off" type="text" id="gravedad" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " onChange={(e) => {setGravedad(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" style={{color: currentColor}}>Gravedad (-)</label>
        </div>
        <br />

        <div class="relative z-0 w-40">
        <input required autoComplete="off" type="text" id="constante" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " onChange={(e) => {setConstante(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" style={{color: currentColor}}>Constante</label>
        </div>
        <br />

        <div class="relative z-0 w-40">
        <input required autoComplete="off" type="text" id="hef" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " onChange={(e) => {setHf(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" style={{color: currentColor}}>Altura del objetivo</label>
        </div>
        <br />

        <div class="relative z-0 w-40">
        <input required autoComplete="off" type="text" id="he0" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " onChange={(e) => {setH0(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" style={{color: currentColor}}>Altura del disparador</label>
        </div>
        <br />

        <div class="relative z-0 w-40">
        <input required autoComplete="off" type="text" id="distancia" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " onChange={(e) => {setDistancia(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" style={{color: currentColor}}>Distancia horizontal</label>
        </div>

        <div className="mt-10">
          <button type="submit" className="p-2 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background: currentColor, borderRadius: '10%' }}>Submit</button>
          <button type="button" onClick={clearHandler} className="ml-3 p-2 hover:drop-shadow-xl bg-gray-400 text-white" style={{borderRadius: '10%' }}>Clear</button>
        </div>
        <br /><br />

        <div>
        <div class="relative z-0 w-40">
        <input disabled="true" autoComplete="off" type="text" id="distancia" class="block py-2.5 px-5 w-full text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" value={angulo} placeholder=" " onChange={(e) => {setDistancia(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-2 -z-15 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white dark:bg-slate-800" style={{color: currentColor}}><pre> Angulo </pre></label>
        </div>
        <br />
        <div class="relative z-0 w-40">
        <input disabled="true" autoComplete="off" type="text" id="distancia" class="block py-2.5 px-5 w-full text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" value={compresion} placeholder=" " onChange={(e) => {setDistancia(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-2 -z-15 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white dark:bg-slate-800" style={{color: currentColor}}><pre> Compresión </pre></label>
        </div>
        </div>
        <br />
      </form>
    </div>
  )
}

export default Calculator