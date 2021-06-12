const router = require("express").Router();
const Comment = require("../repositories/comments");
const CommentR = require("../repositories/comments");

/* GET all article. */
router.get("/", async function (req, res, next) {
 if(req.query.offset || req.query.limit)
 {
     let offset = Number(req.query.offset);
     let limit = Number(req.query.limit);
     res.send(await CommentR.getAllComment(offset,limit));
 }
  else{
    res.send(await CommentR.getAllComment());
  }




  
});
/* GET comment by id. */
router.get("/:id", async function (req, res, next) {
    let comment = await CommentR.getComment(req.params.id);
    if (comment.length > 0) {
      res.json(comment);
    }
    res.json({ message: "user not found" });
  });




  /* Create comment */
router.post("/", async function (req, res, next) {
    res.json(await CommentR.addComment(req.body));
  });
  


/*delete comment*/
router.delete("/:id",async function(req,res,next){
    if(await CommentR.deleteComment(req.params.id)){
      res.send("the deletion is done successfully");
    }else{
      res.send("deletion error ");
    }
  });
  
  /*put update  */
router.put("/:id", async function (req, res, next) {
    res.send(await CommentR.updateComment(req.params.id,req.body));
  });


module.exports = router;