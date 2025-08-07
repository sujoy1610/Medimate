// controllers/adminController.js
import validator from "validator"
import bcrypt from "bcryptjs"
import { v2 as cloudinary } from "cloudinary"
import doctorModel from "../models/doctorModel.js"
import jwt from "jsonwebtoken"

// api for adding doctor
const addDoctor = async (req, res) => {
  try {
    console.log("🔥 req.body:", req.body)
    console.log("🔥 req.file:", req.file)

    const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
    const imageFile = req.file

    if (!imageFile) {
      return res.status(400).json({ success: false, message: "Image file is missing" })
    }

    if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
      return res.json({ success: false, message: "MISSING DETAILS" })
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "PLEASE ENTER A VALID EMAIL" })
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "PLEASE ENTER A STRONG PASSWORD" })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image"
    })
    const imageUrl = imageUpload.secure_url

    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now()
    }

    const newDoctor = new doctorModel(doctorData)
    await newDoctor.save()

    res.json({ success: true, message: "DOCTOR ADDED" })
  } catch (error) {
    console.error("❌ Error:", error)
    res.status(500).json({ success: false, message: error.message })
  }
}

// api for admin login

const loginAdmin = async (req, res) => {
  try {

    const {email,password} = req.body
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email+password,process.env.JWT_SECRET)
      res.json({success:true,token})
    }
    else{
      res.json({success:false,message:"INVALID CREDENTIALS"})
    }

  } catch (error) {
    console.error("❌ Error:", error)
    res.status(500).json({ success: false, message: error.message })

  }
}

export { addDoctor, loginAdmin }
