"use client";

import { usePathname } from "next/navigation";
import config from "@/lib/Config.json";

const ArtikelA: React.FC = () => {
    const pathname = usePathname();
    var ConfigId = parseFloat(pathname.slice(10));

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
};

export default ArtikelA;
