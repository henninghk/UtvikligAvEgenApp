var $ = function(id) {return document.getElementById(id);};
function loadProfiles(){
    let profiles = model.companies;
    const chosenWeeks = model.current.weeksToSum;
    model.outputDiv.innerHTML = ``;
    for (let profile of profiles) {
        const profileName = profile.name;
        const industry = profile.industry;
        const profileID = profile.id;
        const averageIncome = calcAverage(chosenWeeks,model.income[profileID].entries);

        model.outputDiv.innerHTML +=`<div id="${profile.id}">
        Butikknavn: ${profileName}<br>
        Gjennomsnittlig inntekt siste ${chosenWeeks} uker: ${averageIncome}% <br>
        Forrige registrering: ${null}! <br>
        Bransje: ${industry} <br>
        <button onclick="checkProfile(${profileID})">Vis profil</button> <br>
        </div>
        <div id="incomePercent">This is a test: ${averageIncome}%</div>
        `;
    }

    function calcAverage(weeks,entries) {
        let sum = 0;
    
        if (entries.length > 0) {
            for (let i = 0; i < weeks && i < entries.length; i++) {
                sum += entries[i].percent;
            }
            return (sum/entries.length).toFixed(2);
        } else {
            return "unkown";
        } 
        
    }};