'use client'
import { SholawatLyric } from '@/lib/api';
import React, { useState } from 'react';
import CardContent from './CardContent';

const Card = () => {
    const [isShow, setIsShow] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setIsShow(isShow === index ? null : index);
    };

    return (
        <div className='flex flex-col gap-10 w-2/3 h-auto bg-primary rounded-lg p-10'>
            <div>
                <h2 className='text-3xl text-white font-Quisand'>Kumpulan Sholawat & Lirik Qosidah</h2>
            </div>
            
            <div>
                {SholawatLyric.map((data, index) => (
                    <div key={index} className='mb-4'>
                        {/* button */}
                        <div
                            className={`w-full h-10 border border-secondary text-white flex items-center px-5 rounded-lg cursor-pointer select-none relative z-20 ${isShow === index ? 'bg-greenl' : 'bg-blue-400'}`}
                            onClick={() => handleClick(index)}
                        >
                            {data.majelis}
                        </div>
                        <div className={`flex flex-col justify-center transition-all duration-500 ease-in-out ${isShow === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className='mt-5 flex flex-wrap justify-center gap-3'>
                                {data.lyrics.map((lyric) => (
                                    <CardContent key={lyric.id} id={lyric.id} title={lyric.title} majelis={data.majelis}/>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;