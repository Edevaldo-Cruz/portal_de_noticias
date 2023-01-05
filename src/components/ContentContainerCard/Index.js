import React from "react";

function ContentContainerCard({ url, image, title, author }) {
  return (
    <div>
      <a
        className="text-underline-hover"
        href={url}
        style={{
          width: "30rem",
          height: "7.5rem",
          textDecoration: "none",
          color: "black",
        }}
      >
        <div className="row m-2">
          <div className="col-2">
            <img
              src={image}
              style={{
                width: "5rem",
                height: "5rem",
                margin: "0rem",
              }}
            />
          </div>
          <div className="col-10">
            <p className="fs-6 ms" style={{ marginLeft: "3.2rem" }}>
              {title}
            </p>
            <p className="text-end align-text-bottom">{author}</p>
          </div>
        </div>
        <hr />
      </a>
    </div>
  );
}

export default ContentContainerCard;
