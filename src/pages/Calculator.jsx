import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { Header } from '../components';

//El propio programa si funciona, nada mas hay que recoger los datos

let m, g, k, L, hf, h0, h, t, vix, viy, vi, a, x;
let d, f, G, H, R, S, T, U, x1, x2;

function safetyChech(){
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
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Calculator" />
      <button type="button" onClick={solve1}>botonlol</button>
      <p>elpepe {a}</p>
    </div>
  )
}

export default Calculator