let num = 1;
r = document.write

for(num; num <= 100; num++){
    if(num % 3 != 0 && num % 5 != 0){document.write(num + " <br>");}
    if(num % 3 == 0 && num % 5 != 0){document.write(num + " Fizz<br>");}
    if(num % 3 != 0 && num % 5 == 0){document.write(num + " Buzz<br>");}
    if(num % 3 == 0 && num % 5 == 0){document.write(num + " Fizz Buzz<br>")}
    }

