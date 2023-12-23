import Script from "next/script";

import { Extra, NewsItem, WeerBericht } from "@/app/components";
import { Item } from "./components/newsitem/items";

import config from "@/lib/Config.json";

export default function Home() {
    return (
        <>
            <Script src="sectionManager.js" />
            <section id="landing" className="landing-container">
                <NewsItem />
                <div className="advertentie-items">
                    <Item {...config.NewsItem[5]} />
                    <Item {...config.NewsItem[6]} />
                </div>
                <Extra />
                <WeerBericht />
            </section>
            <div className="footer-container">
                <div>
                    <img src="https://cdn.jobgamesjg.xyz/files/1jLceVdiQx.png" />
                    <p>©2024 DPG Media B.V. – alle rechten voorbehouden <i className="fa-solid fa-house"></i></p>
                </div>
            </div>
        </>
    );
}
