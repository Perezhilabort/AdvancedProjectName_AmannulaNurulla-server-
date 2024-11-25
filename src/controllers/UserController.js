const {UserModel,CourseModel} = require('../models/Models');
const jwt = require('jsonwebtoken')
require('dotenv').config()

const createUser = async (req,res) => {
    try {
        const params = req.body;
        const isExist = await UserModel.findOne({where: {name: req.body.name}})
        if(isExist){
            return res.json({
                message: "Пользватель уже существует"
            })
        }
        const user = await UserModel.create(params);
        res.json({
            message: "Пользватель успешно создан!",
            user,
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: "Ошибка при созданий пользвателя", 
            error
        })
    }   
}


// Максимум должно быть два известных девайса
// 1. Чел логинится первый раз с первым девайсом и все ок
// 2. Чел логинится со второго девайса и все ок
// 3. Чел логинится уже со известного девайса и все ок
// 4. Все девайсы переполнены и новый девайс не соотвествует существующим
const loginUser = async (req,res) => {
    try {
        const params = req.body;
        const user = await UserModel.findOne({
            where: {name: params.name}
        })
        if(!user && params.password !== user.password){
            return res.json({message: "Пользватель с таким логином и паролем не найден!"})
        }

        if(user.devices !== null && user.devices.length === 2 && !user.devices.includes(params.ip)){
            return false;
        }  
        else {
            if(user.devices === null || !user.devices.includes(params.ip)) {
                user.devices = user.devices === null ? [] : user.devices;
                await UserModel.update({
                    devices: [...user.devices, params.ip]
                },
                {where: {name: params.name}});
            }
        }
        const token = jwt.sign({
            id: user.id,
            isAdmin: user.isAdmin,
            name:user.name
        },
        process.env.SECRET_KEY,
        {expiresIn: '1000h'});
        return res.json({
            token
        });
    } catch (error) {
        console.log('Ошибка с логином', error);
    }
}

const deleteUser = async (req,res) => {
    try {
        const { id } = req.body;
        if(!id){
            return res.json({
                message:"Нужно указать name или id"
            })
            }
        await UserModel.destroy({
            where: {
                id
            }
        })
    } catch (error) {
        res.json({
            message: "Ошибка при удалений пользвателя",
            error
        })
    }
}

const getAllUsers = async (req,res) => {
    try {
        const users = await UserModel.findAll();
        if(!users){
            return res.json({
                message: "В базе данных не пользвателей"
            })
        }
        res.send(users)
    } catch (error) {
        res.json({
            message:"Ошибка при getAllUsers",
            error
        })
    }
}

module.exports = {
    loginUser, 
    createUser,
    deleteUser,
    getAllUsers
}