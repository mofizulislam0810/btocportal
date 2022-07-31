import React from "react";
import "./Packages.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Packages = () => {
  let packageList = [
    {
      packID: 1001,
      bannerImg:
        "https://www.triplover.com/ClientData/TopVisitedPlaces/Dubai_202111061303298133.jpg",
      locationName: "Dubai",
      title: "SUMMER GATEWAY FOR 4 DAYS 3 NIGHTS",
      totalPrice: 15500,
    },
    {
      packID: 1002,
      bannerImg:
        "https://www.golftripz.com/blog/wp-content/uploads/2019/06/BANGKOK-770x490.jpg",
      locationName: "Thailand",
      title: "BANGKOK PATTAYA 5 DAYS 4 NIGHTS",
      totalPrice: 15700,
    },
    {
      packID: 1003,
      bannerImg:
        "https://pyt-blogs.imgix.net/2021/12/beach-gedb05081c_1920.jpg?auto=format&ixlib=php-3.3.0",
      locationName: "Maldives",
      title: "HULHUMALE 3 DAYS 2 NIGHTS",
      totalPrice: 9000,
    },
    {
      packID: 1004,
      bannerImg:
        "https://media.cntraveller.com/photos/6193e2965502655976f78f59/16:9/w_5120,h_2880,c_limit/Malaysia-503847689-conde-nast-traveller-16nov21%20Getty.jpg",
      locationName: "Malaysia",
      title: "KUALA LAMPUR - LANGKAWI 5 DAYS 4 NIGHTS",
      totalPrice: 12500,
    },
    {
      packID: 1004,
      bannerImg:
        "https://media.cntraveller.com/photos/6193e2965502655976f78f59/16:9/w_5120,h_2880,c_limit/Malaysia-503847689-conde-nast-traveller-16nov21%20Getty.jpg",
      locationName: "Malaysia",
      title: "KUALA LAMPUR - LANGKAWI 5 DAYS 4 NIGHTS",
      totalPrice: 12500,
    },
    {
      packID: 1004,
      bannerImg:
        "https://media.cntraveller.com/photos/6193e2965502655976f78f59/16:9/w_5120,h_2880,c_limit/Malaysia-503847689-conde-nast-traveller-16nov21%20Getty.jpg",
      locationName: "Malaysia",
      title: "KUALA LAMPUR - LANGKAWI 5 DAYS 4 NIGHTS",
      totalPrice: 12500,
    },
    {
      packID: 1004,
      bannerImg:
        "https://media.cntraveller.com/photos/6193e2965502655976f78f59/16:9/w_5120,h_2880,c_limit/Malaysia-503847689-conde-nast-traveller-16nov21%20Getty.jpg",
      locationName: "Malaysia",
      title: "KUALA LAMPUR - LANGKAWI 5 DAYS 4 NIGHTS",
      totalPrice: 12500,
    },
    {
      packID: 1004,
      bannerImg:
        "https://media.cntraveller.com/photos/6193e2965502655976f78f59/16:9/w_5120,h_2880,c_limit/Malaysia-503847689-conde-nast-traveller-16nov21%20Getty.jpg",
      locationName: "Malaysia",
      title: "KUALA LAMPUR - LANGKAWI 5 DAYS 4 NIGHTS",
      totalPrice: 12500,
    },
  ];

  return (
    <>
      <h2 className="text-dark fw-bold text-start pt-5 container">
        Holiday Packages
      </h2>
      <section>
        <div id="cards_landscape_wrap-2">
          <div className="container">

              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 4,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 2,
                    partialVisibilityGutter: 30,
                  },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {packageList.map((item, index) => {
                  return (
                    <div className="mx-2 mb-5 bg-white" key={index}>
                      <Link to={`/packagedetails/${item.packID}`}>
                        <div className="card-flyer">
                          <div className="text-box">
                            <div className="image-box">
                              <img src={item.bannerImg} alt="" />
                            </div>
                            <div className="text-container text-start ">
                              <h6>
                                <i
                                  className="fa fa-map-marker me-1"
                                  aria-hidden="true"
                                ></i>
                                {item.locationName}
                              </h6>
                              <h6
                                className="fw-bold mb-0 text-secondary"
                                style={{ fontSize: "9px" }}
                              >
                                {item.title}
                              </h6>
                              <p className="fw-bold m-0 text-secondary">
                                <span style={{ fontSize: "9px" }}>
                                  Starts From
                                  <span
                                    className="ms-1"
                                    style={{ fontSize: "13px" }}
                                  >
                                    BDT {item.totalPrice}
                                  </span>
                                  PP
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;
