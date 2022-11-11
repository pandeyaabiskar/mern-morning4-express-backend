const logData = (req, res, next) => {
    console.log("This is middleware function");
    next();
}

module.exports = { logData };