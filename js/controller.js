function addNewFilm(){
   

    if ( 
    
    model.filmerInput != ''&& 
    model.filmerInput!= ''&&  
    model.catagoryInput != ''&& 
    model.yearInput != ''&&
    model.votesInput != ''&&
    model.nrValgt != ''){
        
        
        
        
        model.titel.push({
            filmer: model.filmerInput,
            actor: model.actorInput,
            catagory:model.catagoryInput,
            year:model.yearInput,
            votes:model.votesInput,
            nrValgt4: model.nrValgt,
          
        }
        
        )
        model.page = '';
        model.filmerInput = '';
        model.actorInput = '';
        model.catagoryInput = '';
        model.yearInput = '';
        model.votesInput = '';
        model.nrValgt='';
        
        updateView();
    }
    else alert("Et eller flere felter")
    
}

