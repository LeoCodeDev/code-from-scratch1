class Bucks{
    constructor( val , amt ){
        this.value = val;
        this.amount = amt;
        this.url = val + ".jpg";
    }
}

let box = [];
box.push(new Bucks(500, 20));
box.push(new Bucks(100, 10));
box.push(new Bucks(50, 10));
box.push(new Bucks(20, 10));
box.push(new Bucks(10, 10));
box.push(new Bucks(5, 10));
box.push(new Bucks(1, 10));

let cashOut = [];
let money,papers,div;

let cashOutButton = document.getElementById("withdraw");
cashOutButton.addEventListener("click", getMoney);
let recipt = document.getElementById("recipt");
let bucks = document.getElementById("bucks");

function getMoney()
{
    let amount = document.getElementById("amount")
    money = parseInt(amount.value);
    for(let dollar of box)
    {
        if(money > 0)
        {
            div = Math.floor(money / dollar.value);
            if(div > dollar.amount)
            {
                papers = dollar.amount;
            }
            else
            {
                papers = div;
            }
            cashOut.push(new Bucks(dollar.value, papers));
            money -= (dollar.value * papers);
        }
    }
    if(money > 0)
    {
        recipt.innerHTML = "there's not enought money.";
    }
    else
    {
        for(let pushOut of cashOut){
            if(pushOut.amount > 0){
                recipt.innerHTML += pushOut.amount + " bucks of " + pushOut.value + ".00 <br>";
            }
            for(let quantity = 0; quantity < pushOut.amount; quantity++){
                bucks.innerHTML += "<img src='"+ pushOut.url + "' alt='" + pushOut.value +" bucks'><br>";
            }
        }
    }
}