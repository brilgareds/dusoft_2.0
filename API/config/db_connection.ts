

const knex = require('knex')({
    client: 'pg',
    version: '10',
    connection: {
        host : 'devdb10duana.cosmitet.net',
        user : 'dusoft',
        password : 'P3qRZavtsm5UBxxP',
        database : 'duana',
        ssl: {
            rejectUnauthorized: false
        }
    }
});

export default knex;