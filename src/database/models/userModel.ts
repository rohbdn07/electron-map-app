
// import fs from "fs";
// // import  db  from "../connection";

// const userModel = () => {
//     if (fs.statSync("database.db").size === 0) {
//         console.log("Creating database");
//         db.exec(`
//           CREATE TABLE IF NOT EXISTS user (
//             id STRING (21,21) PRIMARY KEY NOT NULL, 
//             name STRING (0, 255) NOT NULL, 
//             birthDay STRING (10, 10), 
//             email STRING (0, 255) NOT NULL, 
//             age INT NOT NULL
//           );
//         `);
//       }
 
// }

// export default userModel