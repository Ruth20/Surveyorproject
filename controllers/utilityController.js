let utilityController = {
    sendError: function(res, err) {
        res.send({
            status: "failed",
            data: err
        });
    },
    sendSuccess: function(res, data) {
        res.send({
            status: "success",
            data: data
        });
    }
}

module.exports = utilityController;