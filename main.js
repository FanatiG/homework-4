(function(){
	console.log('Задание 1');
	console.log('<--------');
    function recursion() 
	{   
        const child = document.getElementById('deepChild');  
        function drawGreen(el) {el.style.border = '4px solid green';}
        function catchParent(el) 
		{   
            drawGreen(el);
            const parent = el.parentNode;
            const id = parent.getAttribute('id');
            if(!id) 
			{
                setTimeout(() => 
				{
                    drawGreen(parent);
                    catchParent(parent)
                }, 1000);        
            } else 
			{
                drawGreen(parent)
            };
        }
		
        catchParent(child);    
    
    }
    recursion();

}());
