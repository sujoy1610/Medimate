import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    image: { type: String, required:true }, // URL to profile image
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true }, // e.g. "5 years"
    about: { type: String, required: true }, // short bio
    available: { type:Boolean, default:true }, // days e.g. ["Monday", "Wednesday"]
    fees: { type: Number, required: true },
    address: { type:Object, required: true },
    date: { type: Number, required:true },
    slots_booked: { type: Object, default: {} } // e.g. ["10:00 AM", "3:30 PM"]

},{minimize:false})

const doctorModel = mongoose.models.doctor || mongoose.model(`doctor`,doctorSchema)

export default doctorModel