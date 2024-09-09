import mongoose from "mongoose"

export const dbConnect = async()=>{

    try {
        // here we want to establish the connection with mongodb atlas
        const conn=await mongoose.connect(process.env.MONGODB_URL)
        if(conn){
            console.log('database connected')
            return conn
        }
        
    } 
    
    
    catch (error) {
        console.log(err.message)
        
    }

}