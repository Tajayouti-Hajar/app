const { User } = require('../models')
 module.exports = {
   getAllUsers() {
     return User.findAll()
   },
   
   getUsers(offset = 0, limit = 10) { },
   getAdmins() {
       return User.findAll({
           where: {
               role:"admin",
           }
       })
       
    },
   getAuthors() {  return User.findAll({
    where: {
        role:"author",
    }
})},
   getGuests(){
    return User.findAll({
        where: {
            role:"guest",
        }
    })
    }, 
   getUser(id) {
    return User.findAll({
        where: {
            id : id,
        }
    })
       
   },

   getUserByEmail(email) {
    return User.findAll({
      where: {
        email,
      },
    });
  },


   addUser(user) {
    return User.create({
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role,
    });
  },
  updateUser: async function(id, userData){
    return await User.update(userData, {
        where: {
            id: id
        }
    })
},
deleteUser(id){
    return User.destroy({
        where: {
            id: id
        }
    })
},

}
    