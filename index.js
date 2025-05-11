function sendContactEmail(event) {
    event.preventDefault();
    const { name, email, phone, message } = event.target;
    const formData = {
        name: name.value,
        email: email.value,
        message: message.value,
        phone: phone.value,
    };
    const s=toString(formData.phone);
    if(s.length!=10)
    {
        alert("10 digit no pls");
    }
    
    //Validation logic

    console.log(formData);
}
