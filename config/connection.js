const mongoClient=require('mongodb').MongoClient
const state={
    db:null
}
module.exports.connect=function(done){
    const url='mongodb+srv://praveensajeev:9995398596@cluster0.qc11s.mongodb.net/BE-ARC?retryWrites=true&w=majority'
    const dbname='BE-ARC'

    mongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname)
       
    })
    done()
}
module.exports.get=function(){
    return state.db
}