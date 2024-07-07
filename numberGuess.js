 		var c=Math.random()
 		var n=Math.floor(c*10)+1
 		console.log(n);	
 		var result=document.getElementById("res");
 		var Score=document.getElementById("scr");

 		var score=10;
 		function check() {
	    var n1 = document.getElementById("num1");
	    var result = document.getElementById("res");
	    var scoreDisplay = document.getElementById("scr");
	    
	    var s = n1.value.trim(); 

	    if (s === "" || isNaN(s)) {
	        result.textContent = "Please enter a valid number.";
	        result.classList.add('visible');
	        return; 
	    }

	    s = Number(s);

	    if (score > 0) 
	    {
	        if (s === n) {
	            result.textContent = "You Won";
	            scoreDisplay.textContent = "Your score: " + score;
	            n = Math.floor(Math.random() * 10) + 1;
	            console.log(n);
	            n1.value = '';
	        } 
	        else 
	        {
	            result.textContent = "Try again";
	            score -= 1;
	            scoreDisplay.textContent = "You have " + score + " more chances";
	            n1.value='';
	        }
	    } 
	    else 
	    {
	        result.textContent = "No more chances available at this time. Try again after minutes.";
	        scoreDisplay.textContent = "Your score: " + score;
	    }
	    result.classList.add('visible');
	    scoreDisplay.classList.add('visible');
	}
