import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { Header } from '../components';
import { useState } from 'react';

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

  const submissionHandler = (e) => {
    e.preventDefault();
    console.log(masa);
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 dark:bg-slate-800 bg-white rounded-xl">
      <Header title="Calculator" />
      <form onSubmit={submissionHandler}>
      <div class="relative z-0">
        <input type="text" id="masa" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " onChange={(e) => {setMasa(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Masa</label>
        </div>
        <div className="mt-10">
          <button type="submit" className="p-2 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background: currentColor, borderRadius: '10%' }}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Calculator