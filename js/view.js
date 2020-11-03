
    
    updateView();
    
    function updateView(){
        if(model.page == 'vote'){
            updateViewVotePage();}
            else if (model.page == 'newFilm'){
                updateViewNewFilmPage();
            }else{
                updateViewVotePage();
            }
        }
    
    
    
        function updateViewVotePage(){
            let votesTableHtml = '';
            for(let i = 1; i < model.titel.length; i++){
                let Film = model.titel[i];
                votesTableHtml +=`
                <table id="myTable">
                
                <td>${Film.nrValgt4}</td>
                <td>${Film.filmer}</td>
                <td>${Film.actor}</td>
                <td>${Film.catagory}</td>
                <td>${Film.year}</td>
                <td>${Film.votes}</td>
                
                </table>`;
            }
               
    
    
    
            document.getElementById('movies').innerHTML = `
            <button onclick="model.page='newFilm'; updateView();">Legg til nye filmer</button>
            <button onclick="myFunction()">sort it by rateing</button>
            <button onclick="sortTable()">Sort</button>

            <table id="myTable">
                <td>nr</td>
                <td>Titel</td>
                <td>Skuespiller</td>
                <td>Sjanger</td>
                <td>Årsgang</td>
                <td>Vurdering</td>
                <hr><br>
                ${votesTableHtml}
            
            
            `;
        }
    
        function sortTable() {
            var table, rows, switching, i, x, y, shouldSwitch;
            table = document.getElementById("myTable");
            
            while (switching) {
              switching = false;
              rows = table.rows;
              for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[0];
                y = rows[i + 1].getElementsByTagName("TD")[0];
                
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                  
                  shouldSwitch = true;
                  break;
                }
              }
              if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
              }
            }
          }
            function updateViewNewFilmPage(){
                let nrValgt2 = model.nrValgt3.map(cat => `<option> ${cat}</option>`).join(' ');
                let categoroy = model.catagories.map(cat => `<option> ${cat}</option>`).join(' ');
                let yearsfromto = model.yearfromto2.map(cat => `<option> ${cat}</option>`).join(' ');
                let votefromto = model.votefromto2.map(cat => `<option> ${cat}</option>`).join(' ');
                
                
                //sorting //
                document.getElementById('movies').innerHTML = `
                
                <h3>Her kan du legge til filmer!</h3>
                
                
                nr:
                <select onchange="model.nrValgt=this.value" value="${model.nrValgt}">
                <option value="nr"> 0:</option>
                ${nrValgt2}</select>
               
                Tittel:
                <input type="text" oninput="model.filmerInput=this.value" value="${model.filmerInput}" />
                </select>

                Skuespillere: 
                <input type="text" oninput="model.actorInput=this.value" value="${model.actorInput}"/>
                </select>
                
                
                Sjanger:
                <select onchange="model.catagoryInput=this.value" value="${model.catagoryInput}">
                <option value="cata"> Catagory:</option>
                ${categoroy}
                </select>
                
                Velg: 
                <select onchange="model.yearInput=this.value" value="${model.yearInput}">
                <option value="year"> Years:</option>
                ${yearsfromto}
                </select>
                
                
                Rating:
                <select onchange="model.votesInput=this.value" value="${model.votesInput}">
                <option value="rate"> 0:</option>
                ${votefromto}
                </select>
                
                </select>
                
                <br></br>
                

                <button onclick="addNewFilm()">Legg til film</button>
    
                <button onclick="model.page='vote'; updateView();">Gå tilbake</button>
                
                `; 
                
            }
            
            


            
            

