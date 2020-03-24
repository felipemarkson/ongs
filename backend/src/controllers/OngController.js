const crypto = require('crypto');
const connection =  require('../db/connection');

module.exports = {
    async create(request, response){
        const {name, email, wpp, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert(
            {
                id,
                name,
                email,
                wpp,
                city,
                uf,
            }
        )

        console.log(name);
        return response.json(
            { 
                id 
            }
        )
    },
    async index(request, response){
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    }


}