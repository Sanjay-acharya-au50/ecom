const mongoose  = require("mongoose")

const OrderSchema = new mongoose.Schema({
    userId : {
        type : String, required : true, unique : true
    },
    products : [
        {
            productId : {
                type :String
            },
            quantity : {
                type: Number,
                deafault : 1,
            }

        }
    ],
    amount : {type : Number, required : true},
    address : {type : object, required : true},
    status : {type : string, default : "pending"},
},
    {timestamps : true}
)

module.exports = mongoose.model("user", OrderSchema)