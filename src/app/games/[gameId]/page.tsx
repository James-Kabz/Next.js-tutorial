import { Metadata } from "next"

type Props = {
  params : {
    gameId : string;
  };
};

export const generateMetadata = async({params} : Props) : Promise <Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`game ${params.gameId}`)
    }, 100);
  });
  return {
    title : `Game ${title}`
  }
}

export default function GameDetails({ params ,} : Props)
{
  return <h1>Details about Product {params.gameId}</h1>
}
