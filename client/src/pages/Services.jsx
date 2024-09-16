import React from 'react';
import { Link } from 'react-router-dom';
export default function Services() {
    return (
        <main>

            <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
                <h1 className='text-slate-700 font-bold text-1xl'>Household Services, <br /> Revolutionized <span className='text-slate-500'> <br />
                </span>
                </h1>

            </div>

            <div className='flex flex-wrap gap-y-8 justify-around'>
                <div className='sm:w-[30%] p-5 flex flex-col gap-10 border rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer shadow-2xl text-center'>
                    <h1 className='text-1xl'>
                        Plumbing Services
                    </h1>
                    <p>Plumbing isn't only for the collection, transportation, and dispersal of clean water, it can also be used to remove liquids and waste. Plumbers work to ensure that plumbing systems perform waste disposal in an efficient and safe manner. This makes it possible to separate your clean water from harmful contaminants.
                        We offer professionals working in the plumbing feild.
                    </p>
                </div>
                <div className='sm:w-[30%] p-5 flex flex-col gap-10 border rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer shadow-2xl text-center'>
                    <h1 className='text-1xl'>
                        Barber Services
                    </h1>
                    <p>A great haircut does more than just change your appearance—it boosts your confidence. Our skilled barbers are dedicated to providing precision cuts, stylish grooming, and personalized services tailored to your unique style. Whether you're looking for a classic cut, a modern style, or a clean shave, our professionals ensure you leave looking and feeling your best.
                    </p>
                </div>
                <div className='sm:w-[30%] p-5 flex flex-col gap-10 border rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer shadow-2xl text-center'>
                    <h1 className='text-1xl'>
                        Carpenter Services
                    </h1>
                    <p>
                        Quality craftsmanship is the cornerstone of any beautiful space. Our expert carpenters bring years of experience to every project, whether you're looking to build custom furniture, renovate your home, or create intricate woodwork. We specialize in precision, durability, and attention to detail, ensuring that every piece we craft not only meets but exceeds your expectations.
                    </p>
                </div>
                <div className='sm:w-[30%] p-5 flex flex-col gap-10 border rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer shadow-2xl text-center'>
                    <h1 className='text-1xl'>
                        Electrician  Services
                    </h1>
                    <p>
                        Reliable electrical work is essential for the safety and functionality of your home or business. Our certified electricians are skilled in all aspects of electrical installation, maintenance, and repair. From wiring and lighting to advanced electrical systems, we ensure that your electrical setup is efficient, safe, and up to code. Trust our professionals to keep your power running smoothly and securely.

                    </p>
                </div>
                <div className='sm:w-[30%] p-5 flex flex-col gap-10 border rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer shadow-2xl text-center'>
                    <h1 className='text-1xl'>
                        Housekeeper  Services
                    </h1>
                    <p>
                        A clean and organized home is key to a peaceful mind. Our professional housekeepers provide thorough and reliable cleaning services tailored to your needs. Whether it's regular maintenance or a deep clean, we ensure every corner of your home is spotless. With attention to detail and a commitment to excellence, we help you create a comfortable and welcoming environment for you and your family.
                    </p>
                </div>

            </div>

            <div className='w-full flex justify-center mt-20'>

                <Link to={'/services-form'}>
                    <button className='border bg-red-500 rounded-md p-3 text-white'>Order Now</button>
                </Link>
            </div>
        </main>
    )
}
