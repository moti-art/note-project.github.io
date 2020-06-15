
 var Notes=[];
 let next_id = 1;

 const div = document.getElementById('notes');
 const form = document.getElementById('inputs_field');
 form.addEventListener('submit',add_note)

 window.onload = function (e) {
    if (localStorage.getItem('items')!==null) {
       let temp = JSON.parse(localStorage.getItem('items'));
      load_data(temp)
      Notes=temp
      } else {
       Notes = []
      }

}
    

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
    var image = document.createElement('div'); 
    var x = document.createElement('button')
    image.classList.add("add_note")
    image.innerHTML='<img src = "notes_photos/notebg.png" >'
    div.appendChild(image)
    x.classList.add("delete")
    x.innerHTML = "X";
    x.id= next_id;
    image.appendChild(x);
    var note_details = document.createElement('div')
    note_details.innerHTML = create_petek() ;
    note_details.classList.add("add_text")
    image.appendChild(note_details)
    set_localstorage(Notes) 

   
    x.addEventListener('click', ()=>{ 
        
        image.remove()
        Notes = Notes.filter(item => item.id !== parseInt(x.id))
        update_all_id(x.id)

        set_localstorage(Notes) 
     
   })
   next_id++;
}

    
      
    }


    function set_localstorage(Notes){
        localStorage.setItem('items', JSON.stringify(Notes))
    }
   

    function create_petek(){
            var petek = new Object();
            petek["text"]=document.getElementById('textarea').value;
            petek["time"]=document.getElementById('time').value ;
            petek["date"]=document.getElementById('date').value;
            petek["id"]=Notes.length;
            Notes.push(petek)
        return petek.text + '<br><br><br>' + petek.date + '<br>' + petek.time ; 
    }

    function update_all_id(the_id){
        for(var i =the_id;i<Notes.length;i++){
              Notes[i].id-=1;
        }

    }
    function load_data(arr){
        for(var i = 0 ; i < arr.length;i++){
            var image = document.createElement('div'); 
            var x = document.createElement('button')
            image.classList.add("add_note")
            image.innerHTML='<img src = "notes_photos/notebg.png" >'
            div.appendChild(image)
            x.classList.add("delete")
            x.innerHTML = "X";
            x.id = next_id;
            image.appendChild(x);
            var note_details = document.createElement('div')
            note_details.innerHTML = arr[i].text + '<br><br><br>' + arr[i].date + '<br>' + arr[i].time;
            note_details.classList.add("add_text")
            image.appendChild(note_details)
            next_id++
            x.addEventListener('click', ()=>{ 
        
                image.remove()
                
                Notes = Notes.filter(item => item.id !== parseInt(x.id))
                localStorage.setItem('items', JSON.stringify(Notes))
                // update_all_id(x_id)
        
                // set_localstorage(Notes) 
             
           })
        }
      
        
    }

   

  
    
    

   

















   
    
