import { UserRoutes } from './users.routes';
import { Router } from 'express'

const userRoute = new UserRoutes().routes
const router = Router ()

router.use(userRoute)

export default router