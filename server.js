const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'business_db'
  },
  console.log(`Connected to the business_db database.`)
);

// delete query

db.query(`DELETE FROM course_names WHERE id = ?`, InputEvent, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});



// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});