"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";

export default function CreateAnimal() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [personality, setPersonality] = useState("");
  const [type, setType] = useState("dog");

  const router = useRouter();

  const addAnimal = async (e: React.FormEvent) => {
    e.preventDefault();

    const client = new PocketBase("https://animalets.pockethost.io/");
    const record = await client
      .collection("animals")
      .create({ name, age, personality, type });

    // await fetch("http://127.0.0.1:8090/api/collections/animals/records/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name,
    //     age,
    //     personality,
    //     type,
    //   }),
    // });

    setName("");
    setAge("");
    setPersonality("");

    router.refresh();
  };

  return (
    <form
      onSubmit={addAnimal}
      className="flex flex-col gap-2 max-w-80 mx-auto text-center mb-10"
    >
      <h3>Afegeix una nova mascota:</h3>
      <select
        className="select select-bordered w-full max-w-xs"
        name="type"
        onChange={(e) => setType(e.target.value)}
        defaultValue={"dog"}
      >
        <option value="dog">🐶 Gos</option>
        <option value="cat">🐱 Gat</option>
        <option value="rabbit">🐰 Conill</option>
      </select>
      <input
        className="input input-bordered"
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input input-bordered"
        type="number"
        placeholder="Edat"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        className="input input-bordered"
        type="text"
        placeholder="Personalitat"
        value={personality}
        onChange={(e) => setPersonality(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Afegeix mascota
      </button>
    </form>
  );
}
