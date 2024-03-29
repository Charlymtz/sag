import dali from "../img/dali.png"
import lobo from "../img/lobo.png"
import monroe from "../img/monroe.png"

function Section() {
    return (
        <section className="bg-black text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                <h2 className="text-xl font-bold text-white sm:text-3xl">The new era of art</h2>
                    <p className="mx-auto mt-4 max-w-md text-gray-500">
                    Art cannot be modern. Art is primordially eternal.
                    </p>
                    <p className="mx-auto mt-4 max-w-md text-gray-500">
                    -Egon Schiele
                    </p>
                </header>

                <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <li>
                        <a href="#" className="group relative block">
                            <img
                                src={dali}
                                alt=""
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium">Dali</h3>

                                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="group relative block">
                            <img
                                src={lobo}
                                alt=""
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium">Ancient</h3>

                                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>

                    <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <a href="#" className="group relative block">
                            <img
                                src={monroe}
                                alt=""
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium">Marilyn Monroe Neon Portrait</h3>

                                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Section;
