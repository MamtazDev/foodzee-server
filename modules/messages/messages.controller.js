import { sendEmail } from "../../utils/sendEmailfunctionalities.js";

export const sendEmailAdmin = async (req, res) => {
  try {
    const { name, phoneNumber, email, message } = req.body;
    const data = {
      name,
      phoneNumber,
      email,
      message,
    };
    const mailSend = await sendEmail(data);
    if (mailSend) {
      console.log(mailSend);
    }

    res.status(200).send({
      message: "mail send successfully!",
      success: true,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
