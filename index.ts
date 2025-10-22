import express from 'express';
const app = express();

import { PORT } from './constants/app';

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
