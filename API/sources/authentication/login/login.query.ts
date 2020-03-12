import knex from '../../../config/db_connection';

class Query {

    async login(obj: any){
        const data = await knex.select(["usuario", "passwd"])
            .from('system_usuarios')
            .where({ usuario: obj.userName });

        return data;
    }
}
export default Query;
