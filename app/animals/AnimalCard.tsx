const animalEmojis: { [index: string]: any } = {
  dog: "🐶",
  cat: "🐱",
  rabbit: "🐰",
};

export default function AnimalCard({ animal }: any) {
  const { type, name, age, personality } = animal || {};
  return (
    <div className="mx-auto md:mx-4 flex justify-center items-center w-96 bg-base-100 shadow-xl mb-4 hover:bg-primary transition ">
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
