// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", (req, res) => {
    // Get all rows from DB
    let query = "SELECT * FROM chirps";
    connection.query(query, (err, result) => {
      if (err) throw err;
      res.json(result);
    })
  })

  // Add a chirp
  app.post("/api/new", (req, res) => {
    // Add new row to DB
    let query = "INSERT INTO chirps (author, chirp, time_created) VALUES (?, ?, ?)";
    connection.query(query, [req.body.author, req.body.body, req.body.created_at], (err, result) => {
      if (err) throw err;
      res.end()
    })
  })

};
