import express from 'express';
import Hello from '../controllers/base.controller';

const router = express.Router();

router.get('/', Hello);

export default router;
