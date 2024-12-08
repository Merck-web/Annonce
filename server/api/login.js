import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { username, password } = body;
    let token = null;
    
    if (username === 'admin' && password === 'secret') {
        token = jwt.sign(
            { id: 1, username: username },
            'mysecrettoken',
            { expiresIn: '1h' },
        );
    }
    console.log(token);
    return { token };
});