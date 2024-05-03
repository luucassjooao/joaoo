import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "essays",
};

export default async function SubmitEssays() {
  return (
      <div className="ml-15">
        <h1 className="mb-1 text-2xl font-bold">pensamentos/estudos</h1>
        <h3 className="mb-4 text-ms">Esses textos, não necessariamente são serios, podem ser pensamentos que quero escrever<br />ou coisas que estou estudando/já estudei</h3>
        {lorem.map((e, index) => (
          <div key={index} className={"mb-3"}>
            <li><Link href={`/essays/${e}`} className='text-blue-700 underline hover:text-purple-900' >{`${new Date().toDateString()}`} - {e}</Link></li> 
          </div>
        ))}
      </div>
  )
}

const lorem = [
  'fodas e fmais faslfj ', 
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maiores rerum temporibus? Modi dolorum libero laudantium laboriosam, tempora similique dolor dolores ab consequuntur ",
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maiores rerum temporibus? Modi dolorum libero laudantium laboriosam, tempora similique dolor dolores ab consequuntur quibusdam, vitae harum ducimus fugiat optio error!fadsklnfaldsjfjça afhdjkasdjk hfas hafdjkask d'
];