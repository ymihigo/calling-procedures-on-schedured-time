const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const corOption = {
  methods: "*",
  origin: "*",
};

app.use(cors(corOption));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello from api");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
