
 var Notes=[];
 let next_id = 1;

 const div = document.getElementById('notes');
 const form = document.getElementById('inputs_field');
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

    const image = document.createElement('div'); 
    const x_button = document.createElement('button')
    image.classList.add("add_note")
    image.innerHTML='<img src = "notes_photos/notebg.png" >'
    div.appendChild(image)
    x_button.classList.add("delete")
    x_button.innerHTML = "X";
    x_button.id= next_id;
    image.appendChild(x_button);
    var note_details = document.createElement('div')
    note_details.innerHTML = petek.text + '<br><br><br>' + petek.date;
    note_details.classList.add("add_text")
    image.appendChild(note_details)
    localStorage.setItem('items', JSON.stringify(Notes))
    localStorage.setItem('counter', JSON.stringify(next_id))

    x_button.onclick = function(){
        image.remove()
        Notes = Notes.filter(item=>item.id!==parseInt(x_button.id))
        localStorage.setItem('items',JSON.stringify(Notes))

    }

   next_id++;
}   
    }
   
    window.onload = function () {
        if (localStorage.getItem('items')!==null) {
           let temp = JSON.parse(localStorage.getItem('items'));
           next_id = JSON.parse(localStorage.getItem('counter'))+1;

           for(var i = 0 ; i < temp.length;i++){
            const image = document.createElement('div'); 
            const x_button = document.createElement('button')
            image.classList.add("add_note")
            image.innerHTML='<img src = "notes_photos/notebg.png" >'
            div.appendChild(image)
            x_button.classList.add("delete")
            x_button.innerHTML = "X";
            x_button.id = temp[i].id;
            image.appendChild(x_button);
            var note_details = document.createElement('div')
            note_details.innerHTML = temp[i].text + '<br><br><br>' + temp[i].date ;
            note_details.classList.add("add_text")
            image.appendChild(note_details)

            x_button.onclick = function(){
                image.remove()
                Notes = Notes.filter(item=>item.id=!x_button.id)
                localStorage.setItem('items',JSON.stringify(Notes))
        
            }
            Notes = temp;
        }

          } else {
           Notes = []
          }
    
    }

   

  
    
    

   

















   
    
