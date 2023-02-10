function validateForm() {
    let firstname = document.forms["myForm"]["fname"].value;
    if (firstname== "") {
      alert("First Name must be filled out");
      return false;
    }

    let lastname = document.forms["myForm"]["lname"].value;
    if (lastname == "") {
      alert(" Last Name must be filled out");
      return false;
    }

    let email= document.forms["myForm"]["mail"].value;
    let mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (email == "" || email.match(mailformat)) {
      alert(" Email must be filled out");
      return false;
    }

    let p= document.forms["myForm"]["pwd"].value;
    let cp= document.forms["myForm"]["Cpwd"].value;
    if (p!=cp) {
      alert("confirm password is not valid");
      return false;
    }

    alert(" Your Form is Submitted Successfully")


  }