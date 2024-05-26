export default function Hero() {
  // TODO: Eliminar el video mp4
  return (
    <section className="relative">
      <video
        src="/home/hero-video.webm"
        preload="auto"
        loop
        autoPlay
        muted
        className="w-full object-cover min-h-[30rem] max-h-[70vh]"
      ></video>
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <div className="flex flex-col justify-end pb-6 pl-6 md:pl-6 md:pb-10 h-full text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-4">
            Prepárate para el calor
          </h1>
          <p className="text-lg md:text-xl text-pretty">
            Diseños para activar tu estilo este verano
          </p>
          <div>
            <button className="bg-white text-black font-bold py-2 px-4 mt-4 rounded">
              Ver colección
            </button>
            <button className="bg-transparent text-white font-bold py-2 px-4 mt-4">
              Contáctame
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
