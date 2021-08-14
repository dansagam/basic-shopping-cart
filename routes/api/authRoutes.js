import express from "express"
import { authenticateUser, getAuthenticatedUser} from '../../controllers/authsControllers.js'
import auth        from '../../middlewares/auth.js'


const   router = express.Router()



router
   .route('/')
   .post(authenticateUser)


router.route('/user')
   .get(auth, getAuthenticatedUser )
   

export default router