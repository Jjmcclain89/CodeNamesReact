const MongoClient = require("mongodb").MongoClient;

const uri =
    "mongodb+srv://jjmcclain:pw@cluster0-pkid3.mongodb.net/test?retryWrites=true";

const db = new MongoClient(uri, { useNewUrlParser: true });

export function getNextSequenceValue(sequenceName){
    var sequenceDocument = db.counters.findAndModify({
       query:{_id: sequenceName },
       update: {$inc:{sequence_value:1}},
       new:true
    });
    return sequenceDocument.sequence_value;
}

export default db;