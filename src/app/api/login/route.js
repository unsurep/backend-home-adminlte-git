import { NextResponse } from "next/server";


export const POST = async (resquest) => {
    // destructure incoming data
    const {email,password}=await resquest.json()

    if(email=='wedevill@yahoo.com' && password==='karo') {
        return new NextResponse(JSON.stringify({msg: 'logged in successfully'}), {status:200})
    }

    else{
        return new NextResponse(JSON.stringify({msg:'user details incorrect'}))
    }  
}




// import { NextResponse } from "next/server";


// export async function GET(){
//     return new NextResponse(JSON.stringify({message:'api login page'}), {status:200})

// }