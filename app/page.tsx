import Link from "next/link";

export default function Home() {
  return (
    <div
      className="hero min-h-screen bg-base-200 absolute top-0 left-0"
      style={{
        backgroundImage:
          "url(https://wwf.ca/wp-content/uploads/2020/02/Medium_WW267501-e1584652601803.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Benvingut a Animalia!</h1>
          <p className="py-6">
            No hi ha res més important que fer una llista de les teves mascotes,
            i la millor manera és amb Animalia! La teva app preferida de fer
            llistes de mascotes.
          </p>
          <Link href="/animals">
            <button className="btn btn-primary">
              Entra!
              <span className="text-xs font-normal">
                (a fer una llista de mascotes)
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
