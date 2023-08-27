import useSWR from "swr";
import { fetchNewsHeadlines } from "../../fetchNews";
import { PulseLoader } from "react-spinners";

export const NewsHeadlines = ({ country, category, delay }) => {
  const props = { country, category, delay };
  const config = { suspense: true };
  const { data, error } = useSWR(props, fetchNewsHeadlines, config);

  if (error) {
    return (
      <>
        <h3 style={{ color: "#d9d9d9" }}>Error: {error.message}</h3>
        <p>{error.stack}</p>
      </>
    );
  }

  if (!data) {
    return <PulseLoader color="#e0e1dd" size={12} speedMultiplier={0.7} />;
  }

  const news = data.read();
  console.log(news);

  if (news.status === "error") {
    return (
      <>
        <h3 style={{ color: "#d9d9d9" }}>Error: {news.code}</h3>
        <p>{news.message}</p>
      </>
    );
  }
  return (
    <>
      {news?.articles.map((item, index) => (
        <div
          style={{
            border: "1px solid #D9D9D9",
            padding: "5px 15px",
            borderRadius: "24px",
            marginBottom: "35px",
            backgroundColor: "#2e2e2e",
            width: "50%",
          }}
        >
          <h3
            style={{
              textAlign: "center",
            }}
          >
            {item.title}
          </h3>
          <p>{item.description}</p>
          <img
            src={item.urlToImage}
            alt=""
            style={{
              width: "100%",
              borderRadius: "24px",
            }}
          />
          <p style={{ fontStyle: "oblique" }}>Author: {item.author}</p>
          <span
            style={{
              fontStyle: "oblique",
            }}
          >
            Published at: {item.publishedAt.slice(0, 10)}
          </span>
          <p className="parrafLink">
            More Info{" "}
            <a href={item.url} target="_blank" rel="noreferrer noopener">
              here...
            </a>
          </p>
        </div>
      ))}
    </>
  );
};
