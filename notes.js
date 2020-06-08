
 let  Notes=[];
 const div = document.getElementById('notes');
 const form = document.getElementById('inputs_field');
 form.addEventListener('submit',add_note)

function add_note(e){
    // var x = check_empty_fields();
    // if(x){
    //     break;
    // }
    // else{
        e.preventDefault()
        var image = document.createElement('div'); 
        var x = document.createElement('button')
        image.classList.add("add_note")
        image.innerHTML='<img src = "notes_photos/notebg.png" >'
        div.appendChild(image)
        x.classList.add("delete")
        x.innerHTML = "X";
        image.appendChild(x);
    
        x.addEventListener('click', ()=>{ 
            image.remove();
            // clean_storage()

       })
       var petek = new Object();
       petek["text"]=document.getElementById('textarea').value;
       petek["time"]=document.getElementById('time').value ;
       petek["date"]=document.getElementById('date').value;
       Notes.push(petek)

        var note_text = document.createElement('div');
        var note_time = document.createElement('div');
        var note_date = document.createElement('div');
        note_text.innerHTML = petek["text"];
        note_time.innerHTML = petek["time"] ;
        note_date.innerHTML = petek["date"] ;
        note_text.classList.add("add_text")
        note_time.classList.add("add_time")
        note_date.classList.add("add_date")
        image.appendChild(note_text)
        image.appendChild(note_time)
        image.appendChild(note_date)
    
        
        
        // localStorage.setItem('items', JSON.stringify(Notes));
        // window.onload = function load_data(e);
    
    
    }
   
    
// }

// function check_empty_fields(){
//     if(document.getElementById('textarea').value === ''){
//         alert('please fill the text area')
//         return true
      
//     }
//     if(document.getElementById('date').value ===
//     ''){
//         alert('please fill the date area')
//         return true
//     }
//     else{
//         return false
//     }
// }
   

















   
    
