import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [navigations, setNavigations] = useState([]);

  useEffect(() => {
    const getNavigations = () => {
      const navigationsList = [
        { name: "Berita", path: "/berita" },
        { name: "Buletin", path: "/buletin" },
        { name: "Karya Mahasiswa", path: "/karya-mahasiswa" },
        { name: "Gaya Mahasiswa", path: "/gaya-mahasiswa" },
        { name: "Editorial", path: "/editorial" },
      ];
      setNavigations(navigationsList);
    };

    getNavigations();
  }, []);

  return (
    <div>
      <ul className="flex flex-row gap-5 ml-32">
        {navigations.map((navigation, i) => (
          <li key={i}>
            <a className="text-lg font-semibold" href={navigation.path}>
              {navigation.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
