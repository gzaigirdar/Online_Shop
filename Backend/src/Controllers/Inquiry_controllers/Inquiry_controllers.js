import AsyncHandler from "express-async-handler";
import InquiryModel from "../../Models/Inquiry/InquiryModel.js";




const GetInquiries = AsyncHandler(async (req,res,next) => {

    const inquiries = await InquiryModel.find().populate('UserId', 'name.fname name.lname email username').sort({createdAt:-1})

    if(inquiries.length === 0){
        res.status(404)
        throw new Error('No inquires found')
    }

    res.send(inquiries);


})


const submitInquiry = AsyncHandler(async (req,res,next) => {

        const {id,message,PhoneNumber} = req.body;

        if (!id || !message || !PhoneNumber){
            res.status(400)
            throw new Error('Message or id or phone number not included')
        }
        const submitted = await InquiryModel.create({UserId:id,
                                                message:message,
                                                PhoneNumber:PhoneNumber
                                            })
        res.status(200).send('submitted')

        })

const deleteInquiry = AsyncHandler(async (req,res,next)=> {
    const {id} = req.body;

    if(!id){
        res.status(400)
        throw new Error('Id not submitted')
    }

    const deleted = await InquiryModel.deleteOne({_id:id})
    if (deleted.deletedCount === 0) {
        return res.status(404).send('Inquiry not found');
    }
    res.status(200)
    res.send('Inquiry deleted')

})

export {GetInquiries,deleteInquiry,submitInquiry};