import React from 'react'
import Image from 'next/image';
const bio = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-col-12'>
                <div className='col-span-7 place-self-center'>
                    <h1 className="text-white mb-5 text-4xl lg:text-6xl font-extrabold">Hello, I'm Randy</h1>
                    <p className="text-gray-400 text-lg mb-6 lg:text-xl">
                        I am currently a junior at California State University, Fullerton with intrests in algorithmic
                        problem solving, AI/ML, and web development.
                    </p>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                       <Image 
                        src="/images/me.png" 
                        alt='me image' 
                        className='absolute transform'
                        width={300} 
                        height={300}
                        />
                </div>
            </div>
        </section>
    );
};

export default bio