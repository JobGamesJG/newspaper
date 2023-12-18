import config from "@/lib/Config.json";
import { Item } from "./items";

export const NewsItem = () => {
    return (
        <section id="Nieuws" className="NewsItem-container">
            <div className="newsitem-first">
                <Item {...config.NewsItem[0]} />

                <div className="newsitems-laaste">
                    <h2>Net binnen</h2>
                    <div>
                        {config.laasteNews.map((data, key) => (
                            <div className="newsitem-laaste" key={key}>
                                <p>{data.time}</p>
                                <h1>{data.title}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="newsitem-second">
                <Item {...config.NewsItem[1]} />
                <Item {...config.NewsItem[2]} />
                <Item {...config.NewsItem[3]} />
                <Item {...config.NewsItem[4]} />
            </div>
        </section>
    );
};
