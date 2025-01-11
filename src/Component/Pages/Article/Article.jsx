import FollowSuggestions from "../FollowSuggestions/FollowSuggestions.JSX";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
  rel="stylesheet"
/>;
import share from "../../../assets/Group 2.1.png";
import watch from "../../../assets/visibility_24px.png";
import dot from "../../../assets/baseline-more_vert-24px.png";
import ar from "../../../assets/article.png";
import edu from "../../../assets/education.png";
import ss from "../../../assets/self.png";
const Article = () => {
  return (
    <div
      className="mx-auto d-flex flex-column flex-md-row gap-5 justify-content-center"
      style={{ maxWidth: "1040px" }}
    >
      <div className="posts-center position-relative flex-grow-1">
        <div
          className="d-flex flex-column border border-1 rounded-2"
          style={{
            maxWidth: "692px",
            borderColor: "rgb(224, 224, 224)",
            fill: "rgb(255, 255, 255)",
          }}
        >
          <img
            src={ar}
            alt="Nature"
            className="imagePost img-fluid"
          />
          <div className="p-4">
            <h3 className="d-flex">✍️ Article</h3>
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-between">
              <h4>
                What if famous brands had regular fonts? Meet RegulaBrands!
              </h4>
              <div className="btn align-self-start">
                <div className="dropdown">
                  <button
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="btn btn-link p-0"
                  >
                    <img
                      src={dot}
                      alt="more details"
                      height="28px"
                      width="28px"
                    />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" type="button">
                        Edit
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Report
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        option 3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p>
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <img
                  className="rounded-circle"
                  alt="Profile"
                  src={ss}
                  width="48"
                  height="48"
                />
                <div className="d-flex flex-row">
                  <div className="text-wrapper">Shaharul ISlam</div>
                  <div className="d-lg-none flex">
                    <img
                      src={watch}
                      alt="watch"
                      className="inline-block mr-2"
                    />
                    <span className="inline-block">1.4k views</span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={watch} alt="watch" className="inline-block mr-2" />
                  <span className="inline-block">1.4k views</span>
                </div>
                <div className="d-flex gap-3 justify-content-center">
                  <button className="btn text-success">
                    <img src={share} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column border border-1 rounded-2"
          style={{
            maxWidth: "692px",
            borderColor: "rgb(224, 224, 224)",
            fill: "rgb(255, 255, 255)",
          }}
        >
          <img
            src={edu}
            alt="Nature"
            className="imagePost img-fluid"
          />
          <div className="p-4">
            <h3 className="d-flex">✍️ Education</h3>
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-between">
              <h4>
                What if famous brands had regular fonts? Meet RegulaBrands!
              </h4>
              <div className="btn align-self-start">
                <div className="dropdown">
                  <button
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="btn btn-link p-0"
                  >
                    <img
                      src={dot}
                      alt="more details"
                      height="28px"
                      width="28px"
                    />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" type="button">
                        Edit
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Report
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        option 3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p>
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <img
                  className="rounded-circle"
                  alt="Profile"
                  src={ss}
                  width="48"
                  height="48"
                />
                <div className="d-flex flex-row">
                  <div className="text-wrapper">Siddharth Goyal</div>
                  <div className="d-lg-none flex">
                    <img src={watch} alt="watch" />
                    <span>1.4k views</span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={watch} alt="watch" className="inline-block mr-2" />
                  <span className="inline-block">1.4k views</span>
                </div>
                <div className="d-flex gap-3 justify-content-center">
                  <button className="btn text-success">
                    <img src={share} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column border border-1 rounded-2"
          style={{
            maxWidth: "692px",
            borderColor: "rgb(224, 224, 224)",
            fill: "rgb(255, 255, 255)",
          }}
        >
          <img
            src={ar}
            alt="Nature"
            className="imagePost img-fluid"
          />
          <div className="p-4">
            <h3 className="d-flex">✍️ Article</h3>
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-between">
              <h4>
                What if famous brands had regular fonts? Meet RegulaBrands!
              </h4>
              <div className="btn align-self-start">
                <div className="dropdown">
                  <button
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="btn btn-link p-0"
                  >
                    <img
                      src={dot}
                      alt="more details"
                      height="28px"
                      width="28px"
                    />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" type="button">
                        Edit
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Report
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        option 3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p>
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <img
                  className="rounded-circle"
                  alt="Profile"
                  src={ss}
                  width="48"
                  height="48"
                />
                <div className="d-flex flex-row">
                  <div className="text-wrapper">Siddharth Goyal</div>
                  <div className="d-lg-none flex">
                    <img src={watch} alt="watch" />
                    <span>1.4k views</span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={watch} alt="watch" className="inline-block mr-2" />
                  <span className="inline-block">1.4k views</span>
                </div>
                <div className="d-flex gap-3 justify-content-center">
                  <button className="btn text-success">
                    <img src={share} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FollowSuggestions />
    </div>
  );
};

export default Article;
