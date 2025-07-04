// require("dotenv").config();
// const mysql = require("mysql2"); //Connects Node.js to MySQL and executes arrayQuerries.
// const express = require("express"); //A framework for handling HTTP requests.
// const cors = require("cors"); //Allows API access from different domains.
// const bodyParser = require("body-parser"); //Parses incoming request bodies (JSON & form data).

// const app = express(); //
// // const corsOptions = {
// //   origin: ["http://localhost:5173/iphone", "https://www.apple.com"],
// // };

// const corsOptions = {
//   origin: ["http://localhost:5173", "https://applereactfend.degefagomora.com","https://applereactbend.degefagomora.com", "https://www.apple.com"], // allow your whole dev app
//   methods: ["GET", "POST"],
// };
// app.use(cors(corsOptions));

// app.use(cors(corsOptions)); // Pass the options to cors()
// app.use(bodyParser.json()); //
// app.use(bodyParser.urlencoded({ extended: true })); //

// // Create a Single MySQL Connection
// const connection = mysql.createConnection({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
// });

// // Connect to MySQL
// connection.connect((err) => {
//   if (err) {
//     console.error("Database connection failed:", err);
//     process.exit(1);
//   }
//   console.log("Connected to MySQL Database!");
// });

// // Install: Create tables
// app.get("/install", (req, res) => {
//   const arrayQuerries = [
//     `CREATE TABLE IF NOT EXISTS Products (
//       product_id INT AUTO_INCREMENT PRIMARY KEY,
//       product_url VARCHAR(255) NOT NULL,
//       product_name VARCHAR(255) NOT NULL
//     );`,
//     `CREATE TABLE IF NOT EXISTS ProductDescription (
//       description_id INT AUTO_INCREMENT PRIMARY KEY,
//       product_id INT NOT NULL,
//       product_brief_description TEXT NOT NULL,
//       product_description TEXT NOT NULL,
//       product_img TEXT NOT NULL,
//       product_link VARCHAR(255) NOT NULL,
//       FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE
//     );`,
//     `CREATE TABLE IF NOT EXISTS ProductPrice (
//       price_id INT AUTO_INCREMENT PRIMARY KEY,
//       product_id INT NOT NULL,
//       starting_price VARCHAR(255) NOT NULL,
//       price_range VARCHAR(255) NOT NULL,
//       FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE
//     );`,
//     `CREATE TABLE IF NOT EXISTS Users (
//       user_id INT AUTO_INCREMENT PRIMARY KEY,
//       user_name VARCHAR(255) NOT NULL,
//       user_password VARCHAR(255) NOT NULL
//     );`,
//     `CREATE TABLE IF NOT EXISTS Orders (
//       order_id INT AUTO_INCREMENT PRIMARY KEY,
//       product_id INT NOT NULL,
//       user_id INT NOT NULL,
//       FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE,
//       FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
//     );`,
//   ];

//   arrayQuerries.forEach((query) => {
//     connection.query(query, (err, result) => {
//       if (err) {
//         console.error("Error creating tables:", err);
//         return res.status(500).send("Error creating tables");
//       }
//     });
//   });

//   res.send("Tables Created Successfully");
// });

// // Insert Product, User, and Order
// app.post("/add-product", (req, res) => {
//   const {
//     product_url,
//     product_name,
//     product_brief_description,
//     product_description,
//     product_img,
//     product_link,
//     starting_price,
//     price_range,
//     user_name,
//     user_password,
//   } = req.body;
//   // console.log(req);

//   // Insert Product
//   connection.query(
//     "INSERT INTO Products (product_url, product_name) VALUES (?, ?)",
//     [product_url, product_name],
//     (err, productResult) => {
//       if (err) {
//         console.error("Error inserting product:", err);
//         return res.status(500).json({ message: "Error inserting product" });
//       }

//       const newProductId = productResult.insertId;

//       // Insert Product Description
//       connection.query(
//         "INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES (?, ?, ?, ?, ?)",
//         [
//           newProductId,
//           product_brief_description,
//           product_description,
//           product_img,
//           product_link,
//         ],
//         (err) => {
//           if (err) console.error("Error inserting product description:", err);
//         }
//       );

//       // Insert Product Price
//       connection.query(
//         "INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES (?, ?, ?)",
//         [newProductId, starting_price, price_range],
//         (err) => {
//           if (err) console.error("Error inserting product price:", err);
//         }
//       );

//       // Insert User
//       connection.query(
//         "INSERT INTO Users (user_name, user_password) VALUES (?, ?)",
//         [user_name, user_password],
//         (err, userResult) => {
//           if (err) {
//             console.error("Error inserting user:", err);
//             return res.status(500).json({ message: "Error inserting user" });
//           }

//           const newUserId = userResult.insertId;

//           // Insert Order
//           connection.query(
//             "INSERT INTO Orders (product_id, user_id) VALUES (?, ?)",
//             [newProductId, newUserId],
//             (err) => {
//               if (err) {
//                 console.error("Error inserting order:", err);
//                 return res
//                   .status(500)
//                   .json({ message: "Error inserting order" });
//               }

//               res.send({
//                 message: "Product, User, and Order added successfully!",
//               });
//             }
//           );
//         }
//       );
//     }
//   );
// });

// // Get all iPhones
// app.get("/iphones", (req, res) => {
//   connection.query(
//     `SELECT * FROM Products 
//     INNER JOIN ProductDescription ON Products.product_id = ProductDescription.product_id 
//     INNER JOIN ProductPrice ON Products.product_id = ProductPrice.product_id`,
//     (err, rows) => {
//       if (err) {
//         console.error("Error retrieving products:", err);
//         return res.status(500).send("Error retrieving products");
//       }
//       res.json({ products: rows });
//     }
//   );
// });

