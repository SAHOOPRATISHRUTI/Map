import React, { useState } from "react";
import odishaData from "../data/odishaData";
import { FaCheckCircle } from "react-icons/fa";
import {
  Modal,
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fefefe",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
  width: "95%",
  maxWidth: "600px",
  maxHeight: "85vh",
  overflowY: "auto",
};

export default function Odisha() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = (category) => {
    setSelectedCategory(category);
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  return (
    <div className="container py-4">
      {/* Header */}
      <h2 className="text-center fw-bold mb-2" style={{ fontSize: "32px" }}>
        About <span className="text-primary">{odishaData.name}</span>
      </h2>
      <p className="text-center text-muted mb-4" style={{ fontSize: "15px" }}>
        A reading-friendly overview of Odisha — culture, history, symbols,
        population, language & more.
      </p>

      {/* MAP + BASIC INFO */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6 text-center mb-3">
          <img
            src={odishaData.map}
            alt="Odisha Map"
            className="img-fluid rounded"
            style={{
              maxWidth: "360px",
              border: "1px solid #ddd",
              padding: "8px",
              background: "#fff",
            }}
          />
        </div>

        <div className="col-md-6">
          <Card
            sx={{
              borderRadius: "16px",
              background: "#f6f9ff",
            }}
          >
            <CardContent style={{ lineHeight: "1.8", fontSize: "15px" }}>
              <p>{odishaData.description}</p>
              <Divider className="my-2" />
              <p><strong>Total Area:</strong> 1,55,707 km²</p>
              <p><strong>Formation Day:</strong> {odishaData.formationDay}</p>
              <p><strong>Old Names:</strong> {odishaData.oldNames}</p>
              <p><strong>Capital:</strong> {odishaData.capital}</p>
              <p><strong>Blocks:</strong> {odishaData.Blocks}</p>
              <p><strong>Tahasil:</strong> {odishaData.Tahasil}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CATEGORY CARDS */}
      <div className="row">
        {odishaData.categories.map((category, i) => {
          const preview = category.items.slice(0, 2); // show only first 2 items

          return (
            <div key={i} className="col-md-6 mb-4">
              <Card
                sx={{
                  borderRadius: "16px",
                  background: category.color,
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.02)" },
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                }}
                onClick={() => openModal(category)}
              >
                <CardContent>
                  <h5 className="fw-bold d-flex align-items-center mb-3">
                    <FaCheckCircle className="me-2 text-primary" />
                    {category.title}
                  </h5>

                  <ul style={{ paddingLeft: "18px", fontSize: "14px" }}>
                    {preview.map((item, idx) => (
                      <li key={idx} className="mb-1">
                        <strong>{item.label}:</strong> {item.value}
                      </li>
                    ))}
                  </ul>

                  <p
                    className="mt-2 fw-semibold text-primary"
                    style={{ cursor: "pointer" }}
                  >
                    Read More →
                  </p>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      <Modal open={open} onClose={closeModal}>
        <Box sx={modalStyle}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Typography
              variant="h6"
              className="fw-bold d-flex align-items-center"
              style={{ fontSize: "20px" }}
            >
              <FaCheckCircle className="me-2 text-primary" />
              {selectedCategory?.title}
            </Typography>
            <IconButton onClick={closeModal}>
              <CloseIcon />
            </IconButton>
          </div>

          <Divider className="mb-3" />

          <ul style={{ paddingLeft: "20px", fontSize: "15px", lineHeight: "1.7" }}>
            {selectedCategory?.items?.map((item, i) => (
              <li key={i} className="mb-2">
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </Box>
      </Modal>
    </div>
  );
}
