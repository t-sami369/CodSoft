let clearDisplay = ()=>{
    document.getElementById('display').value='';
}

let appendToDisplay = (value)=>{
    document.getElementById('display').value += value;
}

let calculateResult = ()=>{
    const displayValue = document.getElementById('display').value;
    try{
        const result = eval(displayValue);
        document.getElementById('display').value = result;
    }catch(error){
      document.getElementById('display').value = 'Error';
    }
}

let deleteLastChar = ()=>{
    const currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}