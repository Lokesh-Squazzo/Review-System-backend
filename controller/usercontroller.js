import User from "../model/user.js"

export const createAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({
            name: name,
            email: email,
            password: password,
            role: "Admin"
        })
        const saveUser = await user.save();
        res.json({
            saveUser
        })
    } catch (error) {
        res.json({
            error: `Error is ${error}`
        })
    }
};
export const createAlumni = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({
            name: name,
            email: email,
            password: password,
            role: "Alumni"
        })
        const saveUser = await user.save();
        res.json({
            saveUser,
            message: "Alumni Created Succesfully"

        })
    } catch (error) {
        res.json({
            error: "Error Occured"
        })
    }
};

export const createStudent = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({
            name: name,
            email: email,
            password: password,
            role: "Student"
        })
        const saveUser = await user.save();
        res.json({
            saveUser,
            message: "Student Created Succesfully"

        })
    } catch (error) {
        res.json({
            error: "Error Occured"
        })
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const getUsers = await User.find()
        res.json({
            getUsers
        })
    } catch (error) {
        error: "Can not fetch data"

    }
}

