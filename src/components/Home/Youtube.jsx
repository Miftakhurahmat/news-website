import React from "react";

const Youtube = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl border-b-8 w-max border-red-500 uppercase mb-5">
        <a href="https://www.youtube.com/@LPMUNSIKA">LPM Channel →</a>
      </h2>
      <hr />
      <iframe
        className="rounded-lg"
        width="100%"
        height="280"
        src="https://www.youtube.com/embed/DdS0gcbsH6M?si=qPCl3SHz8Ki3UIAT"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Youtube;
