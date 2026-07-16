import TiltCard from './Cardist';

const Hero = () => {
  return (
    <section id="About" className="min-h-screen flex items-center justify-center w-full py-20 px-6 bg-black">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl w-full gap-12 lg:gap-20">
        
        <div className="flex flex-col items-start space-y-6 flex-1 text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white">
            Hello, I'm <br className="hidden lg:block" />
            <span className="bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              MV Varma
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-lg">
            I'm a tech enthusiast and developer with a strong focus on full-stack web technologies and cybersecurity. I love exploring how systems work behind the scenes—building dynamic applications while learning how to analyze and secure them.
          </p>

          <div className="pt-4">
            <a 
              href="#Contact" 
              className="px-8 py-3 bg-purple-600/20 border border-purple-500/50 hover:bg-purple-500 hover:text-white text-purple-300 font-semibold rounded-lg transition-all duration-300 shadow-purple-400 hover:shadow-purple-700 "
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-sm lg:max-w-md h-104 lg:h-136 shrink-0 flex items-center justify-center z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />
          
          <TiltCard  
            imageSrc="/images/hes.jpeg"
            title="MV Varma"
            description="Web Developer | Blue Team | Next.js | Tailwind CSS"
            className="h-full w-full relative z-20"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;