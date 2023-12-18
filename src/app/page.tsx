import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";

import { Extra, NewsItem, WeerBericht } from "@/app/components";

export default function Home() {
    return (
        <>
            <Script src="sectionManager.js" />
            <section id="landing" className="landing-container">
                <NewsItem />
                <Extra />
                <WeerBericht />
            </section>
        </>
    );
}
