var db = require('./libs/db');
db.query("SELECT * FROM students where id = ?",[
  2
], function(err, rows) {
  if(err) {
    console.log(err);
  } else {
    console.log(rows);
  }
});
