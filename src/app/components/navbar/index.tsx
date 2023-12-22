"use client";

import config from "@/lib/Config.json";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const Path = usePathname();

    return (
        <div className="navbar-container">
            <div className="navbar">
                <img src="https://cdn.jobgamesjg.xyz/files/sAy9SgsTEW.png" />

                <div className="navbar-routes">
                    {config.header.map((data, key) => (
                        <a
                            className="route button"
                            key={key}
                            section-data={data.item}
                            href={`#${data.item}`}
                            onClick={
                                Path == ""
                                    ? () => ""
                                    : () => (location.href = `/#${data.item}`)
                            }
                        >
                            {data.item.charAt(0).toUpperCase() +
                                data.item.slice(1)}{" "}
                        </a>
                    ))}
                </div>
                <div className="navbar-miscellaneous">
                    <p>
                        <i>{config.weerbericht[0].temp}</i>
                    </p>
                    <p>15/12/2024</p>
                    <p>
                        <i className="fa-regular fa-user" /> Inloggen
                    </p>
                </div>
            </div>
        </div>
    );
};
