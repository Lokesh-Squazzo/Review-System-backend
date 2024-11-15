import companyModel from "../model/Company.js";

export const createCompany = async (req, res) => {
    try {
        const { name, location,industry, email } = req.body;
        const companyObj = new companyModel({
            name,
            location,
            industry,
            email
        })
        const savecompanyObj = await companyObj.save();
        res.json({
            savecompanyObj,
            message:"Company Create Successfully"
        })
    } catch (error) {
        res.json({
            error: "Error Occured"
        })
    }
};

export const getCompanies=async(req,res)=>{
    try {
      const getcompanies=await companyModel.find()
      res.json({
        getcompanies
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }