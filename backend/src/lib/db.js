const MongoClient = require("mongodb").MongoClient;

export async function connectDB(){
    const uri =
        "mongodb+srv://jjmcclain:pw@cluster0-pkid3.mongodb.net/test?retryWrites=true";
    const dbName = "CodeNames"
    const client = new MongoClient(uri, { useNewUrlParser: true });
    await client.connect();

    return db = client.db(dbName);
}

export function getNextSequenceValue(sequenceName){
    var sequenceDocument = client.counters.findAndModify({
        query: {_id: sequenceName },
        update: {$inc:{sequence_value:1}},
        new:true
    });
    return sequenceDocument.sequence_value;
}