import { deleteNote, getNote, noteController,updateNote } from "../controller/note.controller.js";

import Route from 'express';


const router = Route();



router.post('/add-note',noteController);
router.put('/update-note',updateNote);
router.put('/get-note',getNote);
router.put('/delete-note',deleteNote);




export default router;


