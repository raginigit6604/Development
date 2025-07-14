import express from 'express';
import {
    createtask,
    getalltask,
    gettaskbyid,
    updatetask,
    deletetask
} from '../Controller/controller.js';

const router = express.Router();
router.post('/task',createtask);
router.get('/gettask',getalltask);
router.delete('/deletetask/:id',deletetask);
router.put('/updatetask/:id',updatetask);
router.get('/task/:id',gettaskbyid);

export default router;