import React from 'react';
import {SiHtml5, SiCss3, SiSass, SiTailwindcss, SiJavascript, SiReact, SiRedux, SiAxios, SiExpress, SiPostgresql, SiSequelize, SiJsonwebtokens, SiGit, SiTrello, SiDiscord, SiSlack,} from 'react-icons/si'
import {FaNodeJs, FaRobot, FaGithub} from 'react-icons/fa';
import {TbBrandVscode} from 'react-icons/tb';

const Skills = () => {
  return (
    <section name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full py-60'>
        <div className='pb-10'>
            <h3 className='text-4xl font-bold inline border-b-4 border-teal-400'>Mes compétences</h3>
            <p className='py-4'>Voici les technologies et les outils que j'utilise.</p>
        </div>
      <div className='bg-gradient-to-r from-cyan-500 to-teal-500'>
        <article>
          <h4 className='text-2xl py-1 flex justify-center pt-5 text-gray-800'>Front-end</h4>
            <ul className='text-5xl flex flex-wrap justify-center text-center gap-5 pt-5 text-gray-800'>
              <li>
                <SiHtml5/>
                <p className='text-sm pt-2'>HTML5</p>
              </li>
              <li>
                <SiCss3/>
                <p className='text-sm pt-2'>CSS3</p>
              </li>
              <li>
                <SiSass/>
                <p className='text-sm pt-2'>Sass</p>
              </li>
              <li>
                <SiTailwindcss/>
                <p className='text-sm pt-2'>TailwindCSS</p>
              </li>
              <li>
                <SiJavascript/>
                <p className='text-sm pt-2'>JavaScript</p>
              </li>
              <li>
                <SiReact/>
                <p className='text-sm pt-2'>React</p>
              </li>
              <li>
                <SiRedux/>
                <p className='text-sm pt-2'>Redux</p>
              </li>
              <li>
                <SiAxios/>
                <p className='text-sm pt-2'>Axios</p>
              </li>   
            </ul>
        </article>
        <article>
          <h4 className='text-2xl py-1 flex justify-center pt-5 text-gray-800'>Back-end</h4>
            <ul className='text-5xl flex flex-wrap  justify-center gap-5 py-5 text-gray-800'>
              <li>
                <FaNodeJs/>
                <p className='text-sm pt-2'>NodeJS</p>
              </li>
              <li>
                <SiExpress/>
                <p className='text-sm pt-2'>Express</p>
              </li>
              <li>
                <SiPostgresql/>
                <p className='text-sm pt-2'>PostgreSQL</p>
              </li>
              <li>
                <SiSequelize/>
                <p className='text-sm pt-2'>Sequelize</p>
              </li>
              <li>
                <SiJsonwebtokens/>
                <p className='text-sm pt-2'>JSON web token</p>
              </li>
            </ul>
        </article>
        <article>
          <h4 className='text-2xl py-1 flex justify-center pt-5 text-gray-800'>Outils</h4>
            <ul className='text-5xl flex flex-wrap  justify-center gap-5 py-5 text-gray-800'>
              <li>
                <TbBrandVscode/>
                <p className='text-sm pt-2'>VSCode</p>
              </li>
              <li>
                <SiGit/>
                <p className='text-sm pt-2'>Git</p>
              </li>
              <li>
                <FaGithub/>
                <p className='text-sm pt-2'>GitHub</p>
              </li>
              <li>
                <SiTrello/>
                <p className='text-sm pt-2'>Trello</p>
              </li>
              <li>
                <FaRobot/>
                <p className='text-sm pt-2'>DailyBot</p>
              </li>
              <li>
                <SiSlack/>
                <p className='text-sm pt-2'>Slack</p>
              </li>
              <li>
                <SiDiscord/>
                <p className='text-sm pt-2'>Discord</p>
              </li>
            </ul>
        </article>
      </div>
      </div>
    </section>
  )
}

export default Skills