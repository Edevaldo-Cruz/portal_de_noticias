import React from "react";
import SpecialCard from "../SpecialCard/Index";
import { useAPI } from "../../hooks/useAPI";
import { FaChevronRight } from "react-icons/fa";

function Technology() {
  const { itens: news } = useAPI(
    "top-headlines?country=br&category=technology&apiKey=9440f38accc54afdacaacd4d6c481ebe"
  );

  return (
    <>
      <div className="mt-4 lineNews">
        <h1>
          Tecnologia <FaChevronRight size={"25px"} />
        </h1>
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-3 divNews">
          {news.slice(1, 2).map((item) => (
            <SpecialCard
              key={item.url}
              url={item.url}
              img={item.urlToImage}
              title={item.title}
              description={
                item.description.length > 75
                  ? item.description.substring(0, 75) + "..."
                  : item.description
              }
              author={item.author}
            />
          ))}
        </div>
        <div className="col-3 divNews">
          {news.slice(2, 3).map((item) => (
            <SpecialCard
              key={item.url}
              url={item.url}
              img={item.urlToImage}
              title={item.title}
              description={
                item.description.length > 75
                  ? item.description.substring(0, 75) + "..."
                  : item.description
              }
              author={item.author}
            />
          ))}
        </div>
        <div className="col-3 divNews">
          {news.slice(3, 4).map((item) => (
            <SpecialCard
              key={item.url}
              url={item.url}
              img={item.urlToImage}
              title={item.title}
              description={
                item.description.length > 75
                  ? item.description.substring(0, 75) + "..."
                  : item.description
              }
              author={item.author}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Technology;
