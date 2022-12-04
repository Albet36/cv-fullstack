import express from 'express';
import { dataAll } from '../Me/Me.controllers.js';

const api = express.Router();
api.get('/listData',dataAll);

export default api;