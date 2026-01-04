import Image from "next/image";

export default function Navbar() {
  const navItems = [
    {
      href: "#home",
      label: "Home",
    },
    {
      href: "#projects",
      label: "Projects",
    },
    {
      href: "#experience",
      label: "Experience",
    },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between px-24 py-6">
      <Image
        src="/img/logo + teks.png"
        alt="Logo"
        width={100}
        height={40}
        className="object-contain"
      />

      <div className=" flex">
        <ul className="flex gap-6 items-center pr-10">
          {navItems.map((item) => (
            <li key={item.label} className="list-none">
              <a
                href={item.href}
                className="
          relative block
    px-5 py-2
    text-sm font-semibold uppercase
    text-white
    transition-colors duration-300
    z-10

    before:content-['']
    before:absolute before:inset-0
    before:border-t-2 before:border-b-2 before:border-lavender
    before:scale-y-[2]
    before:opacity-0
    before:transition-all before:duration-300

    after:content-['']
    after:absolute after:top-[2px] after:left-0
    after:w-full after:h-full
    after:bg-[#7f3cf0]
    after:scale-x-0 after:scale-y-0
    after:origin-center
    after:opacity-0
    after:transition-all after:duration-300
    after:-z-10

    hover:text-white
    hover:before:scale-y-100 hover:before:opacity-100
    hover:after:scale-x-100 hover:after:scale-y-100 hover:after:opacity-100
  "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="
    relative overflow-hidden rounded-full
    bg-gradient-to-r from-lavender to-lavender-teks
    px-7 py-3 font-semibold text-white

    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:shadow-[0_10px_30px_rgba(127,60,240,0.45)]
  "
        >
          <span
            className="
      absolute inset-0
      bg-gradient-to-r from-lavender-teks to-lavender
      opacity-0
      transition-opacity duration-300
      hover:opacity-100
    "
          ></span>

          <span className="relative z-10">Contact Me</span>
        </button>
      </div>
    </nav>
  );
}