// // Get all user names
// app.get("/users", (req, res) => {
//   connection.query(
//     "SELECT user_name FROM Users", // Query to fetch only user names
//     (err, rows) => {
//       if (err) {
//         console.error("Error retrieving users:", err);
//         return res.status(500).send("Error retrieving users");
//       }
//       res.json({ users: rows });
//     }
//   );
// });

// // Start Server
// app.listen(process.env.PORT || 3001, () => {
//   console.log(`Server running on port ${process.env.PORT || 3001}`);
// });




require("dotenv").config();
const mysql = require("mysql2"); // Connects Node.js to MySQL and executes queries.
const express = require("express"); // Framework for handling HTTP requests.
const cors = require("cors"); // Allows API access from different domains.
const bodyParser = require("body-parser"); // Parses incoming request bodies.

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://applereactfend.degefagomora.com",
    "https://applereactbend.degefagomora.com",
    "https://www.apple.com",
  ],
  methods: ["GET", "POST"],
};
app.use(cors(corsOptions)); // Use CORS middleware once

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create MySQL connection
const connection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
  console.log("Connected to MySQL Database!");
});

// Install: Create tables endpoint
app.get("/install", (req, res) => {
  const arrayQueries = [
    `CREATE TABLE IF NOT EXISTS products (
      product_id INT AUTO_INCREMENT PRIMARY KEY,
      product_url VARCHAR(255) NOT NULL,
      product_name VARCHAR(255) NOT NULL
    );`,
    `CREATE TABLE IF NOT EXISTS productdescription (
      description_id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT NOT NULL,
      product_brief_description TEXT NOT NULL,
      product_description TEXT NOT NULL,
      product_img TEXT NOT NULL,
      product_link VARCHAR(255) NOT NULL,
      FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
    );`,
    `CREATE TABLE IF NOT EXISTS productprice (
      price_id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT NOT NULL,
      starting_price VARCHAR(255) NOT NULL,
      price_range VARCHAR(255) NOT NULL,
      FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
    );`,
    `CREATE TABLE IF NOT EXISTS users (
      user_id INT AUTO_INCREMENT PRIMARY KEY,
      user_name VARCHAR(255) NOT NULL,
      user_password VARCHAR(255) NOT NULL
    );`,
    `CREATE TABLE IF NOT EXISTS orders (
      order_id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT NOT NULL,
      user_id INT NOT NULL,
      FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
    );`,
  ];

  // Execute each query in sequence
  arrayQueries.forEach((query) => {
    connection.query(query, (err, result) => {
      if (err) {
        console.error("Error creating tables:", err);
        return res.status(500).send("Error creating tables");
      }
    });
  });

  res.send("Tables Created Successfully");
});

// Insert Product, User, and Order endpoint
app.post("/add-product", (req, res) => {
  const {
    product_url,
    product_name,
    product_brief_description,
    product_description,
    product_img,
    product_link,
    starting_price,
    price_range,
    user_name,
    user_password,
  } = req.body;

  // Insert Product
  connection.query(
    "INSERT INTO products (product_url, product_name) VALUES (?, ?)",
    [product_url, product_name],
    (err, productResult) => {
      if (err) {
        console.error("Error inserting product:", err);
        return res.status(500).json({ message: "Error inserting product" });
      }

      const newProductId = productResult.insertId;

      // Insert Product Description
      connection.query(
        "INSERT INTO productdescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES (?, ?, ?, ?, ?)",
        [
          newProductId,
          product_brief_description,
          product_description,
          product_img,
          product_link,
        ],
        (err) => {
          if (err) console.error("Error inserting product description:", err);
        }
      );

      // Insert Product Price
      connection.query(
        "INSERT INTO productprice (product_id, starting_price, price_range) VALUES (?, ?, ?)",
        [newProductId, starting_price, price_range],
        (err) => {
          if (err) console.error("Error inserting product price:", err);
        }
      );

      // Insert User
      connection.query(
        "INSERT INTO users (user_name, user_password) VALUES (?, ?)",
        [user_name, user_password],
        (err, userResult) => {
          if (err) {
            console.error("Error inserting user:", err);
            return res.status(500).json({ message: "Error inserting user" });
          }

          const newUserId = userResult.insertId;

          // Insert Order
          connection.query(
            "INSERT INTO orders (product_id, user_id) VALUES (?, ?)",
            [newProductId, newUserId],
            (err) => {
              if (err) {
                console.error("Error inserting order:", err);
                return res
                  .status(500)
                  .json({ message: "Error inserting order" });
              }

              res.send({
                message: "Product, User, and Order added successfully!",
              });
            }
          );
        }
      );
    }
  );
});

// Get all iPhones endpoint
app.get("/iphones", (req, res) => {
  connection.query(
    `SELECT * FROM products 
    INNER JOIN productdescription ON products.product_id = productdescription.product_id 
    INNER JOIN productprice ON products.product_id = productprice.product_id`,
    (err, rows) => {
      if (err) {
        console.error("Error retrieving products:", err);
        return res.status(500).send("Error retrieving products");
      }
      console.log("Fetched products count:", rows.length);
      res.json({ products: rows });
    }
  );
});

// Get all user names endpoint
app.get("/users", (req, res) => {
  connection.query("SELECT user_name FROM users", (err, rows) => {
    if (err) {
      console.error("Error retrieving users:", err);
      return res.status(500).send("Error retrieving users");
    }
    res.json({ users: rows });
  });
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
