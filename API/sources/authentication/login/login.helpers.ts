import LoginQuery from 'login.query';

class LoginHelper {
    getPasswordHash(obj: any) {

        Promise.resolve().then(() => {
            const data = new LoginQuery().login(obj);
            return data;
        }).catch(err => {
            console.log('err: ', err);
        })
    }
}

export default LoginHelper;