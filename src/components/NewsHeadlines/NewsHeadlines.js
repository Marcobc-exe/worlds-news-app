import useSWR from "swr";
import { getHeadlines } from "../../api/headlinesStore/fetchNews";
import { PulseLoader } from "react-spinners";
import { areAllValuesNull } from "../../utils/allValuesNull";

export const NewsHeadlines = ({ country, delay }) => {
  const props = { country, delay };
  const config = { suspense: true };
  const { data, error } = useSWR(props, getHeadlines, config);

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

  console.log(data);
  // const news = data.read();
  // console.log(news);

  // if (news.status === "error") {
  //   return (
  //     <>
  //       <h3 style={{ color: "#d9d9d9" }}>Error: {news.code}</h3>
  //       <p>{news.message}</p>
  //     </>
  //   );
  // }
  return (
    <>
      {data?.articles.map((item, index) => {
        const anyNews = areAllValuesNull(item);
        return (
          <>
            {!anyNews && (
              <div
                key={index}
                style={{
                  border: "1px solid #D9D9D9",
                  padding: "5px 15px",
                  borderRadius: "24px",
                  marginBottom: "35px",
                  backgroundColor: "#2e2e2e",
                  width: "50%",
                }}
              >
                {item.title && (
                  <h3 style={{ textAlign: "center" }}>{item.title}</h3>
                )}
                {item.desctiption && <p>{item.description}</p>}
                {item.urlToImage ? (
                  <img
                    src={item.urlToImage}
                    alt=""
                    style={{
                      width: "100%",
                      borderRadius: "24px",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      backgroundColor: "grey",
                      borderRadius: "24px",
                      marginBottom: "20px",
                    }}
                  />
                )}
                {item.author && (
                  <p style={{ fontStyle: "oblique" }}>Author: {item.author}</p>
                )}
                {item.publishedAt && (
                  <span
                    style={{
                      fontStyle: "oblique",
                    }}
                  >
                    Published at: {item.publishedAt.slice(0, 10)}
                  </span>
                )}
                {item.url && (
                  <p className="parrafLink">
                    More Info{" "}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      here...
                    </a>
                  </p>
                )}
              </div>
            )}
          </>
        );
      })}
    </>
  );
};
