import React from 'react';

import { FireIcon,LockOpenIcon,DatabaseIcon ,ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
  <div name='support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-10'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>All Professional IT Services</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
              <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-4 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <FireIcon
                 className='w-16 p-4 bg-[#e7f723] text-[#f68187] rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Top Flexibility</h3>
                      <p className='text-gray-600 text-xl'>There are many variations of passages of Lorem Ipsu available but the.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600 cursor-pointer hover:text-[#f68188] hover:tracking-widest'>Read More.. <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <LockOpenIcon
                 className='w-16 p-4 bg-[#e7f723] text-[#f68187] rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Time Saving</h3>
                      <p className='text-gray-600 text-xl'>
There are many variations of passages of Lorem Ipsu available but the.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600 cursor-pointer hover:text-[#f68188] hover:tracking-widest'>Read More.. <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <DatabaseIcon className='w-16 p-4 bg-[#e7f723] text-[#f68187] rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Management</h3>
                      <p className='text-gray-600 text-xl'>
There are many variations of passages of Lorem Ipsu available but the</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600 cursor-pointer hover:text-[#f68188] hover:tracking-widest'>Read More.. <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <ChipIcon className='w-16 p-4 bg-[#e7f723] text-[#f68187] rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Collaborative</h3>
                      <p className='text-gray-600 text-xl'>
There are many variations of passages of Lorem Ipsu available but the.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600 cursor-pointer hover:text-[#f68188] hover:tracking-widest'>Read More.. <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;
