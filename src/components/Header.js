import React from "react";

const navItems = [
  {
    title: "Experiencia",
    label: "experiencia",
    url: "/#experiencia",
  },
  {
    title: "Proyectos",
    label: "proyectos",
    url: "/#proyectos",
  },
  {
    title: "Sobre mí",
    label: "sobre-mi",
    url: "/#sobre-mi",
  },
  {
    title: "Contacto",
    label: "contacto",
    url: "mailto:cesar13289@hotmail.com",
  },
];

const Header = () => {
  return (
    <header className="w-full flex justify-center pt-5">
      <nav className="h-10 bg-zinc-600  max-w-[550px] w-full rounded-full fixed z-50">
        <ul className="flex justify-center gap-10 pt-2">
          {navItems.map((navItem) => (
            <li
              key={navItem.title}
              className="text-gray-100 hover:text-yellow-400 hover:transition-all hover:ease-in"
            >
              <a href={navItem.url}>{navItem.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
