export function validateFormData(fullName,email,password,isSignUp){
    const isFullNameValid = /^[A-Z][a-z]+(?: [A-Z][a-z]+)+$/.test(fullName);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password);
    if(isSignUp){
        if(!isFullNameValid) return "Full Name is not valid" 
    }
    if(!isEmailValid) return "Email ID is not valid"
    if(!isPasswordValid) return "Password is not valid"

    return null
}