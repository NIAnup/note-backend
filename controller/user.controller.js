import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../model/user.js";


const postUser = asyncHandler(async (req,res)=>{
   try {
    let {username ,email, password ,confirmPassword} = req.body;

   if ([username,email,password,confirmPassword].some((e)=>!e||e.trim()==='')) {
    return res.status(400).json( new ApiError(400,"all field is required"));
   }

   if(password!= confirmPassword){
    return res.status(400).json(new ApiError(400,"Password is not matching"));
   }

   const addUserData = await User.create({
    username,
    email,
    password
   })

   return res.status(201).json(new ApiResponse(201,addUserData,"SucessFull create User"));
   } catch (error) {
    console.log(error);
    
    return res.status(500).json(new ApiError(500,`${error.toString()}`));
   }
});



export default postUser;