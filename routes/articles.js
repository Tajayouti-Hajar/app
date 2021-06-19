const router = require("express").Router();
const articles = require("../repositories/articles");
const articlesRepo = require("../repositories/articles");

/* GET all article. */
router.get("/:offset?/:limit?", async function (req, res, next) {
  if(req.params.offset && req.params.limit ){
    let offset =req.params.offset ? Number(req.params.offset): undefined;
     let limit = req.params.offset ?Number (req.params.limit): undefined;
     res.send(await articlesRepo.getAllArticle(offset,limit));
  }
  else{
    res.send(await articlesRepo.getArticle(req.params.offset));
  } 
});

/* GET article by id. */
router.get("/:id", async function (req, res, next) {
    res.send(await articlesRepo.getArticle(req.params.id));
  });

  /* Create article */
router.post("/", async function (req, res, next) {
    res.json(await articlesRepo.addArticle(req.body));
  });
  
/*delete Article*/
router.delete("/:id",async function(req,res,next){
    if(await articlesRepo.deleteArticle(req.params.id)){
      res.send("the deletion is done successfully");
    }else{
      res.send("deletion error ");
    }
  });
  
  /*put */
router.put("/:id", async function (req, res, next) {
    res.send(await articlesRepo.updateArticle(req.params.id,req.body));
  });


module.exports = router;