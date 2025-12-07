import supaBase from "../config/supabase"

// CREATE NEW PROFILE
const signUp = async (req, res, next) => { 
    try {
        const { email, password, fullName, role } = req.body;  

        
        const { data: authData, error: authError } = await supaBase.auth.signUp({
            email,
            password
        });
        
        if (authError) throw authError;

        
        const { data: profile, error: profileError } = await supaBase
            .from('profiles')
            .insert([{
                auth_id: authData.user.id,           
                full_name: fullName,                  
                role: role || 'recruiter'             
            }])
            .select()
            .single();

        if (profileError) throw profileError;
        
        res.status(201).json({
            success: true,
            data: {
                user: authData.user,
                profile
            }
        });
        
    } catch (error) {
        next(error);  
    }
};

const login = async (req, res, next) => {
    try{
        const { email, password } = req.body;

        const { data, error } = await supaBase.auth.signInWithPassword({
            email,
            password
        })

        if(error) throw error

        const { data: profile} = await supaBase
            .from('profile')
            .select('*')
            .eq('auth.id', data.user.id)
            .single();
        
        res.status(200).json({
            success: true,
            data: {
                user: data.user,
                session: data.session,
                profile
            }
        })
    }catch(error){
        next(error)
    }
}

const signOut = async (req,res) => {
    try{

        const { error } = await supaBase.auth.signOut();

        if(error) throw error

        res.status(200).json({
            success: true,
            message: "Logged Out"
        });
    }catch(error){
        next(error);
    }
};

const requireAuth = async (req, res) => {
    
}   


module.exports = {
    login,
    signOut,
    signUp,
    requireAuth
}