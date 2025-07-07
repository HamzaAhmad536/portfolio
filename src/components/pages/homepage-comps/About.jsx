import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
    return (
        <section name="About" 
        className='relative w-full text-white my-16'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg'>

                    <div className='pb-8'>
                        <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40'>About me</h2>
                    </div>

                    <p className="mb-4 py-6">
                        I'm Hamza – that friend who can't stop seeing tech solutions in everyday problems. You know when you're stuck in traffic and think "There's got to be a better way"? My brain immediately starts sketching an app for that.
                        I fell in love with how code can turn wild ideas into real things people actually use. Whether it's teaching computers to recognize patterns or building web apps that feel effortless, I get that kid-in-a-candy-store excitement every time. My happy place? That sweet spot where smart technology meets human needs.
                    </p>

                    <p>
                        What drives me isn't just writing code – it's creating tools that feel like they were made for real people. Because at the end of the day, tech should work for us, not the other way around.
                        Coffee, code, and solving puzzles – that's my trifecta. Let's build something meaningful together.
                    </p><br />

                    <p>
                        I promise I'm more approachable than my GitHub commits make me seem.
                    </p>

                    {/* <Link to='/about-me' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                        See more
                        <span className=''><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
                    </Link> */}
                
            </div>

            <ScrollLink to="Projects" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
            
        </section>
        
    )
}

export default About
