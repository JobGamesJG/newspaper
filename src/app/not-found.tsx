"use client";

import Script from "next/script";
import { useRouter } from "next/navigation";

export default function Custom404() {
    const router = useRouter();

    return (
        <>
            <Script src="sectionManager.js" />
            <section id="nf" className="nf-container">
                <div>
                    <img src="https://cdn.jobgamesjg.xyz/files/sAy9SgsTEW.png" />
                    <div>
                        <h1>Probleem tijdens het laden van de pagina</h1>
                        <p>
                            De pagina die u probeert te zoeken kon niet worden
                            gevonden.
                        </p>
                    </div>
                </div>
                <p onClick={() => router.push("/")}>
                    <i className="fa-solid fa-house" />
                    Keer terug naar de voorpagina
                </p>

                <p onClick={() => router.back()}>
                    <i className="fa-solid fa-arrow-right" />
                    Keer terug naar de vorige pagina
                </p>
            </section>
        </>
    );
}
