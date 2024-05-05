'use client';
import { createEssay } from '@/api';
import { useState } from 'react';

export default function CreateEssay() {
  const [secret_key, setSecretKey] = useState('');
  const [title, setTitle] = useState('');
  const [essay_text, setEssay] = useState('');
  const [createMessage, setCreateMessage] = useState('');

  async function onSubmit() {
    const create = await createEssay({secret_key, title, essay_text});
    setCreateMessage(create)
  }

  return (
    <div>
      <input placeholder="secret key" type="text" value={secret_key} onChange={(e) => setSecretKey(e.target.value)} className="border-2 border-black rounded-lg p-1 mb-2" />
      <input placeholder="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 block border-black rounded-lg p-1 mb-2" />
      <input placeholder='essay' type="text" className="border-2 block border-black rounded-lg p-1 mb-2" value={essay_text} onChange={(e) => setEssay(e.target.value)} />

      <button onClick={onSubmit} className='bg-purple-900 hover:bg-blue-700 text-white p-2 rounded-lg'>Submit</button>
      {<p className='mt-2 mb-4' >{createMessage}</p>}

      <div
        dangerouslySetInnerHTML={{
          __html: essay_text,
        }}
      />

    </div>
  )
}