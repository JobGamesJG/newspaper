export interface NewsList {
    type: string;
    title: string;
    image: string;
    author: string;
    datum: string;
    style: boolean;
    num: string;
}

type Props = NewsList;

export const Item: React.FC<Props> = (data) => {
    return (
        <>
            {data.style == true ? (
                <a
                    className={`NewsItem ${data.style ? "first" : "second"}`}
                    style={{ backgroundImage: `url(${data.image})` }}
                    href={`/artikels/${data.num}`}
                >
                    <div
                        className={`NewsItem-text ${
                            data.style ? "first" : "second"
                        }`}
                    >
                        <div className="NewsItem-type type">
                            <p>{data.type}</p>
                        </div>
                        <h1>{data.title}</h1>
                        <div className="NewsItem-info">
                            <p>{data.author}</p>
                            {"・"}
                            <p>{data.datum}</p>
                        </div>
                    </div>
                </a>
            ) : data.type != "Advertentie" ? (
                <a
                    className={`NewsItem ${data.style ? "first" : "second"}`}
                    href={`/artikels/${data.num}`}
                >
                    <div style={{ backgroundImage: `url(${data.image})` }} />
                    <div
                        className={`NewsItem-text ${
                            data.style ? "first" : "second"
                        }`}
                    >
                        <p>{data.type}</p>
                        <h1>{data.title}</h1>
                    </div>
                </a>
            ) : (
                <a
                    className="advertentie-container"
                    style={{ backgroundImage: `url(${data.image})` }}
                    href="/artikels/advertentie"
                >
                    <div
                        className={`advertentie-text ${
                            data.style ? "first" : "second"
                        }`}
                    >
                        <div className="advertentie-type">
                            <p>{data.datum}</p>
                        </div>
                        <h1>{data.title}</h1>
                    </div>
                </a>
            )}
        </>
    );
};
