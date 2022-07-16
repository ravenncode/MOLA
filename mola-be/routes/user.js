import express from 'express';

import { login, authToken, getUser, getUserLoans, getUserSavings } from '../controllers/userCtrl.js';
import { validateToken } from '../middlewares/AuthMiddleware.js';

const router = express.Router();

// all routes in here starts with /user
router.post('/login', login);
router.get('/auth', validateToken, authToken);
router.get('/:id', getUser);
router.get('/loans/:id', getUserLoans);
router.get('/savings/:id', getUserSavings);

export default router;