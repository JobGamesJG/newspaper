export interface NewsList {
    type: string;
    title: string;
    image: string;
    author: string;
    datum: string;
    style: boolean;
}

type Props = NewsList;

export const Item: React.FC<Props> = (data) => {
    return (
        <>
            {data.style == true ? (
                <div
                    className={`NewsItem ${data.style ? "first" : "second"}`}
                    style={{ backgroundImage: `url(${data.image})` }}
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
                </div>
            ) : (
                <div className={`NewsItem ${data.style ? "first" : "second"}`}>
                    <div style={{ backgroundImage: `url(${data.image})` }} />
                    <div
                        className={`NewsItem-text ${
                            data.style ? "first" : "second"
                        }`}
                    >
                        <p>{data.type}</p>
                        <h1>{data.title}</h1>
                    </div>
                </div>
            )}
        </>
    );
};
