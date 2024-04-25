import express from 'express'
import listAll from '../controllers/product/listAll.js';
import getById from '../controllers/product/getById.js';

const router = express.Router();

// Rotas do product /product

router.get('/login', listAll)

router.get('/logout', getById)

export default router