var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/OpticStore',['glasses']);

// Get all glasses
router.get('/glasses', function(req, res, next){
    db.glasses.find(function(err,glasses) {
        if(err) {
            res.send(err);
        }
        res.json(glasses);
    });
});

// Get glasses grouped by their brand
router.get('/glassesbybrand', function(req, res, next){
    console.log("glassesgroupby");
    db.glasses.aggregate([{$group:{_id:"$brand",count:{$sum:1}}}],function (err,glasses) {
        if(err) {
            res.send(err);
        }
        res.json(glasses);
    });
});

// Get single glasses
router.get('/glasses/:id', function(req, res, next){
    db.glasses.findOne({_id: mongojs.ObjectID(req.params.id)},function(err,glasses) {
        if(err) {
            res.status(400);
            res.json({
                "error": "Bad Data"
            });
        }
        res.json(glasses);
    });
});

// Save glasses
router.post('/glasses',function(req,res,next) {
    var glasses = req.body;
    if(!glasses.brand) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.glasses.save(glasses,function(err,glasses) {
            if(err) {
                res.send(err);
            }
            res.json(glasses);
        });
    }
});

// Delete glasses
router.delete('/glasses/:id', function(req, res, next){
    db.glasses.remove({_id: mongojs.ObjectID(req.params.id)},function(err,glasses) {
        if(err) {
            res.send(err);
        }
        res.json(glasses);
    });
});

// Update glasses
router.put('/glasses/:id', function(req, res, next){
    var glasses = req.body;
    var updateGlasses = {};
    if(!updateGlasses){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else{
        db.glasses.update({_id: mongojs.ObjectID(req.params.id)},updateGlasses,{},function(err,glasses) {
            if(err) {
                res.send(err);
            }
            res.json(glasses);
        });
    }
});


module.exports = router;