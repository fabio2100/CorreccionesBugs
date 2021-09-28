//update function for span elements.
function updateSelectionOrder() { 
    const rowsSelected = document.querySelectorAll('.row-selected');
    rowsSelected.forEach(element => {
        const a = element.querySelector('a').getAttribute('value');  		
        const aPosicion = selectedTemplates.indexOf(a)+1;						   
        const nroSpan = element.querySelector('span').outerText;
        if(nroSpan != aPosicion){
            element.querySelector('span').innerText = aPosicion;	
        }
    });
}