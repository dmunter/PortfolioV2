import Hero from './components/Hero'
import Who from './components/Who'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Header from './layout/header'
import styled from 'styled-components'
const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
overflow-x: hidden;
scrollbar-width: none;
color: white;hidden
position: relative;
&::-webkit-scrollbar{
  display: none
/]`;
function App() {


  return (
    <>
    <div className='h-screen overflow-hidden'>
      <div className=''>
        <div className="stars "> </div>
        <div className=' relative'><div className="twinkling"></div></div>
        <img src="\assets\bg.jpeg" className="w-screen h-full absolute top-0 z-10 opacity-50 bg-black/10"></img>   
      </div>
      <div className='snap-y snap-mandatory h-screen overflow-scroll  p-5 absolute z-20 overflow-x-hidden' >  
        {/* <Header/>  */}
        <div className='snap-center w-screen h-full flex items-center justify-center text-4xl'><Hero/></div>
        <div className='snap-center w-screen h-full flex items-center justify-center text-4xl'><Who/>Who</div>
        <div className='snap-center w-screen h-full flex items-center justify-center text-4xl'><Portfolio/> Portfolio</div>   
        <div className='snap-center w-screen h-full flex items-center justify-center text-4xl'><Contact/></div>
      </div>
      </div>
    </>

  )
}

export default App
