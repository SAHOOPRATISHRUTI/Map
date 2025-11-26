import React from "react";
import odishaData from "../data/odishaData";

const Odisha = () => {
  return (
    <div className="container p-4">
      <h2 className="text-center fw-bold mb-4">About {odishaData.name}</h2>

      <div className="row mb-4">
        <div className="col-md-6 text-center">
          <img
            src={odishaData.map}
            alt={`${odishaData.name} Map`}
            className="img-fluid shadow rounded"
            style={{ maxWidth: "350px" }}
          />
        </div>
        <div className="col-md-6">
          <p>{odishaData.description}</p>
        </div>
      </div>

      <div className="row">
        {odishaData.categories.map((category, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{ backgroundColor: category.color, borderRadius: "10px" }}
            >
              <div className="card-body">
                <h5 className="card-title fw-bold mb-3">{category.title}</h5>
                <ul className="list-unstyled mb-0">
                  {category.items.map((item, i) => (
                    <li key={i} className="mb-1">
                      <strong>{item.label}:</strong> {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Odisha;
