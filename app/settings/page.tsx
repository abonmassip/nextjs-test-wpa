"use client";

import { useState } from "react";

export default function Settings() {
  const [privacy, setPrivacy] = useState(false);
  const [usaUnits, setUsaUnits] = useState(false);
  const [customAds, setCustomAds] = useState(true);

  return (
    <div>
      <div role="alert" className="alert w-4/5 flex mt-10 m-auto">
        <span>Privacitat del perfil:</span>
        <div className="ml-auto flex gap-4">
          <button
            className={`btn btn-sm ${!privacy && "btn-primary"}`}
            onClick={() => setPrivacy(false)}
          >
            Public
          </button>
          <button
            className={`btn btn-sm ${privacy && "btn-primary"}`}
            onClick={() => setPrivacy(true)}
          >
            Privat
          </button>
        </div>
      </div>
      <div role="alert" className="alert w-4/5 flex mt-10 m-auto">
        <span>Unitats de pès:</span>
        <div className="ml-auto  flex gap-4">
          <button
            className={`btn btn-sm ${!usaUnits && "btn-primary"}`}
            onClick={() => setUsaUnits(false)}
          >
            Kg
          </button>
          <button
            className={`btn btn-sm ${usaUnits && "btn-primary"}`}
            onClick={() => setUsaUnits(true)}
          >
            Lbs
          </button>
        </div>
      </div>
      <div role="alert" className="alert w-4/5 flex mt-10 m-auto">
        <span>Dones permís per rebre anuncis personalitzats?</span>
        <div className="ml-auto  flex gap-4">
          <button
            className={`btn btn-sm ${!customAds && "btn-primary"}`}
            onClick={() => setCustomAds(false)}
          >
            No
          </button>
          <button
            className={`btn btn-sm ${customAds && "btn-primary"}`}
            onClick={() => setCustomAds(true)}
          >
            Si
          </button>
        </div>
      </div>
      <div
        role="alert"
        className="alert alert-error w-4/5 flex mt-10 hover:bg-red-600 m-auto cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Esborrar la compta. (No es pot desfer!)</span>
      </div>
    </div>
  );
}
