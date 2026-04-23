import { createContext,useState,useEffect, Children } from "react";
import axios from "axios";

const InquiryContext = createContext();

function Inquiry_Provider({children}){
const inquiry_url = process.env.NEXT_PUBLIC_DB_API_Inquiry;
const [inquires,setInquiries] = useState([])


async function getInquiries(){

    try {
        const res = await axios.get(`${inquiry_url}/getInquiries`,{withCredentials:true})
        setInquiries(res.data)
    } catch (error) {
        return error
    }
}

async function submitInquiry(inquiryData){
    try {
        const res = await axios.post(`${inquiry_url}/submitInquiry`,inquiryData,{withCredentials:true})
        return res.data
    } catch (error) {
        return error
    }
}


async function deleteInquiry(id){
    try {
        const res = await axios.delete(`${inquiry_url}/deleteInquiry?id=${id}`,{withCredentials:true})
        return res.data
    } catch (error) {
        return error
    }
}

useEffect(()=>{
    getInquiries()
},[])


return(
    <InquiryContext.Provider value={{inquires,getInquiries,deleteInquiry,submitInquiry}}>
        {children}
    </InquiryContext.Provider>
)


}

export {Inquiry_Provider,InquiryContext}