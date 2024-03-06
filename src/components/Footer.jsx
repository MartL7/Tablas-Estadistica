import { GithubIcon } from "./icons/Github"
import { InstagramIcon } from "./icons/Instagram"

export function Footer() {
    return (
        <>
            <footer className="mt-20 flex w-full flex-col place-items-center border-t-2 border-primary pb-20 pt-6 md:flex-row md:justify-between">

                <span className="text-center text-white/50">
                    Tablas de Estadistica by Geovas <span aria-hidden="true" className="hidden md:inline"> | </span>
                        <br aria-hidden="true" className="block md:hidden" /> Casi Todos los derechos reservados.
                </span>

                <span aria-hidden="true" className="mt-6 w-full border-t-2 border-primary pt-6 md:hidden"> </span>
                <nav>
                    <ul className="flex flex-row items-center gap-x-6" aria-label="redes sociales y botón para alternar tema">
                        <li>
                            <a target="_blank" rel="noopener" href="https://github.com/MartL7"
                                className="inline-block any-hover:scale-125 any-hover:opacity-70 motion-safe:transition hover:scale-110">
                                 <GithubIcon width={30} height={30} />
                            </a>
                        </li>

                        <li>
                            <a target="_blank" rel="noopener" href="https://instagram.com/geovx_lg"
                                className="inline-block any-hover:scale-125 any-hover:opacity-70 motion-safe:transition hover:scale-110">
                                <InstagramIcon width={30} height={30} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}