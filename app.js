const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const MONGO_URL =
  "mongodb+srv://RimjhimRai:GA8.wJa$78Qht*d@cluster0.t2iq3ug.mongodb.net/users";
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("home", { slides });
});
const slides = [
  {
    title: "H2SO4 (SULFURIC ACID) CHEMICAL TANK",
    image: "H2SO4.png",
    content:
      "With their robust load tolerance, crosslinked polyethylene tanks can more than handle the chemical’s heavy weight. The molecular bonding of XLPE and tank wall thickness is particularly important in the bottom third of the tank, where high levels of load are concentrated.",
  },
  {
    title: "HCL (HYDROCHLORIC ACID) TANKS",
    image: "HCL.png",
    content:
      "<b>CONTROLLING A CHEMICAL – AND ITS FUMES</b> Also known as muriatic acid, hydrochloric acid is used to acidize petroleum wells, remove scales from boilers, aid in ore reduction and serve as a chemical intermediate, among other applications.",
  },
  {
    title: "NAOCL (SODIUM HYPOCHLORITE) CHEMICAL TANKS",
    image: "NaOCL.png",
    content:
      "Sodium hypochlorite solutions are very widely used within the water treatment industries. They are also used as a sterile bleach solution from the common domestic applications to the food industries to swimming pools. With the high levels of available chlorine, up to 15%, in a fresh solution, many thousands of tonnes are consumed on a regular basis.",
  },
  {
    title: "NAOH (SODIUM HYDROXIDE) TANKS",
    image: "NaOH.png",
    content:
      "<b>DEFYING A CHEMICAL THAT “FINDS” LEAKS</b> Also known as caustic soda or liquid lye, sodium hydroxide is used to adjust pH in water and wastewater treatment and in the manufacture of chemicals, rayon, cellophane, pulp and paper, aluminum, detergents, soaps and a wide range of other products.",
  },
  {
    title: "HF (HYDROFLUORIC ACID) TANKS",
    image: "HF.png",
    content:
      "<b>REDUCING THE RISK OF HUMAN EXPOSURE</b> Used in the production of aluminum, fluorocarbons and gasoline and for applications like glass etching and uranium processing, hydrofluoric acid is an extremely dangerous chemical that must be handled with the utmost care.",
  },
  {
    title: "H2O2 (HYDROGEN PEROXIDE) TANKS",
    image: "H2O.png",
    content:
      "Available in a variety of concentrations, hydrogen peroxide is used as an oxidizing agent in textile, paper and fur processing. It is also used as a plasticizer, a polymerization catalyst and a water and sewage treatment chemical.",
  },
];
//about
// app.get("/about", (req, res) => {
//   res.render("about", {
//     title: "Technu - Innovative Solutions for Liquid Storage",
//     aboutHeading: "About Us",
//     heading: "Innovative Solutions for Liquid Storage and Handling",
//     subheading: "at Technu.",
//     description:
//       "At Technu, we provide innovative solutions for liquid storage and handling - right from designing, manufacturing to installation and commissioning.",
//     imageSrc: "/public/mission.jpg",
//   });
// });
// Define a route to render the about page
app.get("/about", (req, res) => {
  res.render("about");
});
//Desings
app.get("/desings", (req, res) => {
  res.render("desings");
});
// create a route for Vertical.ejs
app.get("/vertical", (req, res) => {
  res.render("desings/vertical");
});
// create a route for Horizental.ejs
app.get("/horizental", (req, res) => {
  res.render("desings/horizental");
});
// create a route for Cone.ejs
app.get("/cone", (req, res) => {
  res.render("desings/cone");
});
// create a route for Diesel.ejs
app.get("/diesel", (req, res) => {
  res.render("desings/diesel");
});
// create a route for HDPE.ejs
app.get("/hdpe", (req, res) => {
  res.render("desings/hdpe");
});
//products
app.get("/products", (req, res) => {
  res.render("products");
});
// create a route for NaOCL.ejs
app.get("/naocl", (req, res) => {
  res.render("products/naocl");
});
// create a route for h2so4.ejs
app.get("/h2so4", (req, res) => {
  res.render("products/h2so4");
});
// create a route for HCL.ejs
app.get("/hcl", (req, res) => {
  res.render("products/hcl");
});
// create a route for NaoH.ejs
app.get("/naoh", (req, res) => {
  res.render("products/naoh");
});
// create a route for HF.ejs
app.get("/hf", (req, res) => {
  res.render("products/hf");
});
// create a route for H2o2.ejs
app.get("/h2o2", (req, res) => {
  res.render("products/h2o2");
});
// create a route for c2h4.ejs
app.get("/c2h4", (req, res) => {
  res.render("products/c2h4");
});
// create a route for c2h6.ejs
app.get("/c2h6", (req, res) => {
  res.render("products/c2h6");
});
// create a route for c2h6.ejs
app.get("/water-stroge", (req, res) => {
  res.render("products/water-stroge");
});
//contact
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.listen(8080, () => {
  console.log("server is running on port 8080");
});
