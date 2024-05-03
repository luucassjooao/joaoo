import { Metadata } from "next";

interface IProps {
  params: {
    essayName: string;
  }
}

export function generateMetadata({ params }: IProps): Metadata {
  const title = params.essayName
    .replace(/%20/g, ' ')
      .replace(/%23/g, '#')
        .replace(/%26/g, '&');

  return {
    title
  };
}

export default async function Essay({ params }: IProps) {
  return (
    <div style={{ overflowWrap: 'break-word', width: 700}} >
      <h1 className="text-xl text-green-700 font-bold mb-4">{params.essayName}</h1>
      <h1 className="text-base text-green-700 font-bold mb-4">{`${new Date().toDateString()}`}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam mollitia at, ex facere vel pariatur quis nobis soluta! Voluptatibus earum voluptate natus sequi ipsum at assumenda iste doloribus ipsam! Deleniti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, optio sit dicta facilis aperiam quia est? Cupiditate ratione, tempore alias, perferendis commodi praesentium fugiat minus facilis recusandae doloribus pariatur possimus.
      </p>
    </div>
  )
}