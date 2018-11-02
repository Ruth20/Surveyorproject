const Surveyor= require("../models/surveyor");
const util = require("./utilityController");
const bcrypt =require("bcrypt");
/* Salt Rounds for encrypting passwords */
const saltRounds = 10;

/*implementing login*/
       let surveyorPassword = {
           createNewSurveyor:function(req,res){
               let newSurveyor = req.body.email && req.body.password;
               bcrypt.hash(email,  saltRounds);
               bcrypt.compare(email,password);
               if(res){
                   util.sendSuccess(res,'Successfully Login');
               }
               else{
                   util.sendError(res,'Invalid Password');
               }
               }
           };
       
    // createNewSurveyor: function (req,res);
        // let newSurveyor= req.body.email && req.body.password;
        // bcrypt.hash(email,saltRounds);
        // bcrypt.compare(email, password);
        // if(res){
        //     util.sendSuccess(res,"Successfully Login ");
        // }
        // else{
        //     util.sendError(res,"Invalid Password");

        // };
    







//*Define the controller object */

let surveyorController  = {
    createNewSurveyor:function( req, res){
        let newSurveyor = req.body;
        /* checking if password matches confirmpassword */
        if (newSurveyor.password === newSurveyor.confirmpassword) {
            let hashedPassword = bcrypt.hashSync(newSurveyor.password, saltRounds);
            newSurveyor.password = hashedPassword;
            
            /* There is no error -> proceed to creating account */
            Surveyor.create(newSurveyor, function(error, surveyor) {
                if(error) { 
                    util.sendError(res, "Something bad happened trying to create the account");
                }else{
                    util.sendSuccess(res, surveyor);
                }
            });
        }else{
            util.sendError(res, "Password does not match");
        }
    
    
    },
   


        getAllSurveyor: function (req, res) {
            Surveyor.find(function(err, surveyors) {
                        if(err) {
                            util.sendError(res, err);
                        }else{
                            util.sendSuccess(res, surveyors);   
                        }
            });
        },

updateSurveyor:function (req,res){
       Surveyor.findByIdAndUpdate(req.params.id, 
            req.body,
            function(err,updated){
                if(err) {
                    util.sendError(res, err);
                }else{
                    util.sendSuccess(res, updated);   
                }
               
    
        });
  },

  deleteSurveyor:function(req,res){
  Surveyor.findByIdAndRemove(req.params.id,
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
module.exports = surveyorController;