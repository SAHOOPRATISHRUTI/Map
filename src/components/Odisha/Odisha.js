import React, { useState } from "react";
import odishaData, { getLightColor } from "../data/odishaData.js";
import { FaCheckCircle } from "react-icons/fa/index.esm.js";
import { Modal, Box, Typography } from "@mui/material";

export default function Odisha() {

  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    borderRadius: "14px",
    boxShadow: 30,
    width: "92%",
    maxWidth: "1050px",
    maxHeight: "90vh",
    overflow: "hidden",
    p: 0,
  };

  const openModal = (category) => {
    setSelectedCategory(category);
    setOpen(true);
  };

  return (
    <div className="container py-4">

      {/* ✨ GRID CARDS */}
      <div className="row">
        {odishaData.categories.map((category, index) => {
          const preview = category.items.slice(0, 2);

          return (
            <div key={index} className="col-md-6 mb-4">
              <div
                onClick={() => openModal(category)}
                className="p-4 rounded shadow-sm h-100"
                
                style={{
                  background: `linear-gradient(to bottom right, ${getLightColor()}, white)`,
                  borderLeft: "4px solid #005ad7",
                  cursor: "pointer",
                  transition: "0.3s",
                }}

                onMouseEnter={(e)=> e.currentTarget.style.transform="scale(1.02)"}
                onMouseLeave={(e)=> e.currentTarget.style.transform="scale(1)"}
              >
                <h5 className="fw-bold mb-3 d-flex align-items-center">
                  <FaCheckCircle className="me-2 text-primary" /> {category.title}
                </h5>

                <ul className="list-unstyled">
                  {preview.map((i, k) => (
                    <li key={k} style={{ fontSize: "16.5px" }}>
                      <strong>{i.label}:</strong> {i.value}
                    </li>
                  ))}
                </ul>

                <p className="text-primary fw-semibold mt-3 mb-1">View Full Details →</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================= MODAL ========================= */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>

          {/* HEADER */}
          <div
            style={{
              padding: "18px 25px",
              background: "#0056d6",
              color: "white",
              fontSize: "24px",
              fontWeight: "700",
              position: "sticky",
              top: 0,
              zIndex: 20,
              borderBottom: "3px solid rgba(255,255,255,0.4)",
            }}
          >
            {selectedCategory?.title}
          </div>

          {/* BODY */}
          <div
            style={{
              padding: "30px",
              maxHeight: "calc(90vh - 75px)",
              overflowY: "auto",
              background: "#fafbff",
              lineHeight: "1.9",
            }}
          >
            {/* MULTI COLUMN CONTENT */}
            <div
              style={{
                columns: "300px 3",
                columnGap: "22px",
              }}
            >
              {selectedCategory?.items?.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "white",
                    padding: "14px 18px",
                    borderRadius: "8px",
                    marginBottom: "18px",
                    display: "inline-block",
                    width: "100%",
                    boxShadow: "0px 2px 10px rgba(0,0,0,0.07)",
                    borderLeft: "4px solid #0d6efd",
                  }}
                >
                  <strong style={{ color: "#0d6efd" }}>{item.label}:</strong>
                  <span style={{ fontSize: "16.5px", marginLeft: "6px" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

        </Box>
      </Modal>
    </div>
  );
}
