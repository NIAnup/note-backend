import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import note from '../model/note.js';
import ApiResponse from '../utils/apiResponse.js';





const noteController = asyncHandler(async (req, res) => {


    try {
        let { title, notefield } = req.body;

        if ([title, notefield].some((e) => e.trim() == ' ')) {
            return res.status(400).json(new ApiError(400, "title and note are required"));
        }

        let noteData = await note.create(
            {
                title,
                content: notefield,

            }
        );

        return res.status(201).json(new ApiResponse(201, noteData, 'Successfull create '));
    } catch (error) {
        return res.status(400).json(new ApiError(400, `${error}`));
    }
});



const updateNote = asyncHandler(async (req, res) => {
    try {
        let { noteId } = req.query;
    let { title, content } = req.body;
    if (noteId == " " && noteId.trim() === "") return res.status(400).json(new ApiError(400,  "add the id of the notes"));
    const updateNote = await note.findByIdAndUpdate(noteId, { title, content },
        { new: true, runValidators: true }
    );

    if(!updateNote){
return res.status(404).json(new ApiError(400,  "didn't find the data add new one "));
    }

    return  res.status(200).json(new ApiResponse(200, updateNote, "successfull data is submit"))
    } catch (error) {
        console.log(`error ${error}`);
    }
})


export { noteController , updateNote}
