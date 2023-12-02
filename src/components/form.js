async function handleSubmit(event) {
  // Collecting data
  event.preventDefault();
  const formData = new FormData(event.target);
  const full_name = formData.get("full_name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const text = formData.get("textArea");

  // Sending message to Telegram
  const botToken = "6866430064:AAGdrrpDVjOiA3jxpfZNEUwQMexAMygDjpM";
  const chatId = "-1002137932115";
  let message = `<b>👤 Full name:</b> ${full_name}        <b>📧 Email:</b> ${email}       <b>📞 Phone:</b> ${phone}       <b>💬 Text:</b> ${text}`;

  let apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=html`;
  await fetch(apiUrl);
}

export { handleSubmit };
