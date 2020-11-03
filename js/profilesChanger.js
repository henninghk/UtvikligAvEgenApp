var $ = function(id) {return document.getElementById(id);};

function checkProfile(id) {
    
    $('header').innerHTML ="Name: "+ 
    model.companies[id].name;
    model.outputDiv.innerHTML = "Adress: "+ 
    model.companies[id].address +"<br>"+
    model.companies[id].industry +"<br>";
    for (let entry of model.income[id].entries) {
        model.outputDiv.innerHTML += 'Dato: ' + 
        entry.date + ' Prosent vekst: '+ 
        entry.percent+'% <br>';
    }
};