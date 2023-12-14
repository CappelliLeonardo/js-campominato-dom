

const buttonInput = document.querySelector('button');

const quadratone = document.querySelector ('.quadratone');

const diffSelect = document.getElementById('difficulty');
console.log('diffSelect', diffSelect, typeof diffSelect);



buttonInput.addEventListener('click', function(){


    quadratone.innerHTML = '';


    
    const cellNumber = parseInt(diffSelect.value);
    for (let i = 1; i <= cellNumber; i++){

        const square = document.createElement ('div');

        // AGGIUNGO LA CLASSE SQUARE ALLA COSTANTE SQUARE 
        square.classList.add ('square');

        square.innerHTML = i;


        //  console.log(square)

        // APPENDO LA CLASSE SQUARE NEL QUADRATONE CONTAINER 
        quadratone.append(square);

        square.addEventListener('click', function(){

            this.classList.toggle ('active');
            console.log (this.innerHTML);

        });
    }
}
);