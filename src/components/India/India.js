

import React, { useState } from "react";
import indiaData from "../data/indiaData.js";
import { FaCheckCircle } from "react-icons/fa/index.esm.js";
import { Modal, Box, Typography } from "@mui/material";

const India = () => {
    const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
  width: "90%",
  maxWidth: "500px",
  maxHeight: "80vh",
  overflowY: "auto",
};




  const openModal = (category) => {
    setSelectedCategory(category);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center fw-bold mb-3">
        About <span className="text-primary">{indiaData.name}</span>
      </h2>

      <p className="text-center text-secondary mb-4">
        A complete overview of Odisha — history, culture, symbols, governance & more.
      </p>

      {/* MAP + BASIC INFO */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6 text-center mb-3 mb-md-0">
          <img
            src={indiaData.map}
            alt={`${indiaData.name} Map`}
            className="img-fluid shadow-lg rounded"
            style={{ maxWidth: "350px" }}
          />
        </div>

        <div className="col-md-6">
          <div
            className="p-4 rounded shadow-sm"
            style={{ background: "#f7faff", lineHeight: "1.7" }}
          >
            <p className="mb-2">{indiaData.description}</p>
            <p><strong>Total Area:</strong> 1,55,707 km²</p>
            <p><strong>Formation Day:</strong> {indiaData.formationDay}</p>
            <p><strong>Old Names:</strong> Udra, Utkal, Kalinga, Kosala</p>
            <p><strong>Capital:</strong> Bhubaneswar</p>
            <p><strong>Blocks:</strong> 314</p>
            <p><strong>Tahasils:</strong> 317</p>
          </div>
        </div>
      </div>

      {/* CATEGORY CARDS */}
      <div className="row">
        {indiaData.categories.map((category, index) => {
          const previewItems = category.items.slice(0, 2); // show only 2 items

          return (
            <div key={index} className="col-md-6 mb-4">
              <div
                className="p-4 rounded shadow-sm h-100 category-card"
                style={{
                  background: category.color,
                  borderLeft: "4px solid #91c4fd",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onClick={() => openModal(category)}
              >
                <h5 className="fw-bold mb-3 d-flex align-items-center">
                  <FaCheckCircle className="me-2 text-secondary" />
                  {category.title}
                </h5>

                {/* PREVIEW ITEMS */}
                <ul className="list-unstyled">
                  {previewItems.map((item, i) => (
                    <li key={i} className="mb-1">
                      <strong>{item.label}:</strong> {item.value}
                    </li>
                  ))}
                </ul>

                <p className="text-primary fw-semibold mt-2 mb-0">
                  View More →
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      <Modal open={open} onClose={closeModal}>
        <Box sx={style}>
          <Typography variant="h6" className="fw-bold mb-3 d-flex align-items-center">
            <FaCheckCircle className="me-2 text-primary" />
            {selectedCategory?.title}
          </Typography>

          <ul className="ps-3">
            {selectedCategory?.items?.map((item, i) => (
              <li key={i} className="mb-2">
                <span className="fw-semibold">{item.label}: </span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </Box>
      </Modal>
    </div>
  );
}

export default India;