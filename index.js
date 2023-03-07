//Name - Ciba Patel 56 ET1
var quote=[ "\“Life is uncertain. Eat dessert first.\”" + "<br>"+"- Ernestine Ulmer",
"\“Food is symbolic of love when words are inadequate.\”" + "<br>"+"– Alan D. Wolfelt",
"\"I know once people get connected to real food, they never change back.\""+"<br>" +"– Alice Waters",
'\"Food brings people together on many different levels. It\’s nourishment of the soul and body; it\’s truly love.\"'+"<br>"+"– Giada De Laurentiis",
"\“The best comfort food will always be greens, cornbread, and fried chicken.\”"+"<br>"+"– Maya Angelou",
"\“To me, food is as much about the moment, the occasion, the location and the company as it is about the taste.\""+"<br>"+
"– Heston Blumenthal",
"\“You don’t need a silver fork to eat good food.\”" +"<br>"+"– Paul Prudhomme",
"\“All happiness depends on a leisurely breakfast.\”"+"<br>"+" –John Gunther",
"\“Food is not rational. Food is culture, habit, craving and identity.\”"+"<br>"+" – Jonathan Safran Foer",
"\“The belly rules the mind.\”"+"<br>"+" – Spanish Proverb"
]
   

function newQuote() {
    var randomNumber = Math.floor(Math.random()*(quote.length));
document.getElementById("quotedisplay").innerHTML = quote[randomNumber];

}
function validate(input){
    //var mail = document.getElementById("text1").value;
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if(input.value.match(regx)){
        return true; 
    }

    else{
        alert("Please provide valid email and password")
        document.form1.text1.focus();
        return false;
    }
}
//Booking table
function Validateform() {
    if(document.Myform.Name.value == ''){
        alert("Please fill all the details");
        document.Myform.Name.focus();
        return false;
    }
    else if(document.Myform.Phone.value == ''){
        alert("Please fill all the details");
        document.Myform.Phone.focus();
        return false;
}
else if(document.Myform.Date.value == ''){
        alert("Please fill all the details");
        document.Myform.Date.focus();
        return false;
}
else if(document.Myform.Time.value == ''){
        alert("Please fill all the details");
        document.Myform.Time.focus();
        return false;
}
else if(document.Myform.Number.value == ''){
        alert("Please fill all the details");
        document.Myform.Number.focus();
        return false;
}
else{
    alert("Thankyou! your form has been successsfully submitted")
    return true;
}

}
document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector('#cart-list ul');
    const forms = document.forms;

    //delete 

    list.addEventListener('click',(e)=>{
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
        
    })
    list.addEventListener('click',(e)=>{
        if(e.target.className == 'order'){
            
        }
        
    })
    //adding 
    const addForm = forms['add-cart']
    addForm.addEventListener('submit',function(e){e.preventDefault();
//creating elements
const value = addForm.querySelector('input[type = "text"]').value;
const li = document.createElement('li')
const itemName = document.createElement('span');
const deleteBtn = document.createElement('span');
const orderBtn = document.createElement('span');
//add text 

itemName.textContent = value;
deleteBtn.textContent = 'delete';
orderBtn.textContent = 'Place order';
//add classes
itemName.classList.add('name');
deleteBtn.classList.add('delete')
orderBtn.classList.add('order')
//apend to DOM
li.appendChild(itemName);
li.appendChild(deleteBtn);
li.appendChild(orderBtn);
list.appendChild(li)
    })
    
})