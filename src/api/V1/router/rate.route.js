const express = require('express')
const router = express.Router()
const orderCtlr = require('../controller/order.controller')

router.get('/orderHistory', orderCtlr.getOrdersHistory)

/**
 * When it comes to rate, we post a rate
 */

router.post('/rateOrder', orderCtlr.rateOrder)

module.exports = router