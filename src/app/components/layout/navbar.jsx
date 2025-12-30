export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <h1 className="text-xl font-bold">
        <span className="text-lavender">Fier</span>Daus
      </h1>

      <ul className="hidden md:flex gap-8 text-gray-300">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Project</li>
        <li className="hover:text-white cursor-pointer">Blog</li>
      </ul>

      <button className="border border-lavender px-5 py-2 rounded-lg text-lavender hover:bg-lavender hover:text-black transition">
        Contact Me
      </button>
    </nav>
  );
}
