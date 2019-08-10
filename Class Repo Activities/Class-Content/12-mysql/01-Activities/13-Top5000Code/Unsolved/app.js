var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "admin",
  database: "top_songsdb"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // selectArtistSongs();
    selectArtistRepeats();
    // selectYearRange();
    // selectSong();
  });

function selectArtistRepeats() {
    connection.query("SELECT artist, COUNT(*) as count from songs GROUP BY artist HAVING count > 1;")
}

