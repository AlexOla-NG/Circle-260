// STUB: declare variables
let phoneInp = document.querySelector("#phone-inp");
let submitBtn = document.querySelector("button[type='submit']")

const MTN = [0703, 0706, 0803, 0806, 0810, 0813, 0814, 0816, 0903, 0906, 0913]
const AIRTEL = [0701, 0802, 0808, 0812, 0902, 0907, 0901, 0912]
const GLO = [0705, 0805, 0807, 0811, 0815, 0905]
const ETISALAT = [0809, 0817, 0818, 0908, 0909]

// STUB: event listener
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    let temp = splitNum(phoneInp.value)
    
    if (phoneInp.value === "") {
        alert('No input submitted')
        return
    }

    if (phoneInp.value.length < 11 || phoneInp.value.length > 11) {
        alert(`Invalid phone number. Please enter at least 11 digits`)
        phoneInp.value = ""
        return
    }

    detectNetwork(temp)

    phoneInp.value = ""

})

// STUB: function that returns first 4 digits of user inp
const splitNum = (num) => {
    let slicedNum = num.slice(0, 4)

    // STUB: convert slicedNum to number using unary operator
    return +slicedNum
};

// STUB: function that checks what network the phone number belongs to
const detectNetwork = (phoneNum) => {
    MTN.some((elem) => elem === phoneNum) ? alert('MTN number')
    : AIRTEL.some((elem) => elem === phoneNum) ? alert('Airtel number')
    : GLO.some((elem) => elem === phoneNum) ? alert('Glo number')
    : ETISALAT.some((elem) => elem === phoneNum) ? alert('Etisalat number')
    : alert('Number not recognized')
}