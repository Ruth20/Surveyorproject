let Request = require("../models/request");
const util = require("./utilityController");

// Define the controller object */
let requestController  = {
    createNewRequest:function( req, res){
        let NewRequest= req.body;
        Request.create(NewRequest,function (err,request){
            if(err) {
                util.sendError(res, err);
            }else{
                util.sendSuccess(res, request);   
            }
           
                    });
    },
   


    getAllRequests: function (req, res) {
       Request.find(function(err, requests) {
        if(err) {
            util.sendError(res, err);
        }else{
            util.sendSuccess(res, requests);   
        }
       
                });
            },

updateRequest: function (req,res){
       Request.findByIdAndUpdate(req.params.id, 
            req.body,
            function(err,updated){
                if(err) {
                    util.sendError(res, err);
                }else{
                    util.sendSuccess(res, updated);   
                }
               
               
    
        });
  },

  deleteRequest:function(req,res){
  Request.findByIdAndRemove(req.params.id,
    function(err, deleted){
        if(err) {
            util.sendError(res, err);
        }else{
            util.sendSuccess(res, deleted);   
        }
      
                  
        });
    },
    


};


/* Export the controller object */
module.exports = requestController;