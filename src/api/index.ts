'use server';

import { sql } from '@vercel/postgres';

interface ICreateEssay {
  title: string;
  essay_text: string;
  secret_key?: string;
}

export type TEssay = ICreateEssay & {
  id: number;
  created_at: Date;
  updated_at: Date;
  secret_key?: string;
}

export async function createEssay({secret_key, title, essay_text}: ICreateEssay): Promise<string> {
  try {
    const { rows } = await sql`SELECT * FROM secret WHERE secret_key = ${secret_key} LIMIT 1;`;
    if (!rows[0]) {
      return 'secret not found'
    }

    await sql`INSERT INTO essays (title, essay_text) VALUES(${title}, ${essay_text});`;

    return 'essay created'
  } catch (err: any) {
    return err.message
  }
}

export async function getEssays() {
  try {
    const {rows} = await sql`SELECT * FROM essays;`;
    return rows;
  } catch {
    return;
  }
}

export async function getUniqueEssay(title: string) {
  try {
    const {rows} = await sql`SELECT * FROM essays WHERE title = ${title} LIMIT 1;`;
    return rows[0].essay_text;
  }catch {
    return;
  }
}