import config from "@/lib/Config.json";
import { Item } from "./item";

export const WeerBericht = () => {
    return (
        <section id="Weer" className="WeerBericht-container">
            <h1>Locale Weerbericht</h1>
            <div className="WeerBericht-current">
                <div>
                    <p>
                        {config.weerbericht[0].day},{" "}
                        {config.weerbericht[0].time}
                    </p>
                    <div
                        style={{
                            backgroundImage: `url(https://cdn.jobgamesjg.xyz/files/CV4LRm8nxR.png)`,
                        }}
                    />
                </div>
                <div>
                    <h1>Haarlem, Noord-Holland</h1>
                    <div className="WeerBericht-info">
                        <div>
                            <p>Temperatuur:</p>{" "}
                            <p>{config.weerbericht[0].temp}</p>
                        </div>
                        <div>
                            <p>LichaamsTemperatuur:</p>
                            <p>{config.weerbericht[0].bodytemp}</p>
                        </div>
                        <div>
                            <p>Neerslag in procent:</p>
                            <p>{config.weerbericht[0].neerslagprocent}</p>
                        </div>
                        <div>
                            <p>Neerslag in milimeter</p>
                            <p>{config.weerbericht[0].neerslag}</p>
                        </div>
                        <div>
                            <p>Windsnelheid:</p>
                            <p>{config.weerbericht[0].wind}</p>
                        </div>
                        <div>
                            <p>Wind richting:</p>
                            <p className="weatherItem-wind">
                                <i
                                    className="fa-solid fa-location-arrow"
                                    style={{
                                        rotate: `${
                                            -45 + config.weerbericht[0].rotation
                                        }deg`,
                                    }}
                                />
                            </p>
                        </div>
                    </div>
                    <div className="WeerBericht-messages">
                        <div>
                            <a>
                                <i className="fa-solid fa-triangle-exclamation" />
                            </a>
                            <p>Er zijn geen Waarschuwingen!</p>
                        </div>
                        <div>
                            <a>
                                <i className="fa-solid fa-umbrella" />
                            </a>
                            <p>Kans op regen!</p>
                        </div>
                        <div>
                            <a>
                                <i className="fa-solid fa-bolt-lightning" />
                            </a>
                            <p>Er is geen bliksem dichtbij!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="WeerBericht-items">
                {config.weerbericht.map((data, key) => (
                    <Item {...data} key={key} />
                ))}
            </div>
        </section>
    );
};
