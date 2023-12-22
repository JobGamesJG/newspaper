import config from "@/lib/Config.json";

export default function artikelA() {
    var ConfigId = parseFloat(location.pathname.slice(10));

    return (
        <section id="artikel" className="artikel-container">
            <img src={config.NewsItem[ConfigId - 1].image} />
            <div className="artikel-info">
                <div>
                    <p>{config.NewsItem[ConfigId - 1].author}</p>
                    {"・"}
                    <p>{config.NewsItem[ConfigId - 1].datum}</p>
                </div>
                <h1>{config.NewsItem[ConfigId - 1].title}</h1>
                {config.NewsItem[ConfigId - 1].text.map((data, key) => (
                    <p key={key}>{data}</p>
                ))}
            </div>
        </section>
    );
}
