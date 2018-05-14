const router = require('express').Router()
const { User, UserCategory } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only certain fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!

    attributes: ['id', 'email', 'username', 'level']

  })
    .then(users => res.json(users))
    .catch(next)
})

//***Test only works some of the time.  Could be some async issue or issue with test***
router.put('/:userId', (req, res, next) => {
  User.findById(+req.params.userId, {
    include: [UserCategory]
  })
    .then(user => {
      let userCategory = user.userCategories.find(category => {
        return category.categoryId === +req.body.categoryId
      })
      userCategory.XP += +req.body.XP
      userCategory.HP += +req.body.HP
      return userCategory.save()
    })
    // .then(() => {
    //   res.end()
    // })
    .catch(next)
})

router.put('/levelUp/:userId', (req, res, next) => {
  User.findById(+req.params.userId)
    .then(user => {
      // const lastMaxXP = user.getLevel().maxXP
      user.levelId++
      // const currentMaxXP = user.getLevel().maxXP
      // user.progress = (user.XP - lastMaxXP) / (currentMaxXP - lastMaxXP)
      return user.save()
    })
    // .then(() => {
    //   res.end()
    // })
    .catch(next)
})

