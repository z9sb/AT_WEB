const signinAutentication = async (email, password, supabase) => {
  return await supabase.auth.signInWithPassword({ email, password });
};

const logout = async (supabase) => await supabase.auth.signOut();

const singupAutentication = async (email, password, supabase) =>{
  return (await supabase.auth.signUp({ email, password }));
}


const checkSession = async (supabase) => {
  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    if (error) {
      return false;
    }
    if (session) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

export { signinAutentication, checkSession, logout, singupAutentication };
