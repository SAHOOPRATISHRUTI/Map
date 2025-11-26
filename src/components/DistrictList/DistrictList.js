import React from "react";
import districtsData from "../data/districtsData";

const DistrictList = ({ onSelect }) => {
  const districtKeys = Object.keys(districtsData);

  const colors = [
    "#e63946", "#457b9d", "#ffb703", "#8d99ae", "#06d6a0", "#ef476f",
    "#118ab2", "#ff7f51", "#073b4c", "#7b2cbf", "#f72585", "#4361ee",
    "#4cc9f0", "#ff9e00"
  ];

  const colorizeWords = (text, offset) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        style={{
          color: colors[(index + offset) % colors.length],
          marginRight: "4px",
          fontWeight: "600",
        }}
      >
        {word}
      </span>
    ));
  };

  return (
    <div className="row mt-3">
      {districtKeys.map((key, idx) => (
        <div key={idx} className="col-md-4 mb-3">
          <div
            onClick={() => onSelect(key)}
            className="text-center p-3"
            style={{
              cursor: "pointer",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
          >
            {colorizeWords(districtsData[key].name, idx)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DistrictList;
