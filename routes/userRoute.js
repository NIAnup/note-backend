import Route from 'express';
import postUser  from '../controller/user.controller.js';

const router = Route();


router.post('/createUser', postUser);



export default router;