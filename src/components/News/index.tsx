import { useEffect, useState } from "react";
import { useStockContext } from "../../context";

const News = (): JSX.Element => {
  const { fetchNews, articles } = useStockContext();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchNews();
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  const loadingArray = new Array(6).fill(null);
  return (
    <div className="news">
      <h2 className="pb-1 bb-1">News</h2>
      {loading || !articles.length
        ? loadingArray.map((item, idx) => (
            <a
              key={idx}
              href="/"
              className="hover-bg-light bb-1 flex-between py-2 loading"
            >
              <div className="body-text">
                <h4>Loading</h4>
                <p className="py-2"></p>
              </div>
              <article />
            </a>
          ))
        : articles?.map(
            ({
              headline,
              source,
              url,
              summary,
            }: DashboardTypes.ArticleItem) => (
              <a
                key={headline}
                href={url}
                className="hover-bg-light bb-1 flex-between py-2"
              >
                <div className="body-text">
                  <h4 className="font-bold">{source}</h4>
                  <p className="py-2">{summary}</p>
                </div>
                <img
                  width="130px"
                  height="74px"
                  src="https://via.placeholder.com/150/92c952"
                  alt={headline}
                />
              </a>
            )
          )}
    </div>
  );
};

export default News;
