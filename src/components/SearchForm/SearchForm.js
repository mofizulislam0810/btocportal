import React, { useState } from "react";
import "./SearchForm.css";
import { toast, ToastContainer } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import produce from "immer";
import airports from "../../JSON/airports.json";

const SearchForm = () => {
  const [travelType, setTravelType] = useState("Flight");
  const [passengerCount, setPassengerCount] = useState({
    adult: 1,
    child: 0,
    infant: 0,
  });

  const [searchInfo, setSearchInfo] = useState({
    tripType: "Return",
    travelerClass: "Economy",
  });

  const [inputDepartValue, setInputDepartValue] = useState({
    name: "Hazrat Shahjalal International Airport",
    city: "Dhaka",
    country: "Bangladesh",
    iata: "DAC",
  });
  const [inputReturnValue, setInputReturnValue] = useState({
    name: "Shah Amanat Intl",
    city: "Chittagong",
    country: "Bangladesh",
    iata: "CGP",
  });

  const [searchInfoRoute, setSearchInfoRoute] = useState({
    origin: inputDepartValue.iata,
    destination: inputReturnValue.iata,
    departureDate: new Date(),
  });

  console.log(searchInfoRoute);

  const totalPassenger = passengerCount.adult + passengerCount.child;

  const [departDate, setDepartDate] = useState(new Date());
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;



  const [departValue, setDepartValue] = useState([]);
  const [returnValue, setReturnValue] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");

  const swap = () => {
    setInputDepartValue(inputReturnValue);
    setInputReturnValue(inputDepartValue);
    setSearchInfoRoute({
      ...searchInfoRoute,
      origin: inputReturnValue.iata,
      destination: inputDepartValue.iata,
    })
  }
  const handleSubmit = (e) => {
    console.log(searchInfo);
    console.log(passengerCount);
    e.preventDefault();
  };

  const [childAge, setChildAge] = useState([]);
  const addNewChild = (child) => {
    setPassengerCount({
      ...passengerCount,
      child: child + 1,
    });
    setChildAge([...childAge, { age: "" }]);
  };

  const clickOnDelete = (child) => {
    setPassengerCount({
      ...passengerCount,
      child: child - 1,
    });
    const lastIndex = childAge.length - 1;
    setChildAge(childAge.filter((r, index) => index !== lastIndex));
  };

  return (
    <>
      <ToastContainer />
      <div className="search-panal-bg">
        <div className="container pt-5">
          <div className="row pt-5">
            <div
              className="col-lg-12 col-12 pt-5 mx-auto "
              style={{ width: "50%" }}
            >
              <div
                className="d-flex px-0 justify-content-between"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  borderRadius: "5px",
                }}
              >
                <span
                  className="px-3 py-2 flex-fill rounded-start"
                  style={{
                    cursor: "pointer",
                    backgroundColor: travelType === "Flight" ? "#0d6efd" : "",
                  }}
                  onClick={() => setTravelType("Flight")}
                >
                  <span className="text-white me-1">
                    <i className="fas fa-plane"></i>
                  </span>
                  <span className="ms-1 text-white">Flight</span>
                </span>
                <span
                  className="px-3 py-2 flex-fill "
                  style={{
                    cursor: "pointer",
                    backgroundColor: travelType === "Hotel" ? "#0d6efd" : "",
                  }}
                  onClick={() => setTravelType("Hotel")}
                >
                  <span className="text-white me-1">
                    <i className="fas fa-hotel"></i>
                  </span>
                  <span className="ms-1 text-white">Hotel</span>
                </span>
                <span
                  className="px-3 py-2 flex-fill rounded-end"
                  style={{
                    cursor: "pointer",
                    backgroundColor: travelType === "Visa" ? "#0d6efd" : "",
                  }}
                  onClick={() => setTravelType("Visa")}
                >
                  <span className="text-white me-1">
                    <i className="fas fa-passport"></i>
                  </span>
                  <span className="ms-1 text-white">Visa</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12 search-panel-position">
              <div id="searcg-form-bg">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12 pb-1">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input me-1 radio-type-btn"
                          type="radio"
                          name="inlineRadioOptions"
                          id="option1"
                          checked={searchInfo.tripType === "Oneway"}
                          value="Oneway"
                          onChange={(e) =>
                            setSearchInfo({
                              ...searchInfo,
                              tripType: e.target.value,
                            })
                          }
                        />
                        <label
                          className="form-check-label text-white fs-6 me-2"
                          htmlFor="option1"
                        >
                          Oneway
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input me-1 radio-type-btn"
                          type="radio"
                          name="inlineRadioOptions"
                          id="option2"
                          checked={searchInfo.tripType === "Return"}
                          value="Return"
                          onChange={(e) =>
                            setSearchInfo({
                              ...searchInfo,
                              tripType: e.target.value,
                            })
                          }
                        />
                        <label
                          className="form-check-label text-white fs-6 me-2"
                          htmlFor="option2"
                        >
                          Return
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input me-1 radio-type-btn"
                          type="radio"
                          name="inlineRadioOptions"
                          id="option3"
                          checked={searchInfo.tripType === "Multi City"}
                          value="Multi City"
                          onChange={(e) =>
                            setSearchInfo({
                              ...searchInfo,
                              tripType: e.target.value,
                            })
                          }
                        />
                        <label
                          className="form-check-label text-white fs-6 me-2"
                          htmlFor="option3"
                        >
                          Multi City
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 mb-1 position-relative">
                      <div className="row ">
                        <div className="col-lg-12 mb-1 col-sm-12 col-md-12">
                          <input
                            type="text"
                            className="form-control input-field-text text-input-from rounded"
                            placeholder="Depart From"
                            required
                            autoComplete="off"
                            value={
                              inputDepartValue?.city +
                              " " +
                              inputDepartValue?.iata +
                              " " +
                              inputDepartValue?.country +
                              " " +
                              inputDepartValue?.name
                            }
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            readOnly
                          />
                          <ul
                            className="dropdown-menu p-0"
                            style={{
                              maxHeight: "300px",
                              width: "95%",
                              overflowY: "scroll",
                            }}
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <input
                              className="form-control p-2 py-1 rounded-0"
                              type="text"
                              value={searchInputText}
                              placeholder="Type to search"
                              onChange={(e) => {
                                var list = airports.filter((item) =>
                                  item.iata.includes(
                                    e.target.value.toUpperCase()
                                  )
                                );
                                setDepartValue(list);
                                setSearchInputText(e.target.value);
                              }}
                            />

                            {departValue.length > 0 &&
                              departValue !== undefined ? (
                              <>
                                {departValue?.map((item, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className="dropdown-item py-2 border d-flex"
                                      onClick={() => {
                                        setInputDepartValue(item);
                                        setSearchInputText("");
                                        setSearchInfoRoute({
                                          ...searchInfoRoute,
                                          origin: item.iata
                                        })
                                      }}
                                    >
                                      <div
                                        className="fw-bold pe-3 fs-5 text-primary"
                                        style={{ width: "13%" }}
                                      >
                                        {item.iata}
                                      </div>
                                      <div
                                        className="ps-3 fw-bold"
                                        style={{ fontSize: "14px" }}
                                      >
                                        {item.name?.slice(0, 30)} <br></br>
                                        {item.city}
                                      </div>
                                    </li>
                                  );
                                })}
                              </>
                            ) : (
                              <>
                                <li className="dropdown-item py-2 border d-flex">
                                  <div
                                    className="fw-bold pe-3 fs-5 text-primary"
                                    style={{ width: "13%" }}
                                  >
                                    {inputDepartValue.iata}
                                  </div>
                                  <div
                                    className="ps-3 fw-bold"
                                    style={{ fontSize: "14px" }}
                                  >
                                    {inputDepartValue.name?.slice(0, 30)}{" "}
                                    <br></br>
                                    {inputDepartValue.city}
                                  </div>
                                </li>
                              </>
                            )}
                          </ul>
                        </div>
                        <div className="swap" onClick={() => swap()}>
                          <label className="swap">
                            <span className="icon text-danger">
                              <i className="fas fa-exchange-alt fa-rotate-90"></i>
                            </span>
                          </label>
                        </div>
                        <div className="col-lg-12 mb-1 col-sm-12 col-md-12">
                          <input
                            type="text"
                            className="form-control input-field-text text-input-to rounded"
                            placeholder="Going To"
                            required
                            value={
                              inputReturnValue?.city +
                              " " +
                              inputReturnValue?.iata +
                              " " +
                              inputReturnValue?.country +
                              " " +
                              inputReturnValue?.name
                            }
                            autoComplete="off"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            readOnly
                          />
                          <ul
                            className="dropdown-menu p-0"
                            style={{
                              maxHeight: "300px",
                              width: "95%",
                              overflowY: "scroll",
                            }}
                            aria-labelledby="dropdownMenuButton2"
                          >
                            <input
                              className="form-control p-2 py-1 rounded-0"
                              type="text"
                              value={searchInputText}
                              placeholder="Type to search"
                              onChange={(e) => {
                                var list = airports.filter((item) =>
                                  item.iata.includes(
                                    e.target.value.toUpperCase()
                                  )
                                );
                                setReturnValue(list);
                                setSearchInputText(e.target.value);
                              }}
                            />
                            {returnValue.length > 0 &&
                              returnValue !== undefined ? (
                              <>
                                {returnValue?.map((item, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className="dropdown-item py-2 border d-flex"
                                      onClick={() => {
                                        setInputReturnValue(item);
                                        setSearchInputText("");
                                        setSearchInfoRoute({
                                          ...searchInfoRoute,
                                          destination: item.iata
                                        })
                                      }}
                                    >
                                      <div
                                        className="fw-bold pe-3 fs-5 text-primary"
                                        style={{ width: "13%" }}
                                      >
                                        {item.iata}
                                      </div>

                                      <div
                                        className="ps-3 fw-bold"
                                        style={{ fontSize: "14px" }}
                                      >
                                        {item.name?.slice(0, 30)} <br></br>
                                        {item.city}
                                      </div>
                                    </li>
                                  );
                                })}
                              </>
                            ) : (
                              <>
                                <li className="dropdown-item py-2 border d-flex">
                                  <div
                                    className="fw-bold pe-3 fs-5 text-primary"
                                    style={{ width: "13%" }}
                                  >
                                    {inputReturnValue.iata}
                                  </div>
                                  <div
                                    className="ps-3 fw-bold"
                                    style={{ fontSize: "14px" }}
                                  >
                                    {inputReturnValue.name?.slice(0, 30)}{" "}
                                    <br></br>
                                    {inputReturnValue.city}
                                  </div>
                                </li>
                              </>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 mb-1">
                      <div className="d-flex">
                        {searchInfo.tripType === "Return" ? (
                          <>
                            <div className="flex-fill bg-white rounded">
                              {/* <h6 className="pt-1">Departing</h6> */}
                              <DatePicker
                                className="w-100 mb-1 rounded border-0 date-range-height text-center"
                                selectsRange={true}
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(update) => {
                                  setDateRange(update);
                                }}
                                minDate={startDate}
                                showDisabledMonthNavigation
                                monthsShown={2}
                                dateFormat="d MMM, yy"
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex-fill bg-white rounded">
                              {/* <h6 className="pt-1">Returning</h6> */}
                              <DatePicker
                                className="w-100 mb-1 rounded border-0 date-range-height text-center"
                                selected={departDate}
                                onChange={(date) => {
                                  setDepartDate(date);
                                  setSearchInfoRoute({
                                    ...searchInfoRoute,
                                    departureDate: date
                                  })
                                }}
                                minDate={new Date()}
                                showDisabledMonthNavigation
                                dateFormat="d MMM, yy"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 mb-1">
                      <div className="row mb-1 rounded">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <button
                            className="form-select inputgroup"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{
                              height: "50px",
                              border: "0",
                              width: "100%",
                              textAlign: "left",
                              boxShadow: "none",
                              borderRadius: "0.25rem",
                            }}
                          >
                            <span id="valClass">
                              <span className="me-2 text-danger">
                                <i className="fas fa-couch"></i>
                              </span>
                              {searchInfo.travelerClass}
                            </span>
                          </button>
                          <ul
                            id="classList"
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <li
                              className="dropdown-item dropdown-item-selected"
                              onClick={() =>
                                setSearchInfo({
                                  ...searchInfo,
                                  travelerClass: "Economy",
                                })
                              }
                              style={{ cursor: "pointer" }}
                            >
                              Economy
                            </li>
                            <li
                              className="dropdown-item"
                              onClick={(e) =>
                                setSearchInfo({
                                  ...searchInfo,
                                  travelerClass: "Business",
                                })
                              }
                              style={{ cursor: "pointer" }}
                            >
                              Business
                            </li>
                            <li
                              className="dropdown-item"
                              onClick={(e) =>
                                setSearchInfo({
                                  ...searchInfo,
                                  travelerClass: "First",
                                })
                              }
                              style={{ cursor: "pointer" }}
                            >
                              First
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-1">
                          <button
                            className="form-select inputgroup "
                            type="button"
                            id="dropdownMenuButtonpassenger"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-auto-close="outside"
                            style={{
                              height: "50px",
                              border: "0",
                              width: "100%",
                              textAlign: "left",
                              boxShadow: "none",
                              borderRadius: "0.25rem",
                            }}
                          >
                            <span id="adultval">
                              <span className="me-2 text-danger">
                                <i className="fas fa-users"></i>
                              </span>
                              <span id="valPerson">
                                Passenger{" "}
                                {passengerCount.adult +
                                  passengerCount.child +
                                  passengerCount.infant}
                              </span>
                            </span>
                          </button>
                          <div
                            id="passengerBlock"
                            className="dropdown-menu passenger-pack"
                            aria-labelledby="dropdownMenuButtonpassenger"
                          >
                            <div>
                              <div className="d-flex justify-content-between mb-3">
                                <div>
                                  <div style={{ fontSize: "15px" }}>
                                    <i
                                      className="fas fa-male align-self-center d-none"
                                      style={{ color: "#222" }}
                                      aria-hidden="true"
                                    ></i>
                                    Adults
                                  </div>
                                  <div
                                    className="adult text-secondary"
                                    style={{ fontSize: "10px" }}
                                  >
                                    <span>12 years & above</span>
                                  </div>
                                </div>
                                <div className="number-input text-center">
                                  <button
                                    type="button"
                                    className="round-btn"
                                    title="adultminus"
                                    onClick={
                                      passengerCount.infant > 0 &&
                                        passengerCount.adult ===
                                        passengerCount.infant
                                        ? () => {
                                          setPassengerCount({
                                            ...passengerCount,
                                            adult: passengerCount.adult - 1,
                                            infant: passengerCount.infant - 1,
                                          });
                                        }
                                        : () =>
                                          setPassengerCount({
                                            ...passengerCount,
                                            adult: passengerCount.adult - 1,
                                          })
                                    }
                                    disabled={
                                      passengerCount.adult === 1 ? true : false
                                    }
                                  >
                                    <span className="text-white">
                                      <i className="fas fa-minus"></i>
                                    </span>
                                  </button>
                                  <input
                                    readOnly
                                    value={passengerCount.adult}
                                    type="text"
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                    }}
                                  />
                                  <button
                                    type="button"
                                    className="round-btn"
                                    title="adultplus"
                                    onClick={() =>
                                      setPassengerCount({
                                        ...passengerCount,
                                        adult: passengerCount.adult + 1,
                                      })
                                    }
                                    disabled={
                                      totalPassenger === 9 ? true : false
                                    }
                                  >
                                    <span className="text-white">
                                      <i className="fas fa-plus"></i>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between mb-2">
                                <div>
                                  <div style={{ fontSize: "15px" }}>
                                    <i
                                      className="fas fa-child align-self-center d-none"
                                      style={{ color: "#222" }}
                                      aria-hidden="true"
                                    ></i>
                                    Children
                                  </div>
                                  <div
                                    className="adult text-secondary"
                                    style={{ fontSize: "10px" }}
                                  >
                                    <span>2-11 years on travel date</span>
                                  </div>
                                </div>
                                <div className="number-input text-center">
                                  <button
                                    type="button"
                                    className="round-btn"
                                    title="adultminus"
                                    onClick={() =>
                                      clickOnDelete(passengerCount.child)
                                    }
                                    disabled={
                                      passengerCount.child === 0 ? true : false
                                    }
                                  >
                                    <span className="text-white">
                                      <i className="fas fa-minus"></i>
                                    </span>
                                  </button>
                                  <input
                                    readOnly
                                    value={passengerCount.child}
                                    type="text"
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                    }}
                                  />
                                  <button
                                    type="button"
                                    className="round-btn"
                                    title="adultplus"
                                    onClick={() =>
                                      addNewChild(passengerCount.child)
                                    }
                                    disabled={
                                      totalPassenger === 9 ? true : false
                                    }
                                  >
                                    <span className="text-white">
                                      <i className="fas fa-plus"></i>
                                    </span>
                                  </button>
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-lg-12">
                                  <span className="d-flex flex-wrap w-100">
                                    {" "}
                                    {childAge.map((val, index) => {
                                      let agenum = `age-${index}`;
                                      return (
                                        <span className="col-lg-4" key={index}>
                                          <label
                                            htmlFor="formGroupExampleInput"
                                            className="form-label"
                                          >
                                            <div
                                              className="adult text-secondary"
                                              style={{ fontSize: "10px" }}
                                            >
                                              <span>Child {index + 1} Age</span>
                                            </div>
                                          </label>
                                          <select
                                            name="age"
                                            className="form-select rounded"
                                            style={{ width: "97%" }}
                                            onChange={(e) => {
                                              const date = e.target.value;
                                              setChildAge((ob) =>
                                                produce(ob, (v) => {
                                                  v[index].age = date;
                                                })
                                              );
                                            }}
                                            value={val.age}
                                            required
                                          >
                                            <option hidden></option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                            <option value={11}>11</option>
                                          </select>
                                        </span>
                                      );
                                    })}
                                  </span>
                                </div>
                              </div>

                              <div className="d-flex justify-content-between mb-3">
                                <div>
                                  <div style={{ fontSize: "15px" }}>
                                    <i
                                      className="fas fa-baby align-self-center d-none"
                                      style={{ color: "#222" }}
                                      aria-hidden="true"
                                    ></i>
                                    Infants
                                  </div>
                                  <div
                                    className="adult text-secondary"
                                    style={{ fontSize: "10px" }}
                                  >
                                    0-23 months on travel date
                                  </div>
                                </div>
                                <div className="number-input text-center">
                                  <button
                                    type="button"
                                    className="round-btn"
                                    title="adultminus"
                                    onClick={() =>
                                      setPassengerCount({
                                        ...passengerCount,
                                        infant: passengerCount.infant - 1,
                                      })
                                    }
                                    disabled={
                                      passengerCount.infant === 0 ? true : false
                                    }
                                  >
                                    <span className="text-white">
                                      <i className="fas fa-minus"></i>
                                    </span>
                                  </button>
                                  <input
                                    readOnly
                                    value={passengerCount.infant}
                                    type="text"
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                    }}
                                  />

                                  <button
                                    type="button"
                                    className="round-btn"
                                    title="adultplus"
                                    onClick={
                                      passengerCount.infant <
                                        passengerCount.adult
                                        ? () =>
                                          setPassengerCount({
                                            ...passengerCount,
                                            infant: passengerCount.infant + 1,
                                          })
                                        : () => { }
                                    }
                                    disabled={
                                      passengerCount.infant === 9 ? true : false
                                    }
                                  >
                                    <span className="text-white">
                                      <i className="fas fa-plus"></i>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12 col-12">
                      <button
                        type="submit"
                        className="btn btn-primary fw-bold fs-5 search-button w-100 rounded"
                      >
                        <span className="me-2">
                          <i className="fas fa-search"></i>
                        </span>
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
