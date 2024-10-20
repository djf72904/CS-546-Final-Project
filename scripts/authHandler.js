import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const hashPassword = async (password) => {
    return bcrypt.hashSync(password, 10);
}

export const comparePassword = async (password, hash) => {
    return bcrypt.compare(password, hash);
}


export const createSecretToken = (id) => {
    return jwt.sign({ id },'CS546Secret!!23!!', {
        expiresIn: 3 * 24 * 60 * 60,
    });
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, 'CS546Secret!!23!!');
    } catch (err) {
        throw new Error('Invalid token');
    }
};

