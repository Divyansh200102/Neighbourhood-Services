const express=require('express');

const router=express.Router();
const serviceController=require('../controllers/serviceProviderController');


router.post('/',serviceController.addServiceProvider);




module.exports=router;