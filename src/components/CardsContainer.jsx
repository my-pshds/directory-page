import Card from "./Card";
import "./CardsContainer.css";

import data from "../data/tools.yml"

export default function CardsContainer(props) {
  const { filter } = props;

  return <section>
    <ul role="list" className="link-card-grid">
      {data.tools
        .filter(item => {
          if (filter === "all" || filter === item.category) {
            return item;
          }
        })
        .flatMap(item => item.content)
        .sort((a, b) => {
          const isChinese = text => /[\u4e00-\u9fa5]/.test(text.charAt(0));
        
          if (!isChinese(a.title) && isChinese(b.title)) {
            // 如果 a 是英文，而 b 是中文，a 排在前面
            return -1;
          }
          if (isChinese(a.title) && !isChinese(b.title)) {
            // 如果 a 是中文，而 b 是英文，a 排在后面
            return 1;
          }
        
          // 否则都为中文或都为英文时，按拼音顺序排序
          return a.title.localeCompare(b.title, 'zh-Hans-CN', { sensitivity: 'variant' });
        })
        // .sort((a, b) => a.title.localeCompare(b.title, 'zh-Hans-CN', { sensitivity: 'variant' }))
        // .sort((a, b) => {
        //   return a.title < b.title ? -1 : 1;
        // })
        .map(({url, title, body, tag}, i) => {
          return <Card
            key={i}
            href={url}
            title={title}
            body={body}
            tag={tag}
          />
        })
      }
    </ul>
  </section>
}