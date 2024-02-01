import React from 'react'
import Image from 'next/image';
const bio = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-col-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                        <h1 className="text-green-500 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                            Hello World, I'm Randy
                        </h1>
                    <p className="text-white-400 text-base text-lg mb-6 lg:text-xl">
                        I am currently a junior at California State University,
                        Fullerton with intrests in algorithmic
                        problem solving, AI/ML, and web development.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-green-500 hover:bg-black text-white border border-white font-extrabold mt-3">
                            Hire Me
                        </button>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-green-500 hover:bg-black text-white border border-white font-extrabold mt-3">
                            Download Resume
                        </button>
                    </div>
                </div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="col-span-5 place-self-center w-[300px] h-[300px] lg:w-[425px] lg:h-[500px] mt-4 lg:mt-0">
                        <Image
                            src="/images/me.png"
                            alt='me image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            style=""
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
    
};

export default bio