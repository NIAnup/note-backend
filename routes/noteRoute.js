import { deleteNote, getNote, noteController,updateNote } from "../controller/note.controller.js";

import Route from 'express';


const router = Route();



router.post('/add-note',noteController);
router.put('/update-note',updateNote);
router.get('/get-note',getNote);
router.delete('/delete-note',deleteNote);




export default router;


