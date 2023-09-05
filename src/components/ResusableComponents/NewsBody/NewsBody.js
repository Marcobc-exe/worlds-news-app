import { areAllValuesNull } from "../../../utils/allValuesNull";

export const NewsBody = ({ newsData }) => {
  return (
    <div className="newsBody">
      {newsData?.articles.map((item, index) => {
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
    </div>
  );
};
