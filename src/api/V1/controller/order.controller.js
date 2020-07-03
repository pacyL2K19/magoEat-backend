const Order = require('../models/order.model')
exports.getOrdersHistory = (req, res, next) => {
    Order.find({ useranme : req.body.username })
        .then(orders => {
            if (!orders) {
                res.status(400).json({ message : 'Aucun article dans votre historique' })
            }
            res.status(200).json({ orders })
        })
        .catch(error => {
            console.log(error)
        })
}

exports.rateOrder = (req, res, next) => {
    /**
     * First we check if the order exists.Finding it in the model
     */
    Order.findOne({ id_ : req.params.id })
        .then(order => {
            if (!order) {
                res.status(400).json({ errorMessage : 'Erreur, cet article n\'existe pas '})
            }
            /**
             * Then we check if its ratable field is true
             */
            if (!order.ratable) {
                res.status(400).json({ errorMessage : 'Cette commande ne peut etre cotee maintenant'})
            }
            /**
             * Then we can update its rate and its ratable fields
             */
            Order.updateOne({ id_ : req.body.id }, { ratable : false , rate : req.body.rate })
                .then(orderUpdated => {
                    /**
                     * Let's check if the response is not empty
                     */
                    if (!orderUpdated) {
                        res.status(400).json({ errorMessage : 'Erreur de mise a jour de votre cotaton'})
                    }
                    res.status(200).json({ orderUpdated })
                })
                .catch(error => {
                    console.log(error)
                })
        })
        .catch(error => {
            console.log(error)
        })
}