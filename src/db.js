import mongoose from 'mongoose';
import config from './config';

(async () => {
  try {
    const db = await mongoose.connect(config.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    console.log('Mongodb connection SUCCESS ✔');
    console.log('Database is connected to:', db.connection.name);
  } catch (err) {
    console.error('Mongodb connection FAIL ❌');
    console.error(err);
    process.exit(1);
  }
})();
