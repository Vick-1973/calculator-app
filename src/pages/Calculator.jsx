import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { Header } from '../components';
import { useState, useRef, useEffect } from 'react';
import functionPlot from 'function-plot'
import { setVirtualPageQuery } from '@syncfusion/ej2-react-grids';

let m, g, k, L, hf, h0, h, t, vix, viy, vi, a, x, maxh, showG = true;
let x1, x2;

function safetyCheck(){
  maxh = (Math.pow(vi, 2.0) / (-2*g)) - ((-1*g*Math.pow(L, 2.0)) / (2*Math.pow(vi, 2.0)));
  if(maxh > h){
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
  const { currentColor, setActiveGraph, activeGraph } = useStateContext();
  const [masa, setMasa] = useState('');
  const [gravedad, setGravedad] = useState('');
  const [constante, setConstante] = useState('');
  const [hef, setHf] = useState('');
  const [he0, setH0] = useState('');
  const [distancia, setDistancia] = useState('');
  const [compresion, setCompresion] = useState('');
  const [angulo, setAngulo] = useState('');
  const [VIX, setVix] = useState('');
  const [VIY, setViy] = useState('');
  const [VI, setVi] = useState('');
  const [H, setH] = useState('');
  const [T, setT] = useState('');


  const submissionHandler = (e) => {
    e.preventDefault();
    setActiveGraph(true);
    m = Number(masa);
    g = Number(gravedad);
    k = Number(constante);
    hf = Number(hef);
    h0 = Number(he0);
    L = Number(distancia);
    solve1();
    a *= 1000; a = Math.trunc(a); a /= 1000;
    x *= 1000; x = Math.trunc(x); x /= 1000;
    vi *= 1000; vi = Math.trunc(vi); vi /= 1000;
    viy *= 1000; viy = Math.trunc(viy); viy /= 1000;
    vix *= 1000; vix = Math.trunc(vix); vix /= 1000;
    t *= 1000; t = Math.trunc(t); t /= 1000;
    if(safetyCheck()){
      a = NaN;
      x = NaN;
    }
    setCompresion(x);
    setAngulo(a);
    setVi(vi);
    setVix(vix);
    setViy(viy);
    setH(h);
    setT(t);
    graphs();
  };

  const Form = useRef(null);

  const clearHandler = () => {
    Form.current.reset();
    setAngulo("");
    setCompresion("");
    setVi("");
    setVix("");
    setViy("");
    setDistancia("");
    setH("");
    setT("");
  }

  function getWindowDimensions() {
    const { innerWidth: w, innerHeight: he } = window;
    return {
      w,
      he
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
  const { he, w } = useWindowDimensions();

  let width = Number(w) * 0.5;
  let height = Number(he) * 0.55;

  function graphs(){
    functionPlot({
      target: "#cosita",
      width,
      height,
      xAxis: { domain: [-0.5, L * 1.1], label: "Distancia" },
      yAxis: { domain: [-1, Math.max(h0, hf) * 1.1 ], label: "Altura" },
      title: "Trayectoria",
      grid: false,
      data: [
        {
          fn: `${viy}*x/(${vix})+0.5*${g}*(x/(${vix}))^2+${h0}`,
          color: `${currentColor}`
        },
        {
          points: [[0,h0], [L,hf]],
          fnType: 'points',
          graphType: 'scatter',
          color: "black"
        }
      ]
    });
  }


  return (
    <div className="m-2 md:m-10 p-2 md:p-10 dark:bg-gray-800 bg-white rounded-xl" style={{height:Number(he) * 0.73}}>
      <Header title="Calculator" />
      <hr /><br />
      <div className="block float-left">
      <form onSubmit={submissionHandler} ref={Form}>
      <div class="relative z-0 w-40">
        <input required autoComplete="off" type="text" id="masa" class="block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " onChange={(e) => {setMasa(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" style={{color: currentColor}}>Masa</label>
        </div>
        <br />

        <div class="relative z-0 w-40">
        <input required autoComplete="off" type="text" id="gravedad" class="block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " onChange={(e) => {setGravedad(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" style={{color: currentColor}}>Gravedad (-)</label>
        </div>
        <br />

        <div class="relative z-0 w-40">
        <input required autoComplete="off" type="text" id="constante" class="block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " onChange={(e) => {setConstante(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" style={{color: currentColor}}>Constante</label>
        </div>
        <br />

        <div class="relative z-0 w-40">
        <input required autoComplete="off" type="text" id="hef" class="block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " onChange={(e) => {setHf(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" style={{color: currentColor}}>Altura del objetivo</label>
        </div>
        <br />

        <div class="relative z-0 w-40">
        <input required autoComplete="off" type="text" id="he0" class="block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " onChange={(e) => {setH0(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" style={{color: currentColor}}>Altura del disparador</label>
        </div>
        <br />

        <div class="relative z-0 w-40">
        <input required autoComplete="off" type="text" id="distancia" class="block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " onChange={(e) => {setDistancia(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" style={{color: currentColor}}>Distancia horizontal</label>
        </div>

        <div className="mt-10">
          <button type="submit" className="p-2 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background: currentColor, borderRadius: '10%' }}>Submit</button>
          <button type="button" onClick={clearHandler} className="ml-3 p-2 hover:drop-shadow-xl bg-gray-400 text-white" style={{borderRadius: '10%' }}>Clear</button>
        </div>
        <br /><br />

        <div>
        <div class="relative z-0 w-40">
        <input disabled="true" autoComplete="off" type="text" id="distancia" class="block py-2.5 px-5  text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" value={angulo} placeholder=" " onChange={(e) => {setDistancia(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-2 -z-15 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white dark:bg-slate-800" style={{color: currentColor}}><pre> Angulo </pre></label>
        </div>
        <br />
        <div class="relative z-0 w-40">
        <input disabled="true" autoComplete="off" type="text" id="distancia" class="block py-2.5 px-5  text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" value={compresion} placeholder=" " onChange={(e) => {setDistancia(e.target.value)}} style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-2 -z-15 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white dark:bg-slate-800" style={{color: currentColor}}><pre> Compresión </pre></label>
        </div>
        </div>
        <br />
      </form>
      </div>
      <div className="float-right">
      <div id="cosita" className="bg-white rounded-lg dark:bg-gray-200 dark:bg-gray-" style={{borderColor: currentColor, borderWidth: (activeGraph ? "2px" : "0px")}}></div>
      <div className="float-right flex relative top-8">
        <div class="relative w-40 mx-10">
        <input disabled="true" autoComplete="off" type="text" id="distancia" class="block py-2.5 px-5  text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" value={VI} placeholder=" " style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-2 -z-15 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white dark:bg-slate-800" style={{color: currentColor}}><pre> Velocidad inicial </pre></label>
        </div>
        <div class="relative w-40 mx-10">
        <input disabled="true" autoComplete="off" type="text" id="distancia" class="block py-2.5 px-5  text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" value={VIX} placeholder=" " style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-2 -z-15 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white dark:bg-slate-800" style={{color: currentColor}}><pre> ViX </pre></label>
        </div>
        <div class="relative w-40 mx-10">
        <input disabled="true" autoComplete="off" type="text" id="distancia" class="block py-2.5 px-5  text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" value={VIY} placeholder=" " style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-2 -z-15 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white dark:bg-slate-800" style={{color: currentColor}}><pre> ViY </pre></label>
        </div>
        <div class="relative w-40 mx-10">
        <input disabled="true" autoComplete="off" type="text" id="distancia" class="block py-2.5 px-5  text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" value={T} placeholder=" " style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-2 -z-15 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white dark:bg-slate-800" style={{color: currentColor}}><pre> Tiempo </pre></label>
        </div>
        <div class="relative w-40 mx-10">
        <input disabled="true" autoComplete="off" type="text" id="distancia" class="block py-2.5 px-5  text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" value={H} placeholder=" " style={{borderColor: currentColor}}/>
          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-2 -z-15 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white dark:bg-slate-800" style={{color: currentColor}}><pre> Δy </pre></label>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Calculator