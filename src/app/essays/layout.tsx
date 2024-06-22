'use client';

import { ReactNode } from 'react';
import Shikas from './shikas';
import Link from 'next/link';
import {useIsMobile} from '../hooks/useIsMobile';

export default function Layout({
  children
}: {
  children: ReactNode
}) {
  const { isMobile } = useIsMobile({ size: 500 });
  return (
    <div className={`${isMobile ? 'mt-2' : 'flex mt-10'}`} >
      <div className={`
      text-xl font-medium text-blue-700
      ${isMobile ? 'mr-3 ml-2' : 'mr-5 ml-6'}
      `}>
        <div className={`${isMobile ? 'flex' : ''}`} >
          <Shikas />
          <div>
            <Link href={'/'} className="mb-1 mt-1 hover:text-purple-900 block">home</Link>
            <Link href={'/essays'} className='hover:text-purple-900 block'>essays</Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
} 