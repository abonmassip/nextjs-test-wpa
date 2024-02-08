import PocketBase from "pocketbase";
import Link from "next/link";

import CreateAnimal from "./CreateAnimal";
import AnimalCard from "./AnimalCard";

import styles from "./Animals.module.css";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

async function getAnimals() {
  // const res = await fetch(
  //   "http://127.0.0.1:8090/api/collections/animals/records?page=1&perPage=10",
  //   {
  //     cache: "no-store",
  //   }
  // );
  // const data = await res.json();
  // return data?.items as any[];

  const pb = new PocketBase("https://animalets.pockethost.io/");
  const data = await pb.collection("animals").getFullList({
    sort: "-created",
  });
  return data;
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
          return (
            <Link key={animal.id} href={`/animals/${animal.id}`}>
              <AnimalCard animal={animal} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
