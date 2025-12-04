// src/data/odishaData.js
import OdishaMap from "../../assests/Odisha/Odisha_districts_map.svg.png";

const odishaData = {
  name: "Odisha",
  description:
    "Odisha is known for its rich culture, temples, classical dance (Odissi), beaches, and the world-famous Jagannath Temple.",
  map: OdishaMap,

  formationDay: "1st April 1936",
  oldNames: "Udra, Utkal, Kalinga, Kosala",
  capital: "Bhubaneswar",
  Blocks: "314",
  Tahasil: "317",
  categories: [
    {
      title: "General Facts",
      color: "#dffbff", // aqua
      items: [
        //  { label: "Blocks", value: "314" },
        //   { label: "Tahasil", value: "317" },
        { label: "Orissa → Odisha", value: "96th Amendment (23rd Sep 2011)" },
        { label: "Oriya → Odia", value: "97th Amendment (23rd Sep 2011)" },
        { label: "Area Rank in India", value: "8th" },
        { label: "In 1936 Odisha have", value: "6 districts" },
        { label: "In 1949 Odisha have", value: "13 districts" },
        { label: "In 1993 Odisha have", value: "30 districts" },
        { label: "Smallest District", value: "Jagatsinghpur" },
        { label: "Largest District", value: "Mayurbhanj" },
        { label: "Odisha have 3 divisions", value: "Central(Cuttack), South(Berhampur), North(Sambalpur)" },
        { label: "Bihar & odisha get Separated from Bengal Residency", value: "22nd Mar 1912" },

      ],
    },

    {
      title: "Boundary",
      color: "#dffbff", // aqua
      items: [
        {
          label: "Total Boundaries",
          value: "4 (West Bengal, Jharkhand, Chhattisgarh, Andhra Pradesh)"
        },
        {
          label: "West Bengal Border (2)",
          value: "Balasore, Mayurbhanj"
        },
        {
          label: "Jharkhand Border (3)",
          value: "Mayurbhanj, Keonjhar, Sundargarh"
        },
        {
          label: "Chhattisgarh Border (8)",
          value: "Sundargargh, Jharsuguda, Bargarh, Nuapada, Kalahandi, Nabarangpur, Koraput, Malkangiri "
        },
        {
          label: "Andhra Pradesh Border (5)",
          value: "Malkangiri, Koraput, Rayagada, Gajapati, Ganjam "
        },
      ],
    },

    {
      title: "Symbols Of Odisha",
      color: "#ff9fb7ff", // aqua
      items: [
        {
          label: "State Animal",
          value: "Sambar(Deer)"
        },
        {
          label: "State Bird",
          value: "Indian Roller (ଭଦଭଦଳିଆ)"
        },
        {
          label: "State Flower",
          value: "Ashoka"
        },
        {
          label: "State Tree",
          value: "Ashwathha"

        },
        {
          label: "State Fish",
          value: "Mahanadi mahseer"
        },
        {
          label: "State Song",
          value: "Bande Utkala Janani (2020) Kantakabi Laxmikanta Mohapatra"
        },

      ],
    },
    {
      title: "Population (2011 Census)",
      color: "#ffcd9fff", // aqua
      items: [
        {
          label: "Total Population",
          value: "41,974,218"
        },
        {
          label: "Population Wise Rank",
          value: "11th"
        },
        {
          label: "Highest Population",
          value: "Ganjam"
        },
        {
          label: "Lowest Population",
          value: "Deogarh"
        },
        {
          label: "Male Population",
          value: "21,212,136"
        },
        {
          label: "Female Population",
          value: "20,762,082"
        },
        {
          label: "Population Growth",
          value: "13.97%"
        },
        {
          label: "Dense Population",
          value: "Khorda"
        },
        {
          label: "Highest Sex Ratio",
          value: "Khorda"
        },
        {
          label: "Lowest Sex Ratio",
          value: "Nayagarh"

        },
        {
          label: "According to 2011C ST Population Percentage in Odisha",
          value: "32"

        },
      ],
    },

    {
      title: "Language",
      color: "#ff9fb7ff", // aqua
      items: [
        {
          label: "Official Language",
          value: "Odia (84%)"
        },
        {
          label: "Total Official Language",
          value: "22"
        },
        {
          label: "Total Official Language",
          value: "11"
        },
        {
          label: "Odia is also Classical language on ",
          value: "11th March 2014"
        },

      ],
    },
    // to be continue


    {
       id:"6",
      title: "National Parks",
      color: "#dffbff", // aqua
      items: [
        {
          label: "Similipal National Park ",
          value: " Tiger Reserve 🐯 (Mayurbhanj)"
        },
        {
          label: "BhitaraKanika National Park",
          value: " Saltwater Crocodile, White Crocodile 🐊 (Kendrapada)"
        },
        {
          label: "Bird Sanctuary",
          value: " Chilika"
        },
        {
          label: "Satkosia Tiger Reserve 🐯",
          value: " Angul "
        },
        {
          label: "Hadgarh Wild Life Sanctuary",
          value: " Mayurbhanj & Keonjhar"
        },
        {
          label: "Nandankanan Zoo",
          value: " Bhubaneswar - 1960"
        },
        {
          label: "",
          value: " Sal Tree Covers 33% of the forest odisha"
        },
        {
          label: "",
          value: " Odisha is the 3rd largest produce Of Kendu Leaf(Green Gold)"
        },
        {
          label: "",
          value: "Odisha Forest Development Cor. Pvt. Ltd. come into existence on 1962"
        },
      ],
    },

 {
  id:"7",
      title: "Rivers & Dam",
      color: "#f1d0a5", // aqua

      items: [
        {
          label: "Hirakud Dam",
          value: "Situated On Mahanadi River - (Sambalpur)"
        },
        {
          label: "Jalput Dam",
          value: "Situated On Machkunda River - (Odisha - A.P Border)"
        },
        {
          label: "Rengali Dam",
          value: "Situated On Brahmani River - (Anugul)"
        },
        {
          label: "Mandira Dam",
          value: "Situated On Sank River - (Sundrargah)"
        },
         {
          label: "Patora Dam",
          value: "Situated On Jonk River - (Nuapada)"
        },
      ],
    },


  ]
};

export default odishaData;
