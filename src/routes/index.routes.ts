import { Router } from 'express';
const router = Router();

import { indexWelcome } from '../useCases/indexController';

router.route('/').get(indexWelcome);

export default router;