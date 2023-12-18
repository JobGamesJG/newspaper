"use client";

import config from "@/lib/Config.json";
import { getDate, getTime } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const Path = usePathname();

    return (
        <div className="navbar-container">
            <div className="navbar-first">
                <img src="https://cdn.jobgamesjg.xyz/files/1jLceVdiQx.png" />
                <div className="navbar-miscellaneous">
                    <p>
                        <i className={getTime()}></i>{" "}
                        <i>{config.weerbericht[0].temp}</i> Haarlem
                    </p>
                    <p>Zondag, 15 December 2024</p>
                    <p>Log-in / Sign-Up</p>
                </div>
            </div>
            <div className="navbar-second">
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
                            <div />
                        </a>
                    ))}
                </div>
                <a>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </a>
            </div>
        </div>
    );
};
