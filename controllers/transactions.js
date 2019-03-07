const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const Transactions = require('../models/transactions');


module.exports = {
    main: function(req, res) {
        Users.find({}).then((users)=>{
            Transactions.find({}).then((transactions)=>{
                res.render("main",{users: users, transactions: transactions});
            })
        })
      },
    deleteTrans: (req,res)=>{
        Transactions.findOneAndRemove({_id: req.params.id})
        .then(()=>{
            res.redirect('/')
        })
    },
    postTrans: (req,res)=>{
        Transactions.create({
            user_id: req.body.user_id,
            amount: req.body.amount,
            type: req.body.type,
            business_name: req.body.business_name
        }).then(()=>{
            res.redirect('/')
        })
    },
    updateTrans:(req,res)=>{
        Transactions.findByIdAndUpdate({_id:req.params.id}, req.body)
          .then(()=>{
            res.redirect('/')

          })
    }
}


