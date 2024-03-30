const sendEmail = data => {
  const email = {...data, from; META_MAIL_FROM};
  return transporter.sendMail(email);
}

  export default sendEmail;