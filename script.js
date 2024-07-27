// const inputslider = document.querySelector("[data-lengthSlider]");
// const lengthdisplay = document.querySelector("[data-lengthNumber]");


// const passworddisplay = document.querySelector("[data-passworddisplay]");
// const uppercasecheck = document.querySelector("#uppercase");
// const lowercasecheck = document.querySelector("#lowercase");
// const numbercheck = document.querySelector("#number");
// const symbolscheck = document.querySelector("#symbols");
// const indicator = document.querySelector("[data-indicator]");
// const generatebutton = document.querySelector("generatebutton");
// const allcheckBox = document.querySelectorAll("input[type=checkbox]");
// const symbols = "~,;(){}[]*&^%$#@-_?/|";

// let password = "";
// let passwordlength = 10;
// let checkcount = 0;
// handlerSlider();

// function handlerSlider()
// {
//    inputslider.value = passwordlength;
//     lengthdisplay.innertext = passwordlength;
// }

// function setindicator(color)
// {
//     indicator.style.backgroundcolor = color;
//     //shadow home work

// }

// function getrandominteger(min,max)
// {
//    return  Math.floor(Math.random()*(max-min)) + min;
// }

// function generaterandomnumber()
// {
//    return getrandominteger(0,9); 
// }

// function generatelowercase()
// {
//     return string.fromcharcode(getrandominteger(97,123));
// }

// function  generateuppercase()
// {
//     return string.fromcharcode(getrandominteger(65,91));
// }
   
// function generatesymbols()
// {
//     const randomnumber = getrandominteger(0,symbols.length);
//     return symbols.charAt(randomnumber);
// }

// function calcstrength(){
//     let hasupper = false;
//     let haslower = false;
//     let hasnum = false;
//     let hassym = false;

//     if(uppercasecheck.checked) hasupper = true;
//     if(lowercasecheck.checked) haslower = true;
//     if(numbercheck.checked) hasnum = true;
//     if(symbolscheck.checked) hassym = true;

//     if(hasupper && haslower && (hasnum || hassym) && passwordlength >= 8)
//     {
//         setindicator("#0f0");

//     }
//     else if((haslower || hasupper) && (hasnum || hassym) && passwordlength >= 6)
//     {
//         setindicator("#ff0");

//     }
//     else{
//         setindicator("#f00")
//     }
// }
 
// function shufflepassword(Array ){
//     // shuffling algorihtm  fisher  yates method
//     for(let i=Array.length-1; i>0;i--)
//     {
//         const j = math.floor(math.random() * (i+1));
//         const temp = Array[i];
//         Array[i] = Array[j];
//         Array[j] = temp;
//     }
//     let str = "";
//     Array.forEach ((el) => (str += el));
//     return str;

// }


// function handlecheckboxchange(){
//     checkcount =0;
//     allcheckBox.forEach((checkbox) => {
//         if(checkbox .checked)
//         {
//             checkcount++;
//         }
//     });
    
//     if(passwordlength <= checkcount)
//     {
//         passwordlength =  checkcount;
//         handlerSlider();
//     }
// }

// allcheckBox.forEach( (checkbox)=>{
//     checkbox.addEventListener('change',handlecheckboxchange);

// })

// inputslider.addEventListener('input', (e) =>{
//     passwordlength=e.target.value
//     handlerSlider();
// })
  
// generatebutton.addEventListener('click',() => {
//     if(checkcount == 0)
//         return ;

//     if(passwordlength < checkcount) 
//     {
//         passwordlength = checkcount;
//         handlerSlider();
//     } 
//      password = "";
     
//     //  if(uppercasecheck.checked){
//     //     password += generateuppercase();

//     //  }

//     //  if(lowercasecheck.checked){
//     //     password += generatelowercase();
        
//     //  }

//     //  if(numbercheck.checked){
//     //     password += generaterandomnumber();
        
//     //  }
//     //  if(symbolscheck.checked){
//     //     password += generatesymbols();
        
//     //  }

//    let funcArr =[];
//    if(uppercasecheck.checked)
//     funcArr.push(generateuppercase);

//    if(lowercasecheck.checked)
//     funcArr.push(generatelowercase);

//    if(numbercheck.checked)
//     funcArr.push(generaterandomnumber);

//    if(symbolscheck.checked)
//     funcArr.push(generatesymbols);
  
