const connection =  require('../db/connection');


module.exports = {
    async create( request, response){
        const { id } =  request.body;
        const ong  = await connection('ongs').where('id', id).select('name').first()

        if (!ong){
            return respose.status(400).json(
                {
                    error: 'No ONG found'
                }
            )
        }

        return response.json(ong)
    }
}