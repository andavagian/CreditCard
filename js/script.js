function changeName(){
    full_name.innerText = `${card_holder_input.value}`
    resetName()
}

function resetName(){
    if(full_name.innerText == ''){
        full_name.innerText = `FULL NAME`
    }
}

function pointName(){
    card_holder_input.focus()
}

function pointDate(){
    month.focus()
}

function changeDate1(){
    if(year.value != ''){
        mm_yy.innerText = `${month.value}/${year.value}`
    }else{
        mm_yy.innerText = `${month.value}/YY`
    }
}

function changeDate2(){
    if(month.value != ''){
        mm_yy.innerText = `${month.value}/${year.value}`
    }else{
        mm_yy.innerText = `MM/${year.value}`
    }
}

let first_4 = document.querySelector(`#card_number > span:first-child`)
let second_4 = document.querySelector(`#card_number > span:nth-child(2)`)
let third_4 = document.querySelector(`#card_number > span:nth-child(3)`)
let fourth_4 = document.querySelector(`#card_number > span:nth-child(4)`)

function changeNumber(){
    if(card_number_input.value.length <= 4){
        first_4.innerText = card_number_input.value
    } else if(card_number_input.value.length > 4 && card_number_input.value.length <= 8){
        second_4.innerText = `****`
    } else if(card_number_input.value.length > 8 && card_number_input.value.length <= 12){
        third_4.innerText = `****`
    } else if(card_number_input.value.length > 12 && card_number_input.value.length <= 16){
        fourth_4.innerText = card_number_input.value.slice(12,16)
    }
}

function pointNumber(){
    card_number_input.focus()
}

function rotateCard(){
    card.style.transform = `rotateY(180deg)`
    card.style.transition = `transform 1s ease-in-out`
    card_number.remove()
    card_holder_expires.remove()
    img1.remove()
    img2.remove()
    card.style.padding = '0'
    card.innerHTML += `
    <div id='black_stripe'></div>
    <div id='cvv1'>
        <p>CVV</p>
        <div id='cvv_number'></div>
    </div>
    <img src='../images/visa.png' id='img3'>
    `
}

function resetCard(){
    card.style.transform = 'rotateY(360deg)'
    card.style.padding = '25px 15px'
    card.innerHTML = `<div>
    <img src="images/chip.png" alt="" id="img1">
    <img src="images/visa.png" alt="" id="img2">
</div>
<p id="card_number" onclick="pointNumber()">
    <span>####</span>
    <span>####</span>
    <span>####</span>
    <span>####</span>
</p>
<div id="card_holder_expires">
    <div>
        <p>Card Holder</p>
        <p id="full_name" onclick="pointName()">FULL NAME</p>
    </div>
    <div>
        <p>Expires</p>
        <p id="mm_yy" onclick="pointDate()">MM/YY</p>
    </div>
</div>`
}

function changeCvv(){
    cvv_number.innerText += `*`
}