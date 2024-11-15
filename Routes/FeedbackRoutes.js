import express from "express"

import User from "../model/user.js";
import { createAdmin } from "../controller/usercontroller.js";
import { createAlumni } from "../controller/usercontroller.js";
import { createStudent } from "../controller/usercontroller.js";
import { getAllUsers } from "../controller/usercontroller.js";
import { createCompany }from "../controller/companyController.js";
import { getCompanies } from "..//controller/companyController.js";
import { createReview } from "..//controller/reviewController.js";
import { getAllReviews } from "../controller/reviewController.js";
import { likeReviews } from "../controller/likeController.js";
import { isAdmin } from "../middleware/Middleware.js";

const app = express.Router();

app.post("/admin/create",createAdmin)
app.post("/admin/Alumni",createAlumni)
app.post("/Student/Create",createStudent)
app.post("/Company/Create",isAdmin,createCompany)
app.post("/Review/Create",createReview)
app.post("/Review/Create",likeReviews)
app.get("/user/getUsers",getAllUsers)
app.get("/user/getCompany",getCompanies)
app.get("/user/getReview",getAllReviews)

export default app;