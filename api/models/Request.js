import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema({
  aircraftReg: {
    type: String,
    required: true,
  },
  orderNo: {
    type: Number,
    default: 100001
  },
  requestBy: {
    type: String,
    required: true,
  },
  requestDate:{
    type: String, 
  },
  closeDate:{
    type: String, 
  },
  closeBy:{
    type: String, 
  },
  idNumber: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  equipment: {
    type: String,
    required: true,
  },
  photos: {
    type: String,
  },
  remark: {
    type: String,
  },
  progress: {
    type: String,
    default: "OPEN",
  }
},
{ timestamps: true },
);

export default mongoose.model("Request", RequestSchema)