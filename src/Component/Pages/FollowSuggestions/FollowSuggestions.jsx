import React from "react";

const followSuggestions = [
  {
    name: "Leisure",
    imgSrc: "https://dont-copy.netlify.app/assets/recGroup1-JHI-0zi5.jpg",
  },
  {
    name: "Activism",
    imgSrc: "https://dont-copy.netlify.app/assets/recGroup1-JHI-0zi5.jpg",
  },
  {
    name: "MBA",
    imgSrc: "https://dont-copy.netlify.app/assets/recGroup3-AxHGDmNo.jpg",
  },
  {
    name: "Philosophy",
    imgSrc: "https://dont-copy.netlify.app/assets/recGroup4-cA6Wedko.jpg",
  },
];

const FollowSuggestions = () => {
  return (
    <div className="d-flex flex-column gap-4">
      {followSuggestions.map((suggestion, index) => (
        <div className="d-flex align-items-center justify-content-between" key={index}>
          <div className="d-flex align-items-center gap-2">
            <img
              className="rounded-circle"
              alt={suggestion.name}
              src={suggestion.imgSrc}
              width="36"
              height="36"
            />
            <div className="text-wrapper">{suggestion.name}</div>
          </div>
          <a className="btn follow rounded-5" href="/">
            Follow
          </a>
        </div>
      ))}
      <button className="btn text-end mt-5 text-primary text-capitalize">
        see more...
      </button>
    </div>
  );
};

export default FollowSuggestions;
