const express= require('express');
const router=express.Router();

const serviceController=require('../controllers/serviceController')

router.get('/',serviceController.getAllServices)

router.post('/',serviceController.addServices);

router.get('/:id',serviceController.getServiceById)

router.get('/:id/providers', serviceController.getServiceProvidersByServiceId);


module.exports=router;