function addLog(req,res){
    try{
    
    }
    catch(err){
        res.status(400).send({
            msg:err
        }).end();
    }
}

function editLog(req,res){

}
function removeLog(req,res){

}

module.exports = {addLog,editLog,removeLog};