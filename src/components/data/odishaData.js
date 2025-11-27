// src/data/odishaData.js

const odishaData = {
  name: "Odisha",
  description:
    "Odisha is known for its rich culture, temples, classical dance (Odissi), beaches, and the world-famous Jagannath Temple.",
  map: require("../../assests/Odisha/Odisha_districts_map.svg.png"),

  formationDay: "1st April 1936",
  oldNames: "Udra, Utkal, Kalinga, Kosala",
  capital: "Bhubaneswar",

  categories: [
    {
      title: "General Facts",
      color: "#dffbff", // aqua
      items: [
        { label: "Orissa → Odisha", value: "96th Amendment (23rd Sep 2011)" },
        { label: "Oriya → Odia", value: "97th Amendment (23rd Sep 2011)" },
        { label: "Area Rank in India", value: "8th" },
      ],
    },

    {
      title: "Government",
      color: "#f8d7da", // light red
      items: [
        { label: "Governor", value: "Ganeshi Lal" },
        { label: "Chief Minister", value: "Naveen Patnaik" },
        { label: "Capital", value: "Bhubaneswar" },
      ],
    },

    {
      title: "Demographics",
      color: "#d1ecf1", // light blue
      items: [
        { label: "Population", value: "4.2 Crores (approx.)" },
        { label: "Official Language", value: "Odia" },
        { label: "Area", value: "155,707 km²" },
      ],
    },

    {
      title: "State Symbols",
      color: "#d4edda", // light green
      items: [
        { label: "State Bird", value: "Indian Roller (Neelkanth)" },
        { label: "State Animal", value: "Sambar Deer" },
        { label: "State Tree", value: "Sal Tree" },
        { label: "State Flower", value: "Ashoka Flower" },
      ],
    },

    {
      title: "Culture & Tourism",
      color: "#fff3cd", // light yellow
      items: [
        { label: "Famous Temple", value: "Jagannath Temple, Puri" },
        { label: "Famous Dance", value: "Odissi" },
        { label: "Famous Cuisine", value: "Pakhala, Rasgulla" },
      ],
    },
  ],
};

export default odishaData;
