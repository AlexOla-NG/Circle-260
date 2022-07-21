// STUB: declare variables
let phoneInp = document.querySelector("#phone-inp");
let submitBtn = document.querySelector("button[type='submit']")

const MTN = [0703, 0706, 0803, 0806, 0813, 0816]
const Airtel = [0702, 0802, 0808, 0812, 0818]
const Glo = [0705, 0707, 0805, 0807, 0815, 0817]

// STUB: event listener
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (phoneInp.value === "") {
        alert('No input submitted')
        return
    }

    if (phoneInp.value.length < 11 || phoneInp.value.length > 11) {
        alert(`Invalid phone number. Please enter at least 11 digits`)
        phoneInp.value = ""
        return
    }

    let temp = splitNum(phoneInp.value)

    MTN.some((elem) => elem === temp) ? alert('MTN number')
        : Airtel.some((elem) => elem === temp) ? alert('Airtel number')
            : Glo.some((elem) => elem === temp) ? alert('Glo number')
                : alert('Number not recognized')
   
    phoneInp.value = ""

})

// STUB: function that returns first 4 digits of user inp
const splitNum = (num) => {
    let slicedNum = num.slice(0, 4)

    // STUB: convert slicedNum to number using unary operator
    return +slicedNum
}