const express = require('express');
const cors = require('cors');
const multer = require('multer');
const pool = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());
app.use('/api/users', upload.array('images', 10), userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
