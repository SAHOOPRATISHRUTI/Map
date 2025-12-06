import React, { useState, useEffect, useRef } from "react";
import odishaData from "../data/odishaData.js";
import "./OdishaBook.css";
import {
  Modal,
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  IconButton,
} from "@mui/material";
export default function OdishaBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [highlights, setHighlights] = useState({});
  const pagesRef = useRef([]);

  // Split categories into pages (2 per spread)
  const pages = [];
  for (let i = 0; i < odishaData.categories.length; i += 2) {
    pages.push({
      left: odishaData.categories[i],
      right: odishaData.categories[i + 1] || null,
    });
  }

  // Load highlights
  useEffect(() => {
    const saved = localStorage.getItem("odishaHighlights");
    if (saved) setHighlights(JSON.parse(saved));
  }, []);

  // Save highlights
  useEffect(() => {
    localStorage.setItem("odishaHighlights", JSON.stringify(highlights));
  }, [highlights]);

  // Navigation
  const nextPage = () =>
    currentPage < pages.length - 1 && setCurrentPage(currentPage + 1);
  const prevPage = () =>
    currentPage > 0 && setCurrentPage(currentPage - 1);

  // Highlight selected text
  const handleHighlight = (side) => {
    const sel = window.getSelection();
    if (!sel || sel.toString().trim() === "") return;

    const text = sel.toString();
    const key = `${currentPage}-${side}`;
    setHighlights((prev) => {
      const existing = prev[key] || [];
      if (existing.includes(text)) return prev;
      return { ...prev, [key]: [...existing, text] };
    });
    sel.removeAllRanges();
  };

  const renderCategory = (category, side) => {
    if (!category) return null;
    const key = `${currentPage}-${side}`;
    const pageHighlights = highlights[key] || [];

    // Each item on a separate line, label bold
    let content = category.items
      .map((i) => `<strong>${i.label}-</strong> ${i.value}`)
      .join("<br>");

    // Apply highlights
    pageHighlights.forEach((hl) => {
      const escaped = hl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`(${escaped})`, "gi");
      content = content.replace(regex, '<mark>$1</mark>');
    });

    return (
      <div
        className="category-card"
        onMouseUp={() => handleHighlight(side)}
      >
        <div className="category-header">
          
<span className="category-title">{category.id}</span>
          <span className="category-title">{category.title}</span>
          <span className="category-icon">📖</span>
        </div>
        <div
          className="category-body"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    );
  };

  return (
    <div className="book-wrapper">
      <h2 className="book-main-title">About {odishaData.name}</h2>

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
          <div
            sx={{
              borderRadius: "16px",
              background: "#f6f9ff",
            }}
          >
            <CardContent >
              <p>{odishaData.description}</p>
              <Divider  />
              <p><strong>Total Area:</strong> 1,55,707 km²</p>
              <p><strong>Formation Day:</strong> {odishaData.formationDay}</p>
              <p><strong>Old Names:</strong> {odishaData.oldNames}</p>
              <p><strong>Capital:</strong> {odishaData.capital}</p>
              <p><strong>Blocks:</strong> {odishaData.Blocks}</p>
              <p><strong>Tahasil:</strong> {odishaData.Tahasil}</p>
            </CardContent>
          </div>
        </div>
      </div>
      {/* Book Pages */}
      <div className="book">
        <div
          className="page-spread-container"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {pages.map((spread, idx) => (
            <div key={idx} className="page-spread">
              <div className="page page-left">
                {renderCategory(spread.left, "left")}
              </div>
              <div className="page page-right">
                {spread.right && renderCategory(spread.right, "right")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="book-controls">
        <button onClick={prevPage} disabled={currentPage === 0}>
          ← Previous
        </button>
        <span>
          Page {currentPage + 1} of {pages.length}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
