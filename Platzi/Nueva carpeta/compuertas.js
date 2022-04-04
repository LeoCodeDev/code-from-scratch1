let clientBank = true;
let destBank = false;
let clientAccount = true;
let destAccount = true;
let time = 18;
let clientBalance = 2000000;
let transfer = 1000000;
let fee = 100;

if(clientAccount == true && destAccount == true)
{
    document.write("verificado<br>");
    if(time >= 9 && time <= 12 || time >= 15 && time <= 20)
    {
        document.write("Horario Habil<br>");
        if(clientBank == destBank)
        {
            document.write("mismo banco<br>");
            if(clientBalance > transfer)
            {
                document.write("transferir: "+transfer);
            }
            else{
            }
        }
        else
        {
            document.write("diferente banco<br>")
            if(clientBalance > transfer + fee){
                document.write("Transferir: "+ (transfer+fee));
            }
        }

    }
    else{
        document.write("horario no habil<br>");
    }

}
else
{
    document.write("no verificado<br>");
}