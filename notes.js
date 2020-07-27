
 var Notes=[];
 let next_id = 1;

 const div = document.getElementById('notes');
 const form = document.querySelector('.inputs_field');
 form.addEventListener('submit',add_note)

function add_note(e){

if(document.getElementById('textarea').value==""){
    alert("insert note details please")
    return;
}

else if(document.getElementById('date').value==""){
    alert("insert date please")
    return;
}
else{
    
    e.preventDefault()
        var petek = new Object();
        petek["text"]=document.getElementById('textarea').value;
        petek["date"]=document.getElementById('date').value;
        petek["id"]=next_id;
        Notes.push(petek)

        const card = document.createElement('div');
        card.classList.add("new_note")
        card.innerHTML = `<div class = "card_div">
                           <img src = "notes_photos/notebg.png" class = "add_note">
                           <button class = "delete" id=${next_id}> X </button>
                           <span class = "add_text"> ${petek.text}'<br><br><br>'${petek.date} </span>
                      </div>`
        div.appendChild(card)
    
    localStorage.setItem('items', JSON.stringify(Notes))
    localStorage.setItem('counter', JSON.stringify(next_id))


    document.getElementById(next_id).addEventListener('click', function(){
        this.parentElement.parentElement.remove()
        Notes = Notes.filter(item=>item.id!==parseInt(this.id))
        localStorage.setItem('items',JSON.stringify(Notes))


    }) 
        
   next_id++;
}   
    }
   
    window.onload = function () {
        if (localStorage.getItem('items')!==null) {
           let temp = JSON.parse(localStorage.getItem('items'));
           next_id = JSON.parse(localStorage.getItem('counter'))+1;

           for(var i = 0 ; i < temp.length;i++){

            const card = document.createElement('div');
            card.classList.add("new_note")
            card.innerHTML = `<div class = "card_div">
                               <img src = "notes_photos/notebg.png" class = "add_note">
                               <button class = "delete" id=${temp[i].id}> X </button>
                               <span class = "add_text"> ${temp[i].text}<br><br><br>${temp[i].date} </span>
                          </div>`
            div.appendChild(card)

            document.getElementById(temp[i].id).addEventListener('click', function(){
                this.parentElement.parentElement.remove()
                Notes = Notes.filter(item=>item.id!==parseInt(this.id))
                localStorage.setItem('items',JSON.stringify(Notes))
        
        
            }) 
            Notes = temp;
        }

          } else {
           Notes = []
          }
    
    }

   

  
    
    

   

















   
    
