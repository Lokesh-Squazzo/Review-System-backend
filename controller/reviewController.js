import reviewModel from "../model/Review.js";
import companyModel from "../model/Company.js";
export const createReview = async (req, res) => {
    try {
        const { company, email, reviews } = req.body;


        const companyinfo = await companyModel.findOne({ name: company })

        const reviewObj = new reviewModel({
            company: companyinfo._id,
            email,
            reviews,
        });

        const savedReviews = await reviewObj.save();

        const updatedCompany = await companyModel.findByIdAndUpdate(
            company,
            { $push: { reviews: savedReviews._id } },
            { new: true }
        )
            .populate("reviews")
            .exec();

        res.json({ company: updatedCompany });
    } catch (error) {
        console.log(error),
            res.status(500).json({ message: "Error while adding Review " });
    }
};

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await ReviewModel.find()
        res.json({
            reviews
        })
    }
    catch (error) {
        return res.status(400).json({
            error: "error while fetching post",
        })
    }
}  