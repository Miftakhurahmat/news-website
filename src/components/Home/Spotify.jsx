import React from "react";

const Spotify = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl border-b-8 w-max border-red-500 uppercase my-5">
        <a href="https://open.spotify.com/show/3PSxdzFHQz77vVRZfxBRdS?si=bb59a5980dfd46d3">
          Podcast Nol SKS →
        </a>
      </h2>
      <hr />
      <iframe
        // style="border-radius:12px"
        src="https://open.spotify.com/embed/episode/2eJDfA0WdiECYM9dTN8hqD?utm_source=generator"
        width="100%"
        height="280"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Spotify;
