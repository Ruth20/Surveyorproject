const Plan = require("../models/plan");
const util = require("./utilityController");

/* Define the controller object */
let planController  = {
    createNewPlan: function(req, res){
        let plan = req.body;
        
        Plan.create(plan,function (err,newPlan){
            if(err) {
                util.sendError(res, err);
            }else{
                util.sendSuccess(res, newPlan);   
            }
    
           
        });
    },
   
    getAllPlans: function (req, res) {
        Plan.find(function(err, plans) {
            if(err) {
                util.sendError(res, err);
            }else{
                util.sendSuccess(res, plans);   
            }
    
            
        });
    },

    updatePlan:function (req,res){
        let updateFields = req.body;
        Plan.findByIdAndUpdate(req.params.id, updateFields,
            function(err,updated){
                if(err) {
                    util.sendError(res, err);
                }else{
                    util.sendSuccess(res, updated);   
                }
        
               
            }
        );
    },

    deletePlan:function(req,res){
        Plan.findByIdAndRemove(req.params.id,
            function(err, deleted){
                if(err) {
                    util.sendError(res, err);
                }else{
                    util.sendSuccess(res, deleted);   
                }
        
                
            }
        );
    },
        


};


/* Export the controller object */
module.exports = planController;