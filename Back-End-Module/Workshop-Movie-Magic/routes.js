import homeController from'./src/controllers/homeController.js'


import { Router } from 'express'


const routes= Router()

routes.use(homeController)







export default routes