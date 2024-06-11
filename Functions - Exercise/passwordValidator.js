function passwordValidator(pass) {
  let isLength=length(pass);
  let onlyLetAndDigits=onlyLetAndDigit(pass);
  let atLeastDigits=atLeastTwoDigists(pass);

  if (isLength&&onlyLetAndDigits&&atLeastDigits) {
    console.log("Password is valid");
  }

  function length(pass) {
    if (pass.length < 6 || pass.length > 10) {
      console.log("Password must be between 6 and 10 characters");
      return false;
    }
    return true;
  }

  function onlyLetAndDigit(pass) {
    let validPass = /^[A-Za-z0-9]+$/;
    let test = validPass.test(pass);

    if (test === true) {
      return true;
    }

    console.log("Password must consist only of letters and digits");
    return false;
  }

  function atLeastTwoDigists(pass) {
    let validPass = /[0-9]{2,}/;

    let test = validPass.test(pass);

    if (test === true) {
      return true;
    }
    console.log("Password must have at least 2 digits");

    return false;
  }
}

passwordValidator('Pa$s$s');
