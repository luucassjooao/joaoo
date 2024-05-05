import { getUniqueEssay } from "@/api";
import { Metadata } from "next";

interface IProps {
  params: {
    essayName: string;
  }
}

function formatTitle(essayName: string): string {
  return essayName
    .replace(/%20/g, ' ')
      .replace(/%23/g, '#')
        .replace(/%26/g, '&')
}

export function generateMetadata({ params }: IProps): Metadata {
  const title = formatTitle(params.essayName)

  return {
    title
  };
}

export default async function Essay({ params }: IProps) {
  const essay = await getUniqueEssay(formatTitle(params.essayName));

  return (
    <div style={{ overflowWrap: 'break-word', width: 700}} >
      <h1 className="text-xl text-green-700 font-bold mb-4">{params.essayName}</h1>
      <h1 className="text-base text-green-700 font-bold mb-4">{`${new Date().toDateString()}`}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: essay,
        }}
      />
    </div>
  )
}