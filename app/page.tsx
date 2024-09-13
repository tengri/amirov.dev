import Image from "next/image";

import React from 'react'
import { SocialIcon } from 'react-social-icons'


const staticUrl = 'https://pub-dc1c1c24dc684523bd492c2269dd2a0e.r2.dev/public';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)] min-h-screen md:bg-gradient-to-r md:from-sky-500 from-10% md:via-white md:via-55% md:to-orange-500 md:to-90% sm:bg-slate-100 bg-slate-100">
     <main className="flex flex-col gap-8 row-start-2 items-center w-96 md:shadow-xl p-8 md:rounded-3xl md:bg-slate-100">
      <div className="flex flex-row justify-between w-full">
        <Image src={`${staticUrl}/images/reactjs.svg`} alt="ReactJS" width={'50'} height={'50'}/>
        {/* TODO: fix it */}
        <img src={`${staticUrl}/images/ts.png`} alt="Typescript" width={'50'} height={'50'}/>
        <Image src={`${staticUrl}/images/nextjs.svg`} alt="NextJS" width={'50'} height={'50'}/>
        <img src={`${staticUrl}/images/nestjs.png`} alt="NestJS" width={'50'} height={'50'}/>

      </div>

     <div className="avatar relative w-full h-64">
      <img alt='avatar'  src={`${staticUrl}/images/avatar2.png`} className="rounded-3xl" />
    </div>

    <div className="flex flex-row justify-between w-full">
        <SocialIcon url="tg://ruslan_amirov" network="telegram" target="_blank" />
        <SocialIcon url="https://www.linkedin.com/in/ruslan-amirov-0268bb80/" target="_blank" />
        <SocialIcon url="https://github.com/tengri" className="w-24" />
        <SocialIcon url="https://mail.google.com/mail/u/?authuser=ruslan.amirov.it@gmail.com" href="mailto:ruslan@amirov.dev"  target="_blank" />
    </div>

      <a className="btn text-blue-500 hover:border-transparent hover:bg-blue-500 hover:text-white btn-outline btn-block rounded-2xl" href={`${staticUrl}/JS_Fullstack_Dev_Amirov.pdf`} download="/JS_Fullstack_Dev_Amirov.pdf" target="_blank" >
        JS_Fullstack_Dev_Amirov.pdf
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
      </a>

     </main>

    </div>
  );
}
