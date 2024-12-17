export const validatePassword = (password) => {
    if (!password) 
        throw new Error("Error: Password must be input.");
    if (typeof password !== 'string') 
        throw new Error('Error: Input password must be a string.');
    if (/\s/.test(password)) 
        throw new Error('Error: Input password cannot contain spaces.');
    if (password.length < 8) 
        throw new Error ('Error: Input password must be at least 8 characters long.');
    if (!/\d/.test(password)) 
        throw new Error('Error: Input password must contain at least one number.');
    // Not with our seed right now
    // if (!/[A-Z]/.test(password)) 
    //   throw 'Error: Input password must contain at least one uppercase letter.';
    // if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) 
    //   throw 'Error: Input password must contain at least one special character.';
      return true;
}

export const validateUserName = (userName) => {
    if (!userName) 
        throw new Error("Error: Display name must be input.");
    if (typeof userName !== 'string') 
        throw new Error('Error: Input display name must be a string.');
    if (/\s/.test(userName)) 
        throw new Error('Error: Input display name cannot contain spaces.');
    // if(!uuidValidate(userName)) 
    //     throw new Error("editDisplayName Error: user_id must be valid uuid");
    // if (!/\d/.test(password)) 
    //     throw new Error('Error: Input password must contain at least one number.');
    // Not with our seed right now
    // if (!/[A-Z]/.test(password)) 
    //   throw 'Error: Input password must contain at least one uppercase letter.';
    // if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) 
    //   throw 'Error: Input password must contain at least one special character.';
    return true;
}