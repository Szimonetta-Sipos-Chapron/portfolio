import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#14ECEB]'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Je m'appelle Szimonetta. Bienvenue sur mon site.</p>
                    </div>
                    <div>
                        <p>
                        Grâce à la formation avec O’Clock, je me sens prête à commencer ma nouvelle vie professionnelle
                        en tant que développeur web. Je sais que je vais devoir relever d'autres défis pour trouver
                        ma place dans ce métier, mais je suis ouverte pour envisager toutes les possibilités en vue d'acquérir plus d’expérience.
                        En attendant, je vais continuer à travailler sur mes projets personnels et me former sur d'autres technologies. 
                        </p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About