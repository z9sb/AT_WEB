const signinAutentication = async (email, password,supabase) => {
    return await supabase.auth.signInWithPassword({email, password});
}

const checkSession = async (supabase) => {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
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

export {
    signinAutentication,
    checkSession
}