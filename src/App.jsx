import React,{useEffect,useState} from 'react'
import Img from './images/background.jpg'
import Search from './images/search.png'
import Weather from './images/weather-2021-12-07.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'
import { data } from 'autoprefixer';


function App() {
  const [weatherdata,setweatherdata]=useState({});
  const [searchInput,setsearchInput]=useState("");
  useEffect(()=>{
    console.log("Hello world");
    callAPI("Karachi");
  },[])
  const callAPI=async(cityName) => {
    try {
    const weatherUrl=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=69e67c8bdadf637986d2a5ad89d314c4&units=metric`);
    console.log("weatherUrl",weatherUrl);

    setweatherdata(weatherUrl.data)
    } catch (error) {
      console.log("error",error)
    }
  }
  const fromHandler= (e) => {
    e.preventDefault();
    console.log("searchInput",searchInput)
    callAPI(searchInput)
  }
  return (
    <>
    <div className='text-white' id='my-background'>
      <form onSubmit={fromHandler}>
        <input
        className='rounded-full px-5 w-[30%] justify-center mx-[500px] h-12 text-black font-bold mt-[100px]'
        onChange={ (e) => setsearchInput (e.target.value) }
         placeholder='Enter City Name' /> 
      </form>
      <div className='mx-[600px]'>
        <h1 className='font-bold mt-10'>City Name : {weatherdata?.name}</h1><br />
        <h3 className='font-bold'>Temp : {weatherdata?.main?.temp}</h3><br />
        <h3 className='font-bold'>Haze : {weatherdata?.weather && weatherdata?.weather[0].main}</h3>
      </div>
    </div>
    </>
  )
  }

export default App
