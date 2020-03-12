import {Request, Response} from 'express';
import LoginHelper from './login.helpers';

export default (req:Request, res:Response) => {
    Promise.resolve().then(() => {

        const obj = {
            userName : 'mauricio.barrios',
            password : '123456'
        };

        const data = new LoginHelper().getPasswordHash(obj);

        return data;
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