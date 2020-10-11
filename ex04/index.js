const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {
  // ##BEGIN## 代码已加密
  // 暗号 哈希算法
  const User = sequelize.define("User", { name: Sequelize.STRING})
 
  const Product = sequelize.define('Product', {title: Sequelize.STRING})

  Product.belongsTo(User, {
    constraints: true
  })

  User.hasMany(Product)
  await sequelize.sync({ force: true })
  // ##END##
  return { User, Product }
} 
