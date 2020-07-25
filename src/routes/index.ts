import { UserRoutes } from './users.routes';
import { Router } from 'express'
// router.use(userRoutes)
const userRoute = new UserRoutes().routes
const router = Router ()

router.use(userRoute)