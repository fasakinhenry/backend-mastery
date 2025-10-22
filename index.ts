import express from 'express';
const app = express();

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
