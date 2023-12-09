import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendEmail = async (data) => {
  const { name, phoneNumber, email, message } = data;
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.NODEMAILER_GMAIL_USER,
      pass: process.env.NODEMAILER_GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_GMAIL_USER,
    to: email,
    subject: "Thank you for your message!!",
    html: `<!DOCTYPE html>
    <html lang="en">
    
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet">
            <link href="https://fonts.cdnfonts.com/css/helvetica-neue-55"
                rel="stylesheet">
            <title>Confirmation Of The Booking</title>
        </head>
    
        <body
            style="margin: 0; padding: 0; outline: 0; font-family: 'Helvetica Neue', sans-serif;">
            <table
                style="border-collapse: collapse; max-width: 600px; width: 100%; margin: auto; padding-left: 10px; padding-right: 10px;">
                <!-- header -->
                <tr>
                    <td colspan="12" width="100%" vertical-align="middle">
                        <tr>
                            <!-- logo -->
                            <td colspan="10" width="100%"
                                style="border-bottom: 1px solid #C1C3C3;">
                                <img src="https://i.postimg.cc/rFsbfRCq/logo.png"
                                    alt="header-logo">
                            </td>
                            <!-- logo end -->
    
                            <!-- top contact info -->
                            <td colspan="2" width="100%"
                                style="border-bottom: 1px solid #C1C3C3;">
                                <span
                                    style="display: flex; flex-direction: column; align-items: start; justify-content: end; margin: 0;">
                                    <span>
                                        <!-- phone -->
                                        <p
                                            style="margin: 0; margin-bottom: 5px; padding: 0; display: flex; align-items: center;">
                                            <a href="telto:'544554165'"
                                                style="display: flex; align-items: center; gap: 10px; text-decoration: none; justify-content: start; font-size: 12px; font-weight: 400; color: #075759; font-family: 'Inter', sans-serif;">
                                                <img width="20"
                                                    src="https://i.postimg.cc/Y97ZRX8P/cellphone.png"
                                                    alt="telephone">
                                                <span>
                                                    0800 058 2673
                                                </span>
                                            </a>
                                        </p>
                                        <!-- phone end -->
                                        <!-- web -->
                                        <p
                                            style="margin: 0; padding: 0; display: flex; align-items: center;">
                                            <a href="telto:'544554165'"
                                                style="display: flex; align-items: center; gap: 10px; text-decoration: none; justify-content: start; font-size: 12px; font-weight: 400; color: #075759; font-family: 'Inter', sans-serif;">
                                                <img width="20"
                                                    src="https://i.postimg.cc/G2bgG4mw/web.png"
                                                    alt="telephone">
                                                <span
                                                    style="color: #075759; font-family: 'Inter', sans-serif; text-decoration: underline;">
                                                    www.Foodzee.co.uk
                                                </span>
                                            </a>
    
                                        </p>
                                        <!-- web end -->
                                    </span>
                                </span>
                            </td>
                            <!-- top contact info -/end -->
                        </tr>
                    </td>
                </tr>
                <!-- header end -->
    
                <!-- for name -->
                <tr>
                    <td colspan="12" width="100%">
                        <p
                            style="font-size: 18px; line-height: 34px; font-weight: 500; color: #363636; margin-bottom: 0;">
                            Your Name
                        </p>
    
                        <p
                            style="padding: 24px; background-color: #F3F7F7; border: 1px solid #EEE; border-radius: 8px; margin-top: 0;">
                            ${name}
                        </p>
    
                    </td>
                </tr>
                <!-- for name -/end -->
    
                <!-- for phone -->
                <tr>
                    <td colspan="12" width="100%">
                        <p
                            style="font-size: 18px; line-height: 34px; font-weight: 500; color: #363636; margin-bottom: 0;">
                            Your Phone Number
                        </p>
    
                        <p
                            style="padding: 24px; background-color: #F3F7F7; border: 1px solid #EEE; border-radius: 8px; margin-top: 0;">
                            ${phoneNumber}
                        </p>
    
                    </td>
                </tr>
                <!-- for phone -/end -->
    
                <!-- for email -->
                <!-- 
            <tr>
                <td colspan="12" width="100%">
                    <p style="font-size: 18px; line-height: 34px; font-weight: 500; color: #363636; margin-bottom: 0;">
                        Your Email Address
                    </p>
    
                    <p
                        style="padding: 24px; background-color: #F3F7F7; border: 1px solid #EEE; border-radius: 8px; margin-top: 0;">
                        Enter your email*
                    </p>
    
                </td>
            </tr>
            -->
    
                <!-- for email -/end -->
    
                <!-- for message -->
                <tr>
                    <td colspan="12" width="100%">
                        <p
                            style="font-size: 18px; line-height: 34px; font-weight: 500; color: #363636; margin-bottom: 0;">
                            Your Message
                        </p>
    
                        <p
                            style="padding: 24px; background-color: #F3F7F7; border: 1px solid #EEE; border-radius: 8px; margin-top: 0; height: 170px;">
                           ${message}
                        </p>
    
                    </td>
                </tr>
                <!-- for message -/end -->
    
                <!-- for submit -->
                <!--<tr>
                    <td colspan="12" width="100%">
                        <p style="color: #fff; font-size: 18px; line-height: 28px;
                text-transform: capitalize;
                border-radius: 8px; background-color: #075759; width: 100%;
                padding: 14px 0; text-align: center; cursor: pointer;">
                            Your Message
                        </p>
                    </td>
                </tr>  -->
    
                <!-- for submit -/end -->
    
            </table>
    
            <table
                style="background-color: #FD7E00; border-collapse: collapse; width: 100%; margin: auto; padding-left: 10px; padding-right: 10px;">
                <tr>
                    <td colspan="12" width="100%">
                        <p
                            style="text-align: center; font-size: 20px; font-weight: 500; color: #111; padding-top: 30px; margin-bottom: 20px;">
                            DOWNLOAD THE APP
                        </p>
                        <p style="text-align: center; padding-bottom: 30px;">
                            <a href="#" style="text-decoration: none;">
                                <img src="https://i.postimg.cc/SsG5vWvx/apple.png"
                                    alt="apps-icon">
                            </a>
                            <a href="#" style="text-decoration: none;">
                                <img src="https://i.postimg.cc/SsG5vWvx/apple.png"
                                    alt="apps-icon">
                            </a>
                        </p>
                    </td>
                </tr>
            </table>
    
            <div
                style="background-color: #075558; width: 100%; padding-top: 30px; padding-bottom: 30px;">
                <table
                    style="border-collapse: collapse; max-width: 600px; width: 100%; margin: auto; padding-left: 10px; padding-right: 10px;">
                    <tr>
                        <td colspan="12" width="100%">
                            <tr>
                                <!-- footer logo -->
                                <td colspan="8" width="100%"
                                    style="padding-bottom: 20px;">
                                    <img
                                        src="https://i.postimg.cc/43VjzCvt/footer-loog.png"
                                        alt="header-logo">
                                </td>
                                <!-- footer logo end -->
    
                                <!-- footer contact info -->
                                <td colspan="4" width="100%"
                                    style="padding-bottom: 20px;">
                                    <ul
                                        style="list-style: none; margin: 0; padding: 0;">
                                        <li style="display: flex; gap: 15px;">
                                            <a href="#">
                                                <img
                                                    src="https://i.postimg.cc/YS6yv6kz/website.png"
                                                    alt="website">
                                            </a>
    
                                            <a href="#">
                                                <img
                                                    src="https://i.postimg.cc/htHHz4mc/facebook.png"
                                                    alt="facebook">
                                            </a>
    
                                            <a href="#">
                                                <img
                                                    src="https://i.postimg.cc/c4zz21Xw/linkedin.png"
                                                    alt="linkedin">
                                            </a>
    
                                            <a href="#">
                                                <img
                                                    src="https://i.postimg.cc/wMfr69HK/instagram.png"
                                                    alt="instagram">
                                            </a>
                                        </li>
                                    </ul>
                                </td>
                                <!-- footer contact info -/end -->
                            </tr>
    
                            <tr>
                                <td colspan="12" width="100%">
                                    <table width="100%" style="text-align: center;"
                                        class="colum-4">
                                        <tr>
                                            <td
                                                style="width:100%; display: inline-block; max-width:140px;margin-right: 5px;margin-bottom: 10px; ">
                                                <a href="#"
                                                    style="font-size: 12px; font-weight: 500; color: white; text-decoration: none;">
                                                    Refer A Friend
                                                </a>
                                            </td>
                                            <td
                                                style="width:100%; display: inline-block; max-width:140px; margin-right: 5px; margin-bottom: 10px; ">
                                                <a href="#"
                                                    style="font-size: 12px; font-weight: 500; color: white; text-decoration: none;">
                                                    Support
                                                </a>
                                            </td>
                                            <td
                                                style="width:100%; display: inline-block; max-width:140px; margin-right: 5px; margin-bottom: 10px; ">
                                                <a href="#"
                                                    style="font-size: 12px; font-weight: 500; color: white; text-decoration: none;">
                                                    Restaurant Login
                                                </a>
                                            </td>
                                            <td
                                                style="width:100%; display: inline-block; max-width:140px; margin-right: 5px; margin-bottom: 10px; ">
                                                <a href="#"
                                                    style="font-size: 12px; font-weight: 500; color: white; text-decoration: none;">
                                                    Unsubscribe
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
    
                            <tr>
                                <td colspan="12" width="100%">
                                    <p
                                        style="margin: 0; padding: 0; font-size: 12px; line-height: 16px; font-weight: 400; color: #ffffff8e; text-align: center;">
                                        ©2023 Foodzee, Floor 2, Falcon Point, Heath
                                        Hayes, Cannock, WS12 2DE.
                                    </p>
                                    <p
                                        style="margin: 0; padding: 0; font-size: 12px; line-height: 16px; font-weight: 400; color: #ffffff8e; text-align: center;">
                                        All rights reserved.
                                    </p>
                                </td>
                            </tr>
                        </td>
                    </tr>
                </table>
            </div>
        </body>
    
    </html>
      `,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      return true;
    }
  });
};
