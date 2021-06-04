const router = require('express').Router();

//Schemas
const banks_schema = require('../../models/bank-Schema')
const crumbs_schema = require('../../models/crumbs-Schema')
const collections_schema = require('../../models/collections-Schema')
const inventory_schema = require('../../models/inventory-Schema')
const bakery_schema = require('../../models/bakery-Schema')

router.get('/bank/:id', async (req, res) => {
   if(!Number.isInteger(Number(req.params.id))) {
       res.status(400).json({status: 400, msg: "Bad Syntax"})
   }
   else {
        let bank = await banks_schema.findOne({userId: req.params.id})
        if(!bank) {
            res.status(404).json({status: 404, msg: "Bank not found"})
        }
        else {
            res.status(200).json({status: 200, bank})
        }
    }
})
router.get('/inventory/:id', async (req, res) => {
    if(!Number.isInteger(Number(req.params.id))) {
        res.status(400).json({status: 400, msg: "Bad Syntax"})
    }
    else {
         let inventory = await inventory_schema.findOne({userId: req.params.id})
         if(!inventory) {
            res.status(404).json({status: 404, msg: "Inventory not found"})
         }
         else {
            res.status(200).json({status: 200, inventory})
         }
     }
})
router.get('/collection/:id', async (req, res) => {
    if(!Number.isInteger(Number(req.params.id))) {
        res.status(400).json({status: 400, msg: "Bad Syntax"})
    }
    else {
         let collection = await collections_schema.findOne({userId: req.params.id})
         if(!collection) {
            res.status(404).json({status: 404, msg: "Collection not found"})
         }
         else {
            res.status(200).json({status: 200, collection})
        }
    }
})
router.get('/bakery/:id', async (req, res) => {
    if(!Number.isInteger(Number(req.params.id))) {
        res.status(400).json({status: 400, msg: "Bad Syntax"})
    }
    else {
         let bakery = await bakery_schema.findOne({userId: req.params.id})
         if(!bakery) {
            res.status(404).json({status: 404, msg: "Inventory not found"})
         }
         else {
            res.status(200).json({status: 200, bakery})
        }
    }
})

module.exports = router