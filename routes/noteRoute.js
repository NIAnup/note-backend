import { noteController,updateNote } from "../controller/note.controller.js";

import Route from 'express';


const router = Route();



router.post('/add-note',noteController);
router.put('/update-note',updateNote);




export default router;


