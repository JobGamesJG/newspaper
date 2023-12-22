"use client";

import Script from "next/script";
import config from "@/lib/Config.json";

export default function Home() {
    var ConfigId = parseFloat(location.pathname.slice(10));

    return (
        <>
            <Script src="sectionManager.js" />
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
        </>
    );
}
