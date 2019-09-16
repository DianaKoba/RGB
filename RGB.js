
	var colors = []
	var squares = document.querySelectorAll(".square");
	var pickedColor = pickColor();
	var colorDisplay = document.getElementById("colorDisplay");
	var messageDisplay = document.querySelector("#message");
	var h1 = document.querySelector("h1");
	colorDisplay.textContent = pickedColor;
	var reset = document.getElementById("reset");
	var num = 6;
	reset.addEventListener("click", resetGame);
	var modes = document.querySelectorAll(".mode");

	init();

	function init()
	{
		setupSquares();
		setupModes();
		resetGame();
	}

	function setupSquares()
	{
		for(var i = 0; i < squares.length; i++)
		{
			squares[i].style.backgroundColor = colors[i];
			squares[i].addEventListener("click", function(){
				if(pickedColor !== this.style.backgroundColor)
				{
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again";
				}
				else
				{
					messageDisplay.textContent = "Correct!";
					changeColors(this.style.backgroundColor);
					reset.textContent = "PLAY AGAIN?"
				}
				});
		}

	}

	function setupModes()
	{
		for(var i = 0; i < modes.length; i++)
		{
			modes[i].addEventListener("click", function(){
				modes[0].classList.remove("selected");
				modes[1].classList.remove("selected");
				this.classList.add("selected");
				this.textContent === "Easy" ? num = 3: num = 6;
				resetGame();
			})
		}
	}

	function resetGame()
	{
		messageDisplay.textContent="";
		h1.style.backgroundColor = "steelblue";
		this.textContent = "New Colors";
		colors = generateRandomColors(num);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length; i++)
		{
			if(colors[i])
			{
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			}
			else
			{
				squares[i].style.display = "none";
			}
		}
	}

function changeColors(color)
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}

	h1.style.backgroundColor = color;
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = []
	for(var i = 0; i < num; i++)
	{
		arr.push(randomColor());
	}

	return arr;

}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue +")";
}

