const entertainmentDiv = document.getElementById("entertainmentDiv");
	const adventureDiv = document.getElementById("adventureDiv");
	const leisureDiv = document.getElementById("leisureDiv");
	const culturalDiv = document.getElementById("culturalDiv");
	
	//Variables 
	
	var questionState = 0;	//users place in quiz
	var quizActive = true;	//true til they answer last question
		
	var userStats =	[
						0,	//cultural
						0, 	//adventure
						0, 	//lifestyle/entertainment 
						0 	//leisure
					];
	
	var tempStats = userStats; //for when stat increases when user answers
	
	var questionText =	[															
							"How do you prepare for a trip?", //q1 Conscientiousness Q
							"When travelling, what is your reaction if plans change unexpectedly?", //q2 Agreeableableness Q
							"When you are in a new city or destination, what do you prefer to do?", 	//q3 Extraversion Q
							"When choosing a travel destination, how important is it for you to visit somewhere unique or unconventional?", //q4 Openness to Experiences Q
							"How do you feel about learning new skills or about topics that you are unfamiliar with?", //q5 Openness to Experiences Q
							"How do you feel about introducing yourself to strangers or joining a conversation with people you do not know?", //q6 Extraversion Q
    						"When there is a disagreement in a group, how do you usually respond?" ,//q7 Agreeableableness Q
    						"How do you manage daily tasks and responsibilities?", 	//q8 Conscientiousness Q
    						"When planning a trip, which of the following would you prioritise the most?", 	//q9 specific travel type Q
    						"How much do you prioritise trying trendy restaurants, cafes, and bars while travelling?" ,//q10 specific travel type Q
    						"How do you prefer to spend your free time while travelling?" ,//q11 specific travel type Q
    						"When planning a trip, what do you typically prioritise?" ,	//q12 specific travel type Q
    						"What do you hope to achieve while travelling?" //q13 specific travel type Q
						];
	
	
	var answerText =	[		//q1 answers "How do you prefer to prepare for a trip?"													
							[	"I make a detailed itinerary and have a list of activities and things I want to do and see", 				
								"I have a general idea but I leave room for spontaneity", 
								"I do not plan and like to figure it out as I go"],							
								
								//q2 answers "When travelling, what is your reaction if plans change unexpectedly?"
							[	"I am okay with change, I just go with the flow", 			
								"I was looking forward to the original plan, but I am open to compromise and adjustments",
								"I will not change the original plan"],
    
    							//q3 answers "When you’re in a new city or destination, what do you prefer to do?"
    						[	"I like to get out and explore, and see as many people and places as I can", 				
								"I enjoy some exploration, but I also appreciate downtime or quieter activities", 
								"I prefer to relax and enjoy more tranquil, less crowded places"],							
								
								//q4 answers "When choosing a travel destination, how important is it for you to visit somewhere unique or unconventional?"
							[	"Very important! I love discovering off-the-beaten-path destinations and hidden gems", 			
								"It is nice, but I am open to both popular and unique destinations as long as they interest me", 
								"I prefer well-known, established tourist spots that are easy to navigate"],	
    
    							//q5 answers "How do you feel about learning new skills or gaining knowledge on unfamiliar topics?"
    						[	"I love learning about new things and actively look for opportunities to expand my knowledge", 				
								"I enjoy learning if it is relevant or useful, but I do not go out of my way for it", 
								"I rarely feel motivated to learn about new things unless absolutely necessary"],							
								
								//q6 answers "How do you feel about introducing yourself to strangers or joining a conversation with people you don’t know?"
							 [	"I am confident and excited to meet new people", 				
								"I am okay with it but prefer when others initiate", 
								"I avoid these situations unless necessary"],
    
  								//q7 answers "When there’s a disagreement in a group, how do you usually respond?"
							 [	"I try to mediate and find a solution that works for everyone", 				
								"I share my opinion respectfully but stand my ground if needed", 
								"I strongly express my viewpoint, even if it creates tension"],
  
  								//q8 answers "How do you manage daily tasks and responsibilities?"
							 [	"I make lists and set priorities so my day is planned in detail", 
								"I have a general idea of what needs to be done, but don't have a detailed checklist", 
								"I figure it out as I go about my day"],
    
    							//q9 answers "When planning a trip, which of the following would you prioritize the most?" 
							 [	"Visiting historic sites, museums, and cultural landmarks", 
								"Exploring nature or taking part in adventure activities", 
								"Relaxing on a beach or enjoying entertainment and nightlife"],
    
    							//q10 answers "How much do you prioritise trying trendy restaurants, cafes, and bars while traveling?"
    						[	"It is a top priority! I love exploring the food and drink scene", 
								"I enjoy it if I come across something interesting", 
								"It is not a major focus of my trips"],
    
    							 //q11 answers "How do you prefer to spend your free time while travelling?"
    						[	"I like to relax by the beach or in the hotel, enjoy scenic views, or read", 
								"I like to do some light activities such as sightseeing", 
								"There is no free time! I like to do activities and see tourist sites"],
    
     							//q12  "When planning a trip, what do you typically prioritise?" 
    						[	"Learning about the local history, culture, and art through museums or tours", 
								"Finding the best places to eat, drink, and experience the nightlife", 
								"I like to decide when I arrive"],
    
     							//q13 answers "What do you hope to achieve while travelling?"
    						[	"I want to push myself physically and experience adventure and exploration", 
								"I want to enjoy new experiences, social activities, and entertainment with my friends, family or the locals", 
								"I want to unwind and relax, and take a break from everyday life"]
    ]
	
	var answerValues =	[		//q1 answer values
							[	[3,1,0,0], 		
								[1,3,2,2],		
								[0,1,3,3] 
							],	
						
								//q2 
							[	[1,1,1,3], 		
								[3,3,3,1],		
								[0,0,0,0] 
							],

								//q3 
							[	[0,2,3,0], 		
								[1,1,0,1],		
								[2,0,0,2] 
							],
								
								//q4 
							[	[3,3,3,0], 		
								[1,1,1,3],
								[0,0,0,3] 
							],
								
								//q5 
							[	[3,3,1,0], 		
								[1,1,3,3],		
								[0,0,1,3]
							],
    
								//q6 
							[	[0,2,3,0], 		
								[1,1,0,1],		
								[2,0,0,2] 
							],
    
    							//q7 
							[	[1,1,1,3], 		
								[3,3,3,1],		
								[0,0,0,0] 
							],
    
   								 //q8 
            				[	[3,1,0,0], 		
								[1,3,2,2],		
								[0,1,3,3] 
							],	
    
    							//q9 
              				[	[3,0,0,0], 		
								[0,3,0,0],		
								[0,0,3,3] 
							],	
    
    							//q10 
              				[	[2,0,4,1], 		
								[3,0,2,3],		
								[0,3,0,1] 
							],	
    
     							//q11 
             				[	[0,0,0,4], 		
								[2,0,3,0],		
								[3,4,1,0] 
							],
    
    							//q12 
              				[	[4,0,0,0], 		
								[0,0,4,0],		
								[0,2,0,3] 
							],
    
     							//question 13 
            				[	[1,4,0,0], 		
								[1,0,4,0],		
								[0,0,0,4] 
							]
						]
	

    const startScreen = document.getElementById("startScreen");
    const enterButton = document.getElementById("enterButton");
    const fieldError = document.getElementById("fieldError");
    const firstNameInput = document.getElementById("firstName");
    const surNameInput = document.getElementById("surName");
    const emailInput = document.getElementById("email");// so don't have to type document.getElementById 100 times
    
    let firstName = "";
    let surName = "";
    let email = "";
    
    enterButton.addEventListener("click", () => {  
        const enteredFirstName = firstNameInput.value.trim();
        const enteredSurName = surNameInput.value.trim();
        const enteredemail = emailInput.value.trim();
    
        console.log("First name: ", enteredFirstName);
        console.log("Surname: ", enteredSurName);
        console.log("Email: ", enteredemail);


        if (enteredFirstName && enteredSurName && enteredemail) {
            firstName = enteredFirstName;
            surName = enteredSurName;
            email = enteredemail; 
            startScreen.style.display = "none"; 
            quiz.style.display = "block"; 
        } else {
            fieldError.textContent = "Please fill in all fields.";
            fieldError.style.display = "block"; // error message - not typed into
        }
    });
    
    //shortcut variables - dont have to type document.get.... 100 times
	var results = document.getElementById("results");
	var quiz = document.getElementById("quiz");
	var body = document.body.style;
	var printTouristType = document.getElementById("touristType");
	var buttonElement = document.getElementById("button");
	
	
	buttonElement.addEventListener("click", doingQuiz);	

	function doingQuiz() {								
		updateTouristType(); 								
		if (quizActive) {	
			initText(questionState);	
			questionState++;			
			buttonElement.disabled = true; 
			buttonElement.innerHTML = "Please select an answer";			
			buttonElement.style.opacity = 0.7;
		} else {
			setTouristType(); 
		}
	}
	
	function initText(question) {		
		var answerSelection = ""; 
		for (i = 0; i < answerText[question].length; i++) {		
			answerSelection += "<li><input type='radio' name='question" +
			(question+1) + "' onClick='setAnswer("+i+")' id='" + answerText[question][i] + "'><label for='" + answerText[question][i] + "'>" + answerText[question][i] + "</label></li>";
		}
		
		document.getElementById("questions").innerHTML = questionText[question];	
		document.getElementById("answers").innerHTML = answerSelection;				
	}
	
	
	function logStats() {
    console.log("User Stats:");
    console.log(`Cultural: ${userStats[0]}`);
    console.log(`Adventure: ${userStats[1]}`);
    console.log(`Entertainment: ${userStats[2]}`);
    console.log(`Leisure: ${userStats[3]}`);
}

	function setAnswer(input) {	
		clearTempStats();		
		tempStats = answerValues[questionState-1][input];	
		if (questionState < questionText.length) {
			buttonElement.innerHTML = "Continue";
			buttonElement.disabled = false;
			buttonElement.style.opacity = 1;		
		} else {
			quizActive = false;
			buttonElement.innerHTML = "Show my travel personality!"
			buttonElement.disabled = false;
			buttonElement.style.opacity = 1;
		}
	}
	
	function clearTempStats() {
		tempStats = [0,0,0,0];	
	}
	
	
	function updateTouristType() {
		for (i = 0; i < userStats.length ; i++) {
			userStats[i] += tempStats[i];
		}
	}
	
	function setTouristType() {
		var highestStatPosition = 0;	
		for (i = 1 ; i < userStats.length; i++) {
			if (userStats[i] > userStats[highestStatPosition]) {
				highestStatPosition = i;
			}
		}
		
		displayTouristType(highestStatPosition); 
		logStats();
        document.getElementById("firstNameDisplay").innerHTML = firstName;
		quiz.style.display = "none";	
	}
			
	function displayTouristType(touristpersonalitytype) {
		var touristImage = document.getElementById("touristImage");
		switch (touristpersonalitytype) {
			
			case 0:	//cultural code
				results.style.display = "inline-block";
				results.classList.add("cultural");
				body.background = "none";
				printTouristType.innerText = "cultural";
				culturalDiv.style.display = "block";
				touristImage.src = "CulturalTransparent.png";
				break;
				
			case 1:		//adventure
				results.style.display = "inline-block";
				results.classList.add("adventure");
				body.background = "none";
				printTouristType.innerText = "adventure";
				adventureDiv.style.display = "block";
				touristImage.src = "AdventureTransparent.png";
				break;
				
			case 2:		//entertainment
				results.style.display = "inline-block";
				results.classList.add("entertainment");
				body.background = "none";
				body.backgroundColor = "#008080";
				printTouristType.innerText = "entertainment";
				entertainmentDiv.style.display = "block";
				touristImage.src = "EntertainmentTransparent.png";
				break;
				
			case 3:		//leisure
				results.style.display = "inline-block";
				results.classList.add("leisure");
				body.background = "none";
				printTouristType.innerText = "leisure";
				leisureDiv.style.display = "block";
				touristImage.src = "LeisureTransparent.png";
				break;
				
			default: 
				document.getElementById("error").style.display = "inline-block";


  }
}
  function openFigma() {
    let figmaLink = "https://embed.figma.com/proto/bCwRtzM9qlzaHkgBHyjrFY/Untitled?node-id=14-1228&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=14%3A1228&show-proto-sidebar=1&embed-host=share";
    window.open(figmaLink, "_blank");
}
  