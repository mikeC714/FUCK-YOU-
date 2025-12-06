import { supaBase } from '../server.cjs'

export const requireAuth = async (req, res) => {                            
    try{
        const token = req.headers.authorization?.replace('Bearer ', '');

        if(!token){
            return res.status(400).json({
                success: false,
                error: "Authorization is not allowed"
            });
        }
        const {data: { user }, error } = await supaBase.auth.getUser(token);

        if(error || !user){
            return res.status(401).json({
                success: false,
                error: "Authorization is not allowed"
            });
        }
        req.user = user
        next();
    }catch(error){
        res.status(401).json({
            success: false,
            error: "Authentication Failed"
        })
    }






}