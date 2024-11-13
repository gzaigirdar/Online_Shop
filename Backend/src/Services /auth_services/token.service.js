import jwt from 'jsonwebtoken'


async function get_token(user_info,secret,expries){


    const token = await jwt.sign(user_info,secret,{ expiresIn:expries})
    return token;
    
}

export default get_token;