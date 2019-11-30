const mongoose=require('mongoose');
const Schema=mongoose.Schema;


let interviewSchema = new Schema({
    interviewname:{
        type : String
    },
    cname : {
        type :String
    },
    clientName: {
        type : String
    },
    positionTitle : {
        type :String
    },
    openingDate : {
        type :String
    },
    closingdate : {
        type: String
    },
    interviewer: {
        type : String
    },
    interviewerOwner : {
        type : String
    },
    location : {
        type : String
    },
    description : {
        type : String
    }
})


module.exports = mongoose.model('Interview' , interviewSchema);