//     for(let i=0;i<funcArr.length;i++)
//     {

//          password += funcArr[i]();
//     }

//     for(let i=0;i<passwordlength-funcArr.length;i++)
//     {
//         let randIndex = getrandominteger(0,funcArr.length);
//         password += funcArr[randIndex]();

//     }

//     // suffle the password
//     password = shufflepassword(Array.from(password));

//      passworddisplay.value = password;
    
//      // call strength function
//      calcstrength();


// });


    
// document.addEventListener("DOMContentLoaded", function() {
    // const inputslider = document.querySelector("[data-lengthSlider]");
    // const lengthdisplay = document.querySelector("[data-lengthNumber]");
    // const passworddisplay = document.querySelector("[data-passwordDisplay]");
    // const uppercasecheck = document.querySelector("#uppercase");
    // const lowercasecheck = document.querySelector("#lowercase");
    // const numbercheck = document.querySelector("#number");
    // const symbolscheck = document.querySelector("#symbols");
    // const indicator = document.querySelector("[data-indicator]");
    // const generatebutton = document.querySelector("[data-generateButton]");
    // const allcheckBox = document.querySelectorAll("input[type=checkbox]");
    // const symbols = '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';

    // // console.log('inputslider:', inputslider);
    // // console.log('lengthdisplay:', lengthdisplay);
    // // console.log('passworddisplay:', passworddisplay);
    // // console.log('uppercasecheck:', uppercasecheck);
    // // console.log('lowercasecheck:', lowercasecheck);
    // // console.log('numbercheck:', numbercheck);
    // // console.log('symbolscheck:', symbolscheck);
    // // console.log('indicator:', indicator);
    // // console.log('generatebutton:', generatebutton);

    // let password = "";
    // let passwordlength = 10;
    // let checkcount = 0;

    // function handlerSlider() {
    //     inputslider.value = passwordlength;
    //     lengthdisplay.textContent = passwordlength; // Use textContent instead of innerText
    // }

    // function setindicator(color) {
    //     indicator.style.backgroundColor = color; // Use backgroundColor instead of backgroundcolor
    // }

    // function getrandominteger(min, max) {
    //     return Math.floor(Math.random() * (max - min)) + min;
    // }

    // function generaterandomnumber() {
    //     return getrandominteger(0, 9);
    // }

    // function generatelowercase() {
    //     return String.fromCharCode(getrandominteger(97, 123));
    // }

    // function generateuppercase() {
    //     return String.fromCharCode(getrandominteger(65, 91));
    // }

    // function generatesymbols() {
    //     const randomnumber = getrandominteger(0, symbols.length);
    //     return symbols.charAt(randomnumber);
    // }

    // function calcstrength() {
    //     let hasupper = uppercasecheck.checked;
    //     let haslower = lowercasecheck.checked;
    //     let hasnum = numbercheck.checked;
    //     let hassym = symbolscheck.checked;

    //     if (hasupper && haslower && (hasnum || hassym) && passwordlength >= 8) {
    //         setindicator("#0f0");
    //     } else if ((haslower || hasupper) && (hasnum || hassym) && passwordlength >= 6) {
    //         setindicator("#ff0");
    //     } else {
    //         setindicator("#f00");
    //     }
    // }

    // function shufflepassword(array) {
    //     // Shuffling algorithm - Fisher-Yates method
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    //     }
    //     return array.join("");
    // }

    // function handlecheckboxchange() {
    //     checkcount = 0;
    //     allcheckBox.forEach((checkbox) => {
    //         if (checkbox.checked) {
    //             checkcount++;
    //         }
    //     });

    //     if (passwordlength <= checkcount) {
    //         passwordlength = checkcount;
    //         handlerSlider();
    //     }
    // }

    // allcheckBox.forEach((checkbox) => {
    //     checkbox.addEventListener('change', handlecheckboxchange);
    // });

    // inputslider.addEventListener('input', (e) => {
    //     passwordlength = e.target.value;
    //     handlerSlider();
    // });

    // generatebutton.addEventListener('click', () => {
    //     if (checkcount == 0) return;

    //     if (passwordlength < checkcount) {
    //         passwordlength = checkcount;
    //         handlerSlider();
    //     }

    //     password = "";

    //     let funcArr = [];
    //     if (uppercasecheck.checked) funcArr.push(generateuppercase);
    //     if (lowercasecheck.checked) funcArr.push(generatelowercase);
    //     if (numbercheck.checked) funcArr.push(generaterandomnumber);
    //     if (symbolscheck.checked) funcArr.push(generatesymbols);

    //     for (let i = 0; i < funcArr.length; i++) {
    //         password += funcArr[i]();
    //     }

    //     for (let i = 0; i < passwordlength - funcArr.length; i++) {
    //         let randIndex = getrandominteger(0, funcArr.length);
    //         password += funcArr[randIndex]();
    //     }

    //     // Shuffle the password
    //     password = shufflepassword(Array.from(password));

    //     passworddisplay.value = password;

    //     // Call strength function
    //     calcstrength();
    // });

