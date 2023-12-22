export interface WeerList {
    place: string;
    day: string;
    time: string;
    temp: string;
    bodytemp: string;
    neerslagprocent: string;
    neerslag: string;
    wind: string;
    icon: string;
    rotation: number;
}

type Props = WeerList;

export const Item: React.FC<Props> = (data) => {
    return (
        <div className="weatherItem-container">
            <div>
                <h3>
                    {data.day.slice(0, 2)} <i className={data.icon}></i>
                </h3>
                <p>{data.time}</p>
            </div>
            <div>
                <p>{data.temp}</p>
                <p>{data.bodytemp}</p>
            </div>
            <div>
                <p>
                    <i className="fa-solid fa-droplet"></i>{" "}
                    {data.neerslagprocent}
                </p>
                <p>{data.neerslag}</p>
            </div>
            <div>
                <a
                    className="weatherItem-wind"
                    style={{ rotate: `${-45 + data.rotation}deg` }}
                >
                    <i className="fa-solid fa-location-arrow"></i>
                </a>
                <p>{data.wind}</p>
            </div>
        </div>
    );
};
