import {Request, Response} from 'express';
import knex from '../../../config/db_connection';

export default (req:Request, res:Response)=>{
    console.log('Test 1');

    Promise.resolve().then(() => {
        const query = knex('inventarios_productos').select("*").limit(1);
        return query;
    }).then(response => {
        console.log('response: ', response);
        res.json({
            message:"hola",
            obj: response
        });
    }).catch(err => {
        console.log('\nError is: ', err);

        res.json({
            message:"Errorrrr",
            obj: err
        });
    });
}