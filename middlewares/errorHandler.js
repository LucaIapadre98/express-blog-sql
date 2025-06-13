const errorHandler = (err, req, res, next) => {
   const statusCode = err.statusCode ?? 500;
    const errorObject = { error: err.message };
    if(err.data){
        errorObject.data = err.data;
    }
    res.status(statusCode);
    res.json(errorObject);
};
module.exports = errorHandler;