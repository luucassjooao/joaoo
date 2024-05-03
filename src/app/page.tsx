'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [repos, setRepos] = useState<{
    name: string;
    description: string;
    updated_at: Date;
    html_url: string;
  }[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    async function requestToGit() {
      try {
        const response = await fetch(`https://api.github.com/users/luucassjooao/repos`);
        
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Ocorreu um erro:', error);
      }
    }
    requestToGit();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className={`flex h-screen justify-around ${isMobile ? 'flex-row justify-start mt-10' : 'items-center'}`}>
      <div className="w-3/4 h-2/3">
        <div className="divRowContent">
          <div>
            <h2 style={{
              fontSize: '25px',
              fontWeight: 500,
            }} >joao</h2>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 400,
            }} >lucas</h3>
          </div>
          <Image src={'/happyguts.jpg'} alt='gif' width={120} height={120} />
        </div>
        <span className="block" >{"''i am grateful''"}</span>
        <span className="block">tentando se divertir criando uns trem legal ai</span>
        <small className="block" style={{ fontSize: '10px' }}>frontend é tipo: nossa essa paleta de cor está um escandalo 🤷‍♂️💅💄</small>
        <small className="block" style={{ fontSize: '10px' }}>backend é tipo: nem sempre 1 + 1 é igual a 2 🤓☝️</small>
        <div className="divRowContent text-blue-700 mt-2 mb-2" >
        {/* style={{ fontSize: '18px', color: 'blue', marginTop: '12px' }} */}
          <a href={"https://github.com/luucassjooao"} target="_blank" className="hover:text-purple-900" >github</a>
          <Link href={'/essays'} className="hover:text-purple-900" >pensamentos/estudos</Link>
        </div>
        <h2 style={{
            fontSize: '25px',
            fontWeight: 500,
        }}>projetos</h2>
          {repos.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).map((e) => (
            <div key={Math.random()} >
              <Link href={e.html_url} className="text-purple-900 hover:text-blue-700" >{e.name}</Link>
            </div>
          ))}
      </div>
    </div>
  );
}
