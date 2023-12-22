import config from "@/lib/Config.json";
import { Item } from "./items";

export const NewsItem = () => {
    return (
        <section id="Nieuws" className="NewsItem-container">
            <Item {...config.NewsItem[0]} />
            <div className="newsitem-second">
                <div>
                    <Item {...config.NewsItem[1]} />
                    <Item {...config.NewsItem[2]} />
                </div>
                <div>
                    <Item {...config.NewsItem[3]} />
                    <Item {...config.NewsItem[4]} />
                </div>
                <div>
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
            </div>
        </section>
    );
};
