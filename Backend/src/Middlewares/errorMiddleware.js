const errorHandler = (err,req,res,next) => {

    // sets the status to 500 if previous functin didn't set any error code 
    const statuscode = res.statusCode && res.statusCode !== 200 ? res.statuscode : 500 ;
  
    res.status(statuscode).json({
        message: err.message
    })
}


export default errorHandler;