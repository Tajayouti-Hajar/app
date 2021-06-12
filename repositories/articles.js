const { Article } = require('../models')
 module.exports = {
   getAllArticle() {
     return Article.findAll()
   },
   
   getArticle(id) {
    return Article.findAll({
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
    