import PocketBase from "pocketbase";
import AnimalCard from "../AnimalCard";

async function getAnimal(animalId: string) {
  const pb = new PocketBase("https://animalets.pockethost.io/");
  const data = await pb.collection("animals").getOne(animalId);
  return data;
}

export default async function AnimalPage({ params }: any) {
  const animal = await getAnimal(params.id);

  return (
    <div>
      <AnimalCard animal={animal} />
    </div>
  );
}
