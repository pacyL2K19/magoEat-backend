import { UserRoutes } from './users.routes';
import { Router } from 'express'
const router = Router ()
const userRoutes : UserRoutes = new UserRoutes ()
// router.use(userRoutes)

export default router 