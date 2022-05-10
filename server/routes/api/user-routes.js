const router = require('express').Router();

const {
  createUser,
  allUsers,
  deleteAllUsers,
  getSingleUser,
  deleteUser,
  login,
  updateUser,
} = require('../../controllers/user-cont');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/:id').delete(authMiddleware, deleteUser);

router.route('/me').post(authMiddleware, updateUser);

router.route('/').get(allUsers);

module.exports = router;
