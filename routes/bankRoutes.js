const express =require('express')
const router = express.Router()
const {listBankController,
    createBankController,
    updateBankController,
    deleteBankController} 
    = require('../controllers/bankControllers')
router.get('/bank/:id?',listBankController);
 router.post('/bank',createBankController);
 router.put('/bank',updateBankController);
 router.delete('/bank',deleteBankController);

 module.exports = router;
