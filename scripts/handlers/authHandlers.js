import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/**
 * Creates a hash from a password to be stored in the database
 * @param password
 * @returns {Promise<*>}
 */
export const hashPassword = async (password) => {
    return bcrypt.hashSync(password, 10);
}

/**
 * Compares a password to a hash
 * @param password
 * @param hash
 * @returns {Promise<void|*>}
 */
export const comparePassword = async (password, hash) => {
    return bcrypt.compare(password, hash);
}

/**
 * Creates a token from a user id
 * @param id
 * @returns {*}
 */
export const createSecretToken = (id) => {
    return jwt.sign({ id },'CS546Secret!!23!!', {
        expiresIn: 3 * 24 * 60 * 60,
    });
};

/**
 * Verifies a token
 * @param token
 * @returns {*}
 */
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, 'CS546Secret!!23!!');
    } catch (err) {
        throw new Error('Invalid token');
    }
};


export function authenticateToken(req, res, next) {
    const token = req.headers.cookie.startsWith("token")
    const authHeader = req.headers.authorization;

    console.log(authHeader);


    if (token == null) return res.sendStatus(401);

    jwt.verify(token, 'CS546Secret!!23!!', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}