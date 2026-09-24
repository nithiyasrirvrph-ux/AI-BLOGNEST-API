// 1. KANDIPPAA indha require thaan modhal variyil (Line 1) irukkanum!
const dotenv = require('dotenv');
dotenv.config(); // App-oda matha files load aaguradhuku munaadiye idhu run aaganum

// 2. Adhuku அப்புறம் தான் matha files-a require pannanum
const app = require('./app');
const connectDB = require('./config/db');

// 3. Database connection-a start pannunga
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
