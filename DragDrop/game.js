
let r = 4;
let c = 4;

function createTable() {
    var index = 0;

    let table = document.getElementById('table');
    for (let rows = 0; rows < r; rows++) {

        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let col = 0; col < c; col++) {
            let parentBox = document.createElement('td');
            parentBox.id = 'parentBox';
            let childBox = document.createElement('td');
            let img = document.createElement('img');
            childBox.id = 'childBox';
            childBox.draggable = true;
            tr.appendChild(parentBox);
            parentBox.appendChild(childBox);
            childBox.appendChild(img);
            img.src = gOne[index];
            index++;

        }
    }
}
const gOne = [];
gOne[0] = 'https://i.ibb.co/7Jr28bn/1.jpg';
gOne[1] = 'https://i.ibb.co/KsDfqV2/2.jpg';
gOne[2] = 'https://i.ibb.co/2d3QJjJ/3.jpg';
gOne[3] = 'https://i.ibb.co/hCQBFrj/4.jpg';
gOne[4] = 'https://i.ibb.co/n7yCDM5/5.jpg';
gOne[5] = 'https://i.ibb.co/tYpzY1S/6.jpg';
gOne[6] = 'https://i.ibb.co/FgJ2CPT/7.jpg';
gOne[7] = 'https://i.ibb.co/1L2b3qT/8.jpg';
gOne[8] = 'https://i.ibb.co/mCzDnpj/9.jpg';
gOne[9] = 'https://i.ibb.co/28rNGyG/10.jpg';
gOne[10] = 'https://i.ibb.co/r58QNWD/11.jpg';
gOne[11] = 'https://i.ibb.co/sW2NQNF/12.jpg';
gOne[12] = 'https://i.ibb.co/8NbXvJ8/13.jpg';
gOne[13] = 'https://i.ibb.co/mJSmCXv/14.jpg';
gOne[14] = 'https://i.ibb.co/m6KHNjC/15.jpg';
gOne[15] = 'https://i.ibb.co/0KNSC48/16.jpg';


