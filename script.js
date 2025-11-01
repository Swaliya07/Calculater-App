
    const display = document.getElementById("display");
        
        function appendValue(val){
         const display = document.getElementById("display");
        display.value += val;
        }
        
        function cleardisplay() {
        const display = document.getElementById("display");
         display.value = "";
       
    }
    function calculate(){
    const display = document.getElementById("display");
        try{
            display.value = eval(display.value)
        }
        catch{
            display.value = "Error"
        }
    }
  
     