import nodemailer from "nodemailer";
import "dotenv/config";

const { META_MAIL_PASSWORD, META_MAIL_FROM } = process.env;

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: META_MAIL_FROM,
    pass: process.env.META_MAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);
const emailOptions = {
  from: META_MAIL_FROM,
  to: "wociwib916@otemdi.com",
  subject: "Nodemailer test",
  html: `
    <strong>Привіт!</strong>
    <p>Ми тестуємо надсилання листів на поштову скриньку.</p>
    <p>Дякуємо за увагу!</p>
    <p>Якщо ви бажаєте підтвердити свою реєстрацію, будь ласка, перейдіть за <a href="https://yourwebsite.com/confirm-registration">тиць!</a>.</p>
  `,
};

transporter
  .sendMail(emailOptions)
  .then(() => console.log("Email sent successfully!"))
  .catch((err) => console.log(err));

// import ElasticEmail from "@elasticemail/elasticemail-client";
// import "dotenv/config";

// const { ELASICE_MAIL_API_KEY, ELASICE_MAIL_FROM } = process.env;

// const defaultClient = ElasticEmail.ApiClient.instance;

// const { apikey } = defaultClient.authentications;
// apikey.apiKey = ELASICE_MAIL_API_KEY;

// const api = new ElasticEmail.EmailsApi();

// const email = ElasticEmail.EmailMessageData.constructFromObject({
//   Recipients: [
//     new ElasticEmail.EmailRecipient("nodebssl@meta.ua,wociwib916@otemdi.com"),
//   ],
//   Content: {
//     Body: [
//       ElasticEmail.BodyPart.constructFromObject({
//         ContentType: "HTML",
//         Content: "My test email content ;)",
//       }),
//     ],
//     Subject: "Node.js test E-mail",
//     From: ELASICE_MAIL_FROM,
//   },
// });

// const callback = function (error, data, response) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("API called successfully.");
//   }
// };
// api.emailsPost(email, callback);
