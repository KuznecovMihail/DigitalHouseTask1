const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/submit", (req, res) => {
  res.json({ message: "Форма успешно отправлена!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
