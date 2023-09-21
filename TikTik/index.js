
let r=16;
let c=37;

function createTable(){
    let table= document.getElementById('table');
    for (let rows = 0; rows < r; rows++) {
        let tr = document.createElement('tr') ;  
        table.appendChild(tr);
        for (let col = 0; col < c; col++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
    }
}

function addMore(){
    let table= document.getElementById('table');
    for (let rows = 0; rows < 1; rows++) {
        let tr = document.createElement('tr') ;  
        table.appendChild(tr);
        for (let col = 0; col < c; col++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
    }
}
function addBox(){
    let con= document.getElementById('con')
    let bap= document.getElementById('bap')

    // let con = document.body;
    let box = document.createElement('td');
    bap.appendChild(box);
}
