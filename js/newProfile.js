var $ = function(id) {return document.getElementById(id);};

function newProfile() { 
    const com = "model.inputs";
    $("quickStats").innerHTML = `
    Navn: <input id="inputName" type="name" 
    oninput="${com}.name = this.value"/><br>
    Adresse: <input id="inputAddress" type="address" 
    oninput="${com}.address = this.value"/><br>
    Industri: <input id="inputIndustry" type="text" 
    oninput="${com}.industry = this.value"/><br>
    <button onclick="pushProfile()" style="font-size: 100%">push Profile</button>
`
}

function pushProfile() {
    model.inputs.id = model.companies.length;
    let cloneInputs = (JSON.parse(JSON.stringify(model.inputs)));
    model.companies.push(cloneInputs);

    model.income.push(
        {
            id: model.inputs.id,
            entries: []
        })
}