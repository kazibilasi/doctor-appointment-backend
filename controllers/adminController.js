// api for adding doctor

import validator from "validator";
import bcrypt from 'bcrypt';


const addDoctor = async(req,res)=>{
  try {
    const {name,email,password,speciality,degree,experience,about,fees,address} = req.body;

    const imageFile = req.file


    // checking for all data to add doctor

    if(!name || !password || !email || !speciality || !degree || !experience || !about || !fees || ! address
    ){
      return res.json({success:false, message:"Missing Details"})
    }

    // validating email formate

    if(!validator.isEmail(email)){
      return res.json({success:false, message:"Please enter a valid email"})
    }

    // validating strong password
    if(password.length<8){
      return res.json({success:false, message:'Please enter a stong password'})
    }

    // hashing doctor password
    const salt = await bcrypt.genSalt(10) 
    const hashedPassword = await bcrypt.hash(password,salt)
  } catch (error) {
    
  }
}

export{addDoctor}