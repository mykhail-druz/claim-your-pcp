import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const url = "https://hooks.zapier.com/hooks/catch/13171226/3pts6co/"; 

  try {
   const requestBody = {
     "First Name": req.body.firstName,
     "Last Name": req.body.lastName,
     "Car number": req.body.numberCar,
     "Phone Number": req.body.phoneNumber,
     Email: req.body.email,
     Title: req.body.title,
     "Date of Birth": `${req.body.dayOfBirth}.${req.body.monthOfBirth}.${req.body.yearOfBirth}`,
     "Were you aware that the car dealership received commission for arranging the finance to purchase the car?":
       req.body.question1,
     "Were you provided with documentation that contained information about the commission the car dealership would receive?":
       req.body.question2,
     "Did you trust the car dealership to find the best finance for you?":
       req.body.question3,
     "Have you recently submitted a diesel claim or have you already had a successful diesel claim for this car?":
       req.body.question4,
     "Are you currently in an IVA, bankruptcy or other debt management arrangement?":
       req.body.question5,
     "What was the value of the vehicle?": req.body.costType,
     "Have you had any other cars on finance between 2014 - 2020?":
       req.body.questionOtherCars,
     "Sign base64": req.body.signImage,
     "How did you pay for your finance?": req.body.typeFinance,
     " Did the car dealership provide you with a choice of lenders and finance types to pick from? By Bank":
       req.body.bankOption,
     "Did the car dealership provide you with a choice of lenders and finance types to pick from? By Card":
       req.body.cardOption,
     "Did the car dealership provide you with a choice of lenders and finance types to pick from? By Cash":
       req.body.cashOption,
     "Would you have requested further information had you been informed there was a commission payment?":
       req.body.haveRequested,
     "Would you have enquired about other finance options the dealership could offer you if you had been informed there was a commission payment?":
       req.body.haveEnquired,
     "Would you have taken out the finance had you been informed there was a commission payment?":
       req.body.takenOutFinance,
     "Would you like us to investigate the additional products you purchased that may have also been mis sold or unfair?":
       req.body.youLikeInvestigate,
     "Please select the relevant products that you purchased below":
       req.body.relevantProduct,
     "Car Model and Registration Number": req.body.carModel,
     "Private Reg": req.body.privateReg,
   };
const filteredRequestBody = Object.fromEntries(
  Object.entries(requestBody).filter(
    ([_, value]) => value !== undefined || value !== null || value !== ""
  )
);
    const response = await axios.post(url, filteredRequestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
      res.status(response.status).json({ message: "Failed to fetch data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
