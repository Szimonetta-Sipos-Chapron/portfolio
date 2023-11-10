import React from 'react'
import ogm from '../assets/ogm.png';
import meute from '../assets/meute.png';
import alain from '../assets/alain.png';

const Projects = () => {
  return (
    <section name='projects' className='bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

            <div className='pb-10'>
            <h3 className='text-4xl font-bold inline border-b-4 border-[#14ECEB]'>Mes projets</h3>
            <p className='py-4'>Voici mes derniers projets.</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols3 gap-4'>
                <div className='shadow-lg shadow-[#040c16] group rounded-md flex justify-center mx-auto content-div '>
                </div>


                <a href='https://ogm.alexisdelahaye.fr/' target='_blank' rel='noreferrer'>
                <article>
                    <div className='text-center shadow-lg p-10 rounded-xl my-10 hover:scale-110 duration-500'>
                    <img src={ogm} alt='O’Game Master' width={500} height={500}/>
                    <h4 className='text-xl font-bold pt-8 pb-2 text-teal-600'>O'Game Master</h4>
                    <p className='py-2'>
                        Plateforme participative de partage et d'hébergement
                        de scénario de jeux de rôles en ligne, développé en équipe.
                    </p>
                    <p className='text-sm font-bold'>
                        #React #TailwindCSS #NodeJS #Express #PostgreSQL
                    </p>
                    </div>
                </article>
                </a>

                <a href='https://www.facebook.com/lameutedegarmr' target='_blank' rel='noreferrer'>
                    <article>
                        <div className='text-center shadow-lg p-10 rounded-xl my-10 hover:scale-110 duration-500'>
                        <img src={meute} alt='La Meute de Garmr' width={500} height={500}/>
                        <h4 className='text-xl font-bold pt-8 pb-2 text-teal-600'>La Meute de Garmr</h4>
                        <p className='py-2'>
                            Site vitrine de l'association La Meute de Garmr
                            qui font de l'évocation médiévale du IXème au XVème siècle.
                        </p>
                        <p className='text-sm font-bold'>
                            #React #TailwindCSS
                        </p>
                        </div>
                    </article>
                </a>

                <a href='https://www.facebook.com/AlainCG.Photographe' target='_blank' rel='noreferrer'>
                    <article>
                    <div className='text-center shadow-lg p-10 rounded-xl my-10 hover:scale-110 duration-500'>
                        <img src={alain} alt='Alain CG Photography' width={500} height={500}/>
                        <h4 className='text-xl font-bold pt-8 pb-2 text-teal-600'>Alain CG Photography</h4>
                        <p className='py-2'>
                        Site du photographe Alain CG pour consultez
                        ses albums photos, prendre contact et lire ses actualités.
                        </p>
                        <p className='text-sm font-bold'>
                        #React #TailwindCSS #Strapi
                        </p>
                    </div>
                    </article>
                </a>
            </div>

        </div>
    </section>
  )
}

export default Projects