import express from 'express';
import cors from 'cors';

import loanAppRoutes from './routes/loanApps.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/loanApps', loanAppRoutes);

app.get('/', (req, res) => {
	res.send('Hello!')
});



app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));