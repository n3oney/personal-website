import React from 'react';
import Link from 'next/link';
import Animation from '../components/Animation';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className='flex flex-col lg:flex-row h-full justify-center mx-4 items-center'>
      <div className='flex flex-col justify-center text-center items-center mt-16 mb-4 lg:my-0'>
        <h1 className='font-bold text-6xl text-pink-1 mb-4'>neoney</h1>
        <h3 className='font-bold text-xl text-pink-2'>A 16 year-old web developer<br />from Poland.</h3>
        <div className='grid grid-cols-2 mt-8 gap-x-2.5 place-items-stretch'>
          <Link href='/projects'>
            <a>
              <Button>
                Check my projects out <span className='ml-2 whitespace-nowrap'>-&gt;</span>
              </Button>
            </a>
          </Link>
          <a href={`https://nexe.${process.env.NEXT_PUBLIC_BASE_DOMAIN}/`}>
            <Button className='w-full'>
              Nexe <span className='ml-2 whitespace-nowrap'>-&gt;</span>
            </Button>
          </a>
        </div>
      </div>
      <Animation />
    </div>
  );
}
