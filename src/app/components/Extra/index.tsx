import config from "@/lib/Config.json";
import { Item } from "../newsitem/items";

export const Extra = () => {
    return (
        <section id="Entertainment" className="Extra-container">
            <h1>Entertainment</h1>
            <div>
                <img src="https://www.schoolmaterialen.nl/public/data/image/article/5485/39171/large/stripboek-kik-goed-gek-avi-e3.jpg" />
                <Item {...config.NewsItem[5]} />
            </div>
            <img src="https://www.derolfgroep.nl/wp-content/uploads/2020/11/Strip-uit-Joep-wat-een-mop-AVI-Start-800x271.jpg" />
        </section>
    );
};
