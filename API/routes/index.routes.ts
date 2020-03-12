import { Router } from 'express';
import login from '../sources/authentication/login/login.controller';

const router = Router();

router.route('/login')
    .get(login);

export default router;
