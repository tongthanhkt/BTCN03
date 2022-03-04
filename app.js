const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.listen(process.env.PORT || 5000)
app.get("/", (req, res) => {

  const data = {
    ...req.query
  };

  if (Object.keys(data).length === 0) {
    return res.render("layout", data);
  }
  if (data.operation === undefined) {
    return res.render("layout", {
      message: "Vui lòng lựa chọn phép tính !!"
    });
  }
  if (data.operation == "cong") {
    data.result = parseFloat(data.x) + parseFloat(data.y);
  } else if (data.operation == "tru") {
    data.result = parseFloat(data.x) - parseFloat(data.y);
  } else if (data.operation == "nhan") {
    data.result = parseFloat(data.x) * parseFloat(data.y);
  } else if (data.operation == "chia") {
    data.result = parseFloat(data.x) / parseFloat(data.y);
  }
  if (isNaN(data.result)) {
    return res.render("layout", {
      message: "Giá trị thứ nhất hoặc 2 không phải là số. Vui lòng nhập hợp lệ !!"
    });
  } else return res.render("layout", data);
})