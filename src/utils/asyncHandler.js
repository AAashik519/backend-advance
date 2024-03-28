
const asyncHandler = async(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(rew,res,next)).catch((err)=>next(err))
    }
}


// const asyncHandler=(fn)=> async (req,res,next)=>{
// try {
//     await fn(req,res,next)
// } catch (error) {
//      res.status(error.code || 500).json({
//         success: true,
//         message:error.message
//      })
// }
// }


 export {asyncHandler}