//     handlerSlider(); // Initialize slider and display
// });


document.addEventListener("DOMContentLoaded", function() {
    const inputSlider = document.querySelector("[data-lengthSlider]");
    const lengthDisplay = document.querySelector("[data-lengthNumber]");
    const passwordDisplay = document.querySelector("[data-passwordDisplay]");
    const uppercaseCheck = document.querySelector("#uppercase");
    const lowercaseCheck = document.querySelector("#lowercase");
    const numberCheck = document.querySelector("#number");
    const symbolsCheck = document.querySelector("#symbols");
    const indicator = document.querySelector("[data-indicator]");
    const generateButton = document.querySelector("[data-generateButton]");
    const allCheckBox = document.querySelectorAll("input[type=checkbox]");
    const symbols = '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';

    let password = "";
    let passwordLength = 10;
    let checkCount = 0;

    function handleSlider() {
        inputSlider.value = passwordLength;
        lengthDisplay.textContent = passwordLength; // Use textContent instead of innerText
    }

    function setIndicator(color) {
        indicator.style.backgroundColor = color; // Use backgroundColor instead of backgroundcolor
    }

    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function generateRandomNumber() {
        return getRandomInteger(0, 9).toString();
    }

    function generateLowercase() {
        return String.fromCharCode(getRandomInteger(97, 123));
    }

    function generateUppercase() {
        return String.fromCharCode(getRandomInteger(65, 91));
    }

    function generateSymbol() {
        const randomNumber = getRandomInteger(0, symbols.length);
        return symbols.charAt(randomNumber);
    }

    function calculateStrength() {
        let hasUpper = uppercaseCheck.checked;
        let hasLower = lowercaseCheck.checked;
        let hasNum = numberCheck.checked;
        let hasSym = symbolsCheck.checked;

        if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
            setIndicator("#0f0");
        } else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6) {
            setIndicator("#ff0");
        } else {
            setIndicator("#f00");
        }
    }

    function shufflePassword(array) {
        // Shuffling algorithm - Fisher-Yates method
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array.join("");
    }

    function handleCheckboxChange() {
        checkCount = 0;
        allCheckBox.forEach((checkbox) => {
            if (checkbox.checked) {
                checkCount++;
            }
        });

        if (passwordLength < checkCount) {
            passwordLength = checkCount;
            handleSlider();
        }
    }

    allCheckBox.forEach((checkbox) => {
        checkbox.addEventListener('change', handleCheckboxChange);
    });

    inputSlider.addEventListener('input', (e) => {
        passwordLength = e.target.value;
        handleSlider();
    });

    generateButton.addEventListener('click', () => {
        if (checkCount == 0) return;

        if (passwordLength < checkCount) {
            passwordLength = checkCount;
            handleSlider();
        }

        password = "";

        let funcArr = [];
        if (uppercaseCheck.checked) funcArr.push(generateUppercase);
        if (lowercaseCheck.checked) funcArr.push(generateLowercase);
        if (numberCheck.checked) funcArr.push(generateRandomNumber);
        if (symbolsCheck.checked) funcArr.push(generateSymbol);

        // Add guaranteed characters
        for (let i = 0; i < funcArr.length; i++) {
            password += funcArr[i]();
        }

        // Add remaining characters
        for (let i = 0; i < passwordLength - funcArr.length; i++) {
            let randIndex = getRandomInteger(0, funcArr.length);
            password += funcArr[randIndex]();
        }

        // Shuffle the password
        password = shufflePassword(Array.from(password));

        passwordDisplay.value = password;

        // Call strength function
        calculateStrength();
    });

    handleSlider(); // Initialize slider and display
});
