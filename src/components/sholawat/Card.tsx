'use client'
import React, { useState } from 'react';

function Card() {
    const [isShow, setIsShow] = useState(false);

    const handleClick = () => {
        setIsShow(!isShow);
    };

    return (
        <>
            <div className='flex flex-col gap-10 w-2/3 h-auto bg-primary rounded-lg p-10'>
                <div>
                    <h2 className='text-3xl text-white font-Quisand'>Kumpulan Sholawat & Lirik Qosidah</h2>
                </div>

                <div>
                    {/* button */}
                    <div className='w-full h-10 bg-blue-400 flex items-center px-5 rounded-lg cursor-pointer select-none' onClick={handleClick}>
                        tesss
                    </div>

                    {/* content */}
                    <div className={`bg-blue-300 overflow-hidden transition-max-height duration-500 ease-in-out rounded-lg ${isShow ? 'max-h-screen' : 'max-h-0'}`}>
                        <div className="p-5">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error distinctio aperiam illo assumenda ut dignissimos et maiores, sit perferendis aliquam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
