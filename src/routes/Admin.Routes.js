import bodyParser from 'body-parser';
import express from 'express';
import createPublication from '../controller/Admin/actions/Admin/index.js';
import AdminAutheatioaction from '../middleware/authFromTokenForAdmin/index.js'
const router = express.Router();


router.use(AdminAutheatioaction);
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());


router.get('/createPublication',createPublication);



export default router;