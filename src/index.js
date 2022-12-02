const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('./src/jwtRS256.key', 'utf8');
const publicKey = fs.readFileSync('./src/jwtRS256.key.pub', 'utf8');

// you can add your keys to .env
// const privateKey = process.env.AUTH_PRIVATE_KEY;
// const publicKey = process.env.AUTH_PUBLIC_KEY;

console.log('PUBLIC KEY', publicKey);

const payload = {
    "iss": "authServer",  // issuer - Identifies principal that issued the JWT.
    "aud": [              // audience - Identifies the recipients that the JWT is intended for.
        "somebody-1"
    ],
    "sub": "789",         // subject - Identifies the subject of the JWT.
    "exp": 1896283948313, // expiration - Identifies the expiration time on and after which the JWT must not be accepted for processing
    "jti": "80928c67a4006fa60096886169f599bd14d53c1cc0f49f9b65dcaf02c0ecce8e", // JWT ID - Case-sensitive unique identifier of the token even among different issuers.
    "data": {
        // You can delete this fields if you don't need them
        "username": "operation_manager",
        "roles": [
            "OPERATION_MANAGER"
        ]
    }
};

const tokenHeader = { algorithm: 'RS256' };

const token = jwt.sign(payload, privateKey, tokenHeader);
const check = jwt.verify(token, publicKey);

console.log('TOKEN', token);
console.log('CHECK', check);

// how to use token in request
console.log(`curl --location --request GET 'https://example-site/example-endpoint' \
--header Authorization: Bearer ${token}`);
