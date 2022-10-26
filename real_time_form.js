document.getElementById("userTyping").addEventListener("keyup",() => {
    let content = document.getElementById("userTyping");
    let lowerLi = document.getElementById("lowercase");
    let upperLi = document.getElementById("uppercase");
    let lengthLi = document.getElementById("minCharacter");

    let submitButton = document.getElementById("submit");
    
    let lowercaseRegExp = new RegExp(".*[a-z].*");
    let uppercaseRegExp = new RegExp(".*[A-Z].*");
    let minLengthRegExp = new RegExp("^.{6,}$")

    if(lowercaseRegExp.test(content.value)){
        lowerLi.style.textDecoration = "line-through";
    }
    else{
        lowerLi.style.textDecoration = "none";
    }

    if(uppercaseRegExp.test(content.value)){
        upperLi.style.textDecoration = "line-through";
    }
    else{
        upperLi.style.textDecoration = "none";
    }

    if(minLengthRegExp.test(content.value)){
        lengthLi.style.textDecoration = "line-through";
    }
    else{
        lengthLi.style.textDecoration = "none";
    }

    if(lowercaseRegExp.test(content.value) && uppercaseRegExp.test(content.value) && minLengthRegExp.test(content.value)){
        submitButton.setAttribute("value","Submit");
        submitButton.removeAttribute("disabled");
    }
    else{
        submitButton.setAttribute("disabled","true");
        submitButton.setAttribute("value","Not valid yet!");
    }
})