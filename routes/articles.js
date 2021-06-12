const router = require("express").Router();
const articles = require("../repositories/articles");
const articlesRepo = require("../repositories/articles");

/* GET all article. */
router.get("/", async function (req, res, next) {
 if(req.query.offset || req.query.limit)
 {
     let offset = Number(req.query.offset);
     let limit = Number(req.query.limit);
     res.send(await articlesRepo.getAllArticle(offset,limit));
 }
  else{
    res.send(await articlesRepo.getAllArticle());
  }




  
});
/* GET article by id. */
router.get("/:id", async function (req, res, next) {
    let article = await articlesRepo.getArticle(req.params.id);
    if (article.length > 0) {
      res.json(article);
    }
    res.json({ message: "user not found" });
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