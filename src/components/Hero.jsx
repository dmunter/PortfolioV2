
function Hero() {

//   createStar({color: '#B5CDFF', size: 20, x: 50, y: 0});
// createStar({color: '#FFE4CE', size: 50, x: 180, y: 0});
// createStar({color: '#FF6C00', size: 100, x: 400, y: 0});

   return(
    <div className="relative">
        <div className="absolute z-20 w-full h-full absolute top-0 snap-start">
            <div className="flex justify-around  content-center stretch flex-wrap h-full">
                <div className="m-auto">
                  <h1 className="text-primary"> Drew Munter.</h1>
                  <p>I build stuff for the web.</p>
                </div>
                <img src="vite.svg" className=" "></img>
            </div>
        </div>
       
    </div>
   )
}
export default Hero