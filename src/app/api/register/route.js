import { dbConnect } from "@/dbconnect/connect";
import User from "@/models/register";
import { NextResponse } from "next/server";

export const POST =async (request) => {
    // taking incoming data from frontend
    const {name, email, country, tel, password}=await request.json()

    // store user details in mongodb
    await dbConnect()

    const userDetails=new User({
        name:name,
        email:email,
        country:country,
        tel:tel,
        password:password
    })

    // saving user in db
    await userDetails.save()

    if(!userDetails) {
        return new NextResponse(JSON.stringify({msg:'user registration failed'}), {status:400})
    }
    return new NextResponse(JSON.stringify({msg:'user registration successfull'}, {status:201}))
  
}














// import { NextResponse } from "next/server";


// export async function GET(){
//     return new NextResponse(JSON.stringify({message:'api register page'}), {status:200})
    
// }

