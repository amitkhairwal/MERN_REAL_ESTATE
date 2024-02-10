import mongoose from "mongoose";

const listingSchema= new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            require:true,
        },
        address:{
            type: String,
            require: true,
        },
        regularPrice:{
            type:Number,
            required:true,
        },
        discountedPrice:{
            type: Number,
            required: true,
        },
        furnished:{
            type:Boolean,
            required: true,
        },
        parking:{
            type: Boolean,
            default: true,  //default value for parking if not mentioned in the request body
        },
        type:{
            type:String,
            required:true,
        },
        offer:{
            type:Boolean,
            required: true,
        },
        imageUrls:{
            type: Array,
            required: true,
        },
        userRef:{
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,//creates createdAt and updatedAt fields
    }
);


const Listing= mongoose.model('Listing', listingSchema);
export default Listing;