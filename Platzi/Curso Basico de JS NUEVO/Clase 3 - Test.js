let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
function readArray(array){
  for (let i = 0; i < array.length; i++){
    console.log(`${i + 1} ${array[i]}`);
  }
}
readArray(myArray);