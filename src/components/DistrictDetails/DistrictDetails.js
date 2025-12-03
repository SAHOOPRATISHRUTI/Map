import React from "react";
import districtsData from "../data/districtsData.js";

const DistrictDetails = ({ districtKey }) => {
  console.log(districtKey)
  if (!districtKey) {
    return <p className="text-muted">Select a district to see details.</p>;
  }

  const district = districtsData[districtKey];
console.log(district)
  return (
    <>
   

    <div>
      <h3 className="fw-bold">{district.name}</h3>
      <p>{district.description}</p>

      <h5 className="mt-4">Tourism Places</h5>
      <ul>
        {district.tourism.map((place, i) => (
          <li key={i}>{place}</li>
        ))}
      </ul>

      <h5 className="mt-4">Culture</h5>
      <p>{district.culture}</p>

      <h5 className="mt-4">Food</h5>
      <ul>
        {district.food.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h5 className="mt-4">Photo Gallery</h5>

      <div className="row">
        {district.photos.map((photo, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <img
              src={photo}
              alt="District Scene"
              className="img-fluid rounded shadow"
            />
          </div>
        ))}
      </div>
    </div>
        </>
  );
};

export default DistrictDetails;
