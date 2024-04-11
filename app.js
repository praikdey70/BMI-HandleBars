const path = require("path");
const express = require("express");
const app = express();
const PORT = 4444;

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Public'));
app.set('views', path.join(__dirname, 'views'))

let result;

app.get("/", (req, res) => {
  res.render("index", {
    result
  })
});

app.post("/result", async (req, res) => {
  console.log(req.body);
  try {
    const {weight} = req.body;
    const {height} = req.body;
    let result = (weight/ ((height*height)/10000)).toFixed(2);
    console.log(result);
    // const {resultans} = req.body;
    if (result < 18.5) {
      res.send(result);
    
    } 
    else if (result > 18.5 && result < 24.9) {
      res.send(result);
    
    } 
    else if (result > 25.0 && result < 29.9) {
      res.send(result);
    
    } 
    else if (result > 30.0) {
      res.send(result);
    
    } 
    else if (result > 10 && result < 40) {
      res.send(result);
    
    }
  } 
  catch (err) {
    res.send(err);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:` + PORT);
});
