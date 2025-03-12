const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const paymentRoutes = require('./routes/paymentroutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/payments', paymentRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
