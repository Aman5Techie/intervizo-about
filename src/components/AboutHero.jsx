import code from "../assets/code.jpg"
function AboutHero() {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90">
        <img
          src={code}
          alt="Virtual Meeting"
          className="w-full h-full object-cover mix-blend-overlay blur-sm"
        />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6 text-center">
          Collaborative Interview Platform
        </h1>
        <p className="text-xl text-center max-w-2xl">
          Simplifying technical interviews by integrating video calls, live coding, and chat into a single,
          seamless platform. Experience the future of technical interviews.
        </p>
      </div>
    </div>
  );
}

export default AboutHero;