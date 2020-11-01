import express from "express";
const router = express.Router();
import * as controller from './bao.controller';

router.get('/', (req, res) => {
    res.render("index");
})
router.post('/',(req, res) => {
    console.log(req.body)
})
router.get('/getStudent', controller.getStudent);
router.post('/addStudent', controller.addStudent);
router.delete('/:id', controller.deleteStudent);
 router.put('/updateStudent', controller.updateStudent);
export default router;
