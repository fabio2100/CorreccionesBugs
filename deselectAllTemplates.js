   function deselectAllTemplates() {
        const rowsSelected = document.querySelectorAll('.row-selected');
        rowsSelected.forEach( element => {
			element.classList.remove('row-selected');
			element.querySelector('span').remove();
		});
    }