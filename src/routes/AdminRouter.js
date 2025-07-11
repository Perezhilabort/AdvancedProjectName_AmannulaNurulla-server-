const {Router} = require('express')

const {createUser, getAllUsers, deleteUser} = require('../controllers/UserController')
const {uploadFile, deleteVideo, getAllVideos, createVideo} = require('../controllers/StorageController')
const {createCourse,getUsersByCourse,addUserToCourse, addVideoToCourse, deleteVideoFromCourse, getAllCourses, getCoursesById, deleteUserFromCourse, getVideosFromCourse, deleteCourse} = require('../controllers/CourseController');
const isAdminMiddleware = require('../middlewares/isAdmin');
const multer = require('multer')

const router = new Router();

router.get('/courses', isAdminMiddleware, getAllCourses);
router.get('/users', isAdminMiddleware, getAllUsers)
router.get('/videos', isAdminMiddleware, getAllVideos)
router.get('/users/:id', isAdminMiddleware, getUsersByCourse)
router.get('/videos/:id', isAdminMiddleware, getVideosFromCourse)

router.post('/createUser',isAdminMiddleware, createUser);
router.post('/createCourse', isAdminMiddleware, createCourse);
router.post('/createVideo', isAdminMiddleware, createVideo);

router.delete('/deleteVideo', isAdminMiddleware, deleteVideo);
router.delete('/deleteVideoFromCourse', isAdminMiddleware, deleteVideoFromCourse);
router.delete('/deleteUserFromCourse', isAdminMiddleware, deleteUserFromCourse);
router.delete('/deleteUser', isAdminMiddleware, deleteUser)
router.delete('/deleteCourse', isAdminMiddleware, deleteCourse)

router.put('/addUserToCourse', isAdminMiddleware, addUserToCourse);
router.put('/addVideoToCourse', isAdminMiddleware, addVideoToCourse);


module.exports = router;



