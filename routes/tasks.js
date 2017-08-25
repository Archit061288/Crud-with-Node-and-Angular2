var express = require('express');
var User = require('./../model/usermodel').User;

var router = express.Router();

// find All tasks
router.get('/tasks',function(req,res,next){
	User.find({},function(err,docs){
		if(err){
			res.send(err);
		}
		res.json(docs);
	})
})

// find by id
router.get('/task/:id',function(req,res,next){
	User.findById({_id:req.params.id},function(err,doc){
		if(err){
			res.send(err);
		}
		res.json(doc);
	})
});

// save task
router.post("/task",function(req,res){
	var task = req.body;
	console.log(task,"task")
	if(!task.title){
		res.status(400);
		res.json({
			'error':'Bad Data'
		})
	}else{
		var newtask = new User(task);
		newtask.save(function(err,task){
			if(err){
				res.send(err);
			}
			res.json(task);
		})
	}
})

// delete task
router.delete('/task/:id',function(req,res){
	User.findOneAndRemove({_id:req.params.id},function(err,task){
		if(err){
			res.send(err);
		}
		res.json(task);
	})
})

// update task
router.put('/task/:id',function(req,res){
	var resdone = req.body;
	console.log(resdone,"resdone")
	User.findByIdAndUpdate({_id:req.params.id},{title:'demo1',isdone:resdone.isdone},function(err,task){
		if(err){
			res.send(err);
		}
		res.json(task);
	})
})

module.exports = router;