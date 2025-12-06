import supaBase from '../server.cjs'

// CREATE NEW PROFILE
const signUp = async (req, res, next) => {  // ← Add 'next' parameter
    try {
        const { email, password, fullName, role } = req.body;  // ← Add 'role'

        // Step 1: Create auth user
        const { data: authData, error: authError } = await supaBase.auth.signUp({
            email,
            password
        });
        
        if (authError) throw authError;

        // Step 2: Create profile (NOT a function, just code that runs)
        const { data: profile, error: profileError } = await supaBase
            .from('profiles')  // ← Use 'profiles' table, not 'candidates'
            .insert([{
                auth_id: authData.user.id,           // ← Get ID from authData
                full_name: fullName,                  // ← Get fullName from req.body
                role: role || 'recruiter'             // ← Add quotes around 'recruiter'
            }])
            .select()
            .single();

        if (profileError) throw profileError;
        
        // Step 3: Send success response
        res.status(201).json({
            success: true,
            data: {
                user: authData.user,
                profile
            }
        });
        
    } catch (error) {
        next(error);  // ← This passes error to your error handling middleware
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


module.exports = {
    login,
    signOut,
    signUp
}