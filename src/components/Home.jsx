import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <section className='w-full h-screen bg-[#0a192f]'>

         {/* Container */}
         <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold text-teal-400'>Szimonetta Sipos Chapron</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#CCD6F6] '>Développeur Web FullStack JavaScript</h2>
            
            <p className='py-4 max-w-[700px] text-[#8892B0] '>
                Je suis actuellement à la recherche d'un contrat en CDI ou
                d'une alternance pour devenir Concepteur Développeur d'Application.
                Je propose également mes services en tant que freelance.
            </p>

            <div>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-500 group'>
                    Regardez mes projets
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>

    </section>
  )
}

export default Home