import escultura from '../img/escultura.png';

function Banner() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${escultura})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">“I never paint dreams or nightmares. I paint my own reality.”</h1>
          <p className="text-lg">— Frida Kahlo</p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
