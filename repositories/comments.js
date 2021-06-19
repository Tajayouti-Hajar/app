const { Comment } = require('../models')
 module.exports = {
   getAllComment() {
     return Comment.findAll()
   }, 
   getComment(id) {
    return Comment.findAll({
        where: {
            id : id,
        }
    })    
   },
   addComment(comment) {
    return Comment.create(comment);
  },
 updateComment: async function(id, CommentData){
    return await Comment.update(CommentData, {
        where: {
            id: id
        }
    })
},
deleteComment(id){
    return Comment.destroy({
        where: {
            id: id
        }
    })
},

}
    