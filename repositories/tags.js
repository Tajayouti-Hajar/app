const { Tag } = require('../models')
 module.exports = {
   getAllTag() {
     return Tag.findAll()
   },
   getTag(id) {
    return Tag.findAll({
        where: {
            id : id,
        }
    })},

   addTag(tag) {
    return Tag.create(tag);
  },


 updateTag: async function(id, TagData){
    return await Tag.update(TagData, {
        where: {
            id: id
        }
    })
},
deleteTag(id){
    return Tag.destroy({
        where: {
            id: id
        }
    })
},

}
    