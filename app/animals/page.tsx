import CreateAnimal from "./CreateAnimal";
import PocketBase from "pocketbase";

import styles from "./Animals.module.css";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

const animalEmojis: { [index: string]: any } = {
  dog: "🐶",
  cat: "🐱",
  rabbit: "🐰",
};

async function getAnimals() {
  // const res = await fetch(
  //   "http://127.0.0.1:8090/api/collections/animals/records?page=1&perPage=10",
  //   {
  //     cache: "no-store",
  //   }
  // );
  // const data = await res.json();
  // return data?.items as any[];

  const url = "https://animalets.pockethost.io/";
  const client = new PocketBase(url);
  const records = await client.collection("animals").getFullList({
    sort: "-created",
  });
  return records;
}

export default async function AnimalsPage() {
  const animals = await getAnimals();
  const animalsByDateDesc = [...animals].sort(
    (a, b) => new Date(b.created).valueOf() - new Date(a.created).valueOf()
  );

  return (
    <div>
      <CreateAnimal />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {animalsByDateDesc?.map((animal) => {
          return <Animal key={animal.id} animal={animal} />;
        })}
      </div>
    </div>
  );
}

function Animal({ animal }: any) {
  const { type, name, age, personality } = animal || {};
  return (
    <div className="mx-4 flex justify-center items-center w-96 bg-base-100 shadow-xl mb-4">
      <div className="p-5 items-center text-center">
        <div className="text-6xl">{animalEmojis[animal.type]}</div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Edat: {age}</p>
        <p>Personalitat: {personality}</p>
      </div>
    </div>
  );
}
