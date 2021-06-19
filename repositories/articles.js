const { Article } = require('../models')
 module.exports = {
   getAllArticle(offset=0,limit) {
     return Article.findAll({
         offset : offset,
         limit : limit 
     })
   },
   
   getArticle(id) {
    return Article.findOne({
        where: {
            id : id,
        }
    })
       
   },
    
   addArticle(article) {
    return Article.create(article);
  },
 updateArticle: async function(id, ArticleData){
    return await Article.update(ArticleData, {
        where: {
            id: id
        }
    })
},
deleteArticle(id){
    return Article.destroy({
        where: {
            id: id
        }
    })
},

}
    