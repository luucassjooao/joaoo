import { TEssay, getEssays } from '@/api';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "essays",
};

export default async function SubmitEssays() {
  const esasys = await getEssays() as unknown as TEssay[]

  return (
      <div className="ml-15">
        <h1 className="mb-1 text-2xl font-bold">pensamentos/estudos</h1>
        <h3 className="mb-4 text-ms">Esses textos, não necessariamente são serios, <br />podem ser pensamentos que quero escrever<br />ou coisas que estou estudando/já estudei</h3>
        <div className={"mb-3"}>
          <li><Link href={`/essays/raw/recursion`} className='text-blue-700 underline hover:text-purple-900' >22/06/2024 - Recursão e busca em árvore binaria</Link></li> 
        </div>
        {esasys?.map(({id, created_at, title}) => (
          <div key={id} className={"mb-3"}>
            <li><Link href={`/essays/${title}`} className='text-blue-700 underline hover:text-purple-900' >{`${created_at.toLocaleDateString()}`} - {title}</Link></li> 
          </div>
        ))}
      </div>
  )
}
