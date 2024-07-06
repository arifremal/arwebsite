// import mongoose from 'mongoose';
// import app from './app';
// import config from './app/config';

// async function main() {
//   try {
//     await mongoose.connect(config.databas_url as string);

//     app.listen(config.port, () => {
//       console.log(`app is listening on port ${config.port}`);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// main();
import config from "./app/config";
import app from "./app";

// const mongoose = require('mongoose');
import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();