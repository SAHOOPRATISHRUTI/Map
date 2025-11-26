import React from "react";
import odishaData from "../data/odishaData";
import { FaCheckCircle } from "react-icons/fa";

const Odisha = () => {
  return (
    <div className="container py-4">

      {/* ------------------ TITLE ------------------ */}
      <h2 className="text-center fw-bold mb-4">
        About <span className="text-primary">{odishaData.name}</span>
      </h2>

      {/* ------------------ MAP + BASIC INFO ------------------ */}
      <div className="row mb-4 align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={odishaData.map}
            alt={`${odishaData.name} Map`}
            className="img-fluid shadow rounded"
            style={{ maxWidth: "350px" }}
          />
        </div>

        <div className="col-md-6">
          <div className="p-3 rounded shadow-sm" style={{ background: "#f7faff" }}>
            <p className="mb-2">{odishaData.description}</p>
            <p className="mb-2"><strong>Formation Day:</strong> {odishaData.formationDay}</p>
            <p className="mb-2"><strong>Old Names:</strong> Udra, Utkal, Kalinga, Kosala</p>
            <p className="mb-0"><strong>Capital:</strong> Bhubaneswar</p>
          </div>
        </div>
      </div>

      {/* ------------------ CATEGORY CARDS ------------------ */}
      <div className="row">
        {odishaData.categories.map((category, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div
              className="card shadow-sm h-100 border-0"
              style={{
                background: category.color,
                borderRadius: "12px",
                padding: "10px",
              }}
            >
              <div className="card-body">
                <h5 className="card-title fw-bold mb-3 d-flex align-items-center">
                  <FaCheckCircle className="me-2 text-secondary" />
                  {category.title}
                </h5>
                <ul className="list-unstyled mb-0">
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      className="mb-2 p-2 rounded"
                      style={{ background: "rgba(255,255,255,0.55)" }}
                    >
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
