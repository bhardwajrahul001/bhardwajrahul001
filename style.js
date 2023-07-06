function login(f)
{
    if(!f.FirstName.value)
        {
            alert("Please Enter First Name");
            f.FirstName.focus();
            return(false);
        }
    if(!f.LastName.value)
        {
            alert("Please Enter Last Name");
            f.LastName.focus();
            return(false);
        }
    if(!f.Email.value)
        {
            alert("Please Enter Your Email");
            f.Email.focus();
            return(false);
        }
    if(!f.Phone.value)
        {
            alert("Please Enter Phone Number");
            f.Phone.focus();
            return(false);
        }
    if(!f.message.value)
        {
            alert("Please Write Your Message");
            f.message.focus();
            return(false);
        }

}