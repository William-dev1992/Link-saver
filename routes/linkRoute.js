import express from 'express'
import linkController from '../controllers/linkController.js'
const router = express.Router();

router.get('/', linkController.allLinks)
router.get('/:title', linkController.redirect);
router.get('/add', (req, res) => res.render('add', {error:false, body: {}}));
router.get('/edit/:id', linkController.loadLink)

router.post('/', express.urlencoded({extended:true}), linkController.addLink);
router.post('/edit/:id', express.urlencoded({extended: true}), linkController.loadLink)

router.delete('/:id', linkController.deleteLink)
router.delete('/', express.urlencoded({extended: true}), linkController.deleteLink)

export default router