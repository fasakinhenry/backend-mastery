import express from 'express';
const app = express();
import router from './routes/base.route';

app.use('/v1', router);

import { PORT } from './constants/app';

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
