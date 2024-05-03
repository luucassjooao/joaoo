import { ReactNode } from 'react';
import Shikas from './shikas';
import Link from 'next/link';

export default function Layout({
  children
}: {
  children: ReactNode
}) {
  return (
    <div className='flex mt-10' >
      <div className="mr-36 ml-10 text-xl font-medium text-blue-700">
        <Shikas />
        <Link href={'/'} className="mb-1 mt-1 hover:text-purple-900 block">home</Link>
        <Link href={'/essays'} className='hover:text-purple-900 block'>essays</Link>
      </div>
      {children}
    </div>
  )
} 