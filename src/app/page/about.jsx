export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 gap-16">
      {/* Left Content */}
      <div className="max-w-2xl">
        <p className="text-gray-400 mb-4">Hello</p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          I am <span className=" text-lavender">Ahmad Putra Firdaus</span>
        </h1>

        <p className="text-gray-400 mt-3 mb-8">UI / UX Design Enthusiast</p>

        <div className="h-[2px] w-16 bg-lavender mb-6" />

        <p className="text-gray-400 leading-relaxed mb-10">
          Im a person who has a keen interest in the design layout. I think
          presenting an attractive design is a matter of concern in developing a
          branding of products. To create a good design, I focus on proper
          composition and visual decoration details in order to make it more
          professional. For the time being, Im developing the skill for
          acquiring the UI/UX design for dynamic application and web
          development.
        </p>

        <button className="flex items-center gap-2 bg-lavender text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition">
          📄 Download CV
        </button>
      </div>

      <div className="relative">

        <img
          src="img/Picture.png"
          alt="Profile"
          className="relative w-[260px] md:w-[320px] rounded-xl"
        />


      </div>
    </section>
  );
}
