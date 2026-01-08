import hero from '../assets/profile.jpg';
import dirt from '../assets/dirt.svg';
import cloud from '../assets/cloud.svg';

export default function Hero() {
  return (
    <section>
        <div className="h-screen bg-linear-to-b from-blue-400 to-indigo-600 flex flex-col justify-center items-center text-white font-press relative overflow-hidden">

            <div className='w-36 mb-6'>
                <img src={hero} alt="Hero"  className='w-full max-1 rounded-full shadow-lg' />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                ASSEMBLY GROUP
            </h1>

            <div className="flex flex-col text-center items-center gap-4 justify-center w-3.5" >
                <a
                    href="#gallery"
                    className="w-46 px-6 py-3 text-white rounded-3xl border-3 border-amber-400 uppercase "
                >
                    Memories
                </a>
                <a
                    href="#about"
                    className="w-46 px-6 py-3 text-white rounded-3xl border-3 border-amber-400 uppercase "
                >
                    Playlist
                </a>
            </div>

            <div className='top-0 absolute w-6xl mt-4 '>
                <a href="#about" className="animate-bounce">
                    <img src={cloud} alt="cloud" className='w-fit drop-shadow-2xl'></img>
                </a>
            </div>

            <div className='absolute bottom-0 w-full h-fit'>
                <a href="#about" className="animate-bounce">
                    <img src={dirt} alt="Dirt" className='w-full'></img>
                </a>
            </div>

            
        </div>
    </section>
  )
    
}