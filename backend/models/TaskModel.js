import mongoose, { Mongoose } from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
    index: true,
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  dueDate:{
    type:Date,index:true
  },
  projectId:{type:mongoose.Schema.Types.ObjectId, ref:'Project',required:true},
  assignedTo:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
  isDeleted:{type:Boolean,default:true}
},{
    timestamps:true
});

export default mongoose.model('Task',TaskSchema);