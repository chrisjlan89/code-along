import React, { useState, useEffect } from "react";

const BreweryGetter = () => {
  const [breweries, setBreweries] = useState([]);
  const [loadingValue, setLoadingValue] = useState(false);
  const [error, setError] = useState();

  const [inputValues, setInputValues] = useState({
    usState: "",
  });
  useEffect(() => {
    // console.log("fetch breweries here?");

    const fetchData = async () => {
      try {
        setLoadingValue(true);
        const response = await fetch(
          "https://api.openbrewerydb.org/breweries?by_state=vermont"
        );
        const data = await response.json();
        setBreweries(data);
        setLoadingValue(false);
      } catch (e) {
        console.log(e);

        setLoadingValue(false);
        setError(e);
      }
    };

    fetchData();
  }, []);

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log("Foprm value", inputValues.usState);
  };

  if (loadingValue) {
    return <h1> Loading...</h1>;
  }

  if (error) {
    return <h1> oops error occur</h1>;
  }

  return (
    <div>
      <h1>Breweries List</h1>
      <h2> Search for your own!!! </h2>
      <form onSubmit={(e) => handleSubmission(e)}>
        <input
          onChange={(e) => {
            const { name, value } = e.target;
            setInputValues({
              ...inputValues,
              [name]: value,
            });
          }}
          name="usState"
          value={inputValues.usState}
        />
        <button type="submit"> Submit</button>
      </form>

      {}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
        }}
        className="breweries-list"
      >
        {breweries.map((brewerry) => (
          <div
            style={{
              minWidth: "300px",
              minHeight: "200px",
              border: "solid 1px #787878",
              borderRadius: "4px",
            }}
            className="brewery"
          >
            <p>{brewerry.name}</p>
            <p>City: {brewerry.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreweryGetter;
