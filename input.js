let btn = document.querySelector("#myButton");
let input = document.querySelector("#input1");
let pick = document.querySelector("#incorrectGuesses");
let newgame = document.getElementById("myButton2");
let audio_wrong = new Audio("wrong.mp3");
let aduio_correct = new Audio(".correct.mp3");

var image = document.getElementById("picture");

let fname1 = "athletic";
let fname2 = "blizzard";
let fname3 = "mountain";

//Character boxes
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");


btn.addEventListener("click", button_clicked);
newgame.addEventListener("click", refreshPage);


let random = Math.floor(Math.random() * 3);


var hangmanImages = [
    "/background.png",
    "miss1.png",
    "miss2.png",
    "miss3.png",
    "miss4.png",
    "miss5.png",
    "final.png",
  ];

  var currentHangmanImageIndex = 0;
  var incorrectGuessCount = 0;

function button_clicked()
{
  if(random == 0)
  {
        for(let i = 0; i < 1; i++)
        {
            if(input.value == fname1[0])
            {
                box1.textContent = fname1[0];
                aduio_correct.play();
            }

            else if(input.value == fname1[1])
            {
                box2.textContent = fname1[1];
                box6.textContent = fname1[5];
                aduio_correct.play();
            }

            else if(input.value == fname1[2])
            {
                box3.textContent = fname1[2];
                aduio_correct.play();
            }

            else if(input.value == fname1[3])
            {
                box4.textContent = fname1[3];
                aduio_correct.play();
            }

            else if(input.value == fname1[4])
            {
                box5.textContent = fname1[4];
                aduio_correct.play();
            }

            else if(input.value == fname1[6])
            {
                box7.textContent = fname1[6];
                aduio_correct.play();
            }

            else if(input.value == fname1[7])
            {
                box8.textContent = fname1[7];
                aduio_correct.play();
            }

            else {
                updateHangmanPicture();

                pick.textContent = input.value + " " + pick.textContent;
              }
        }

  }

  if(random == 1)
  {
        for(let i = 0; i < 1; i++)
        {
            if(input.value == fname2[0])
            {
                box1.textContent = fname2[0];
                aduio_correct.play();
            }

            else if(input.value == fname2[1])
            {
                box2.textContent = fname2[1];
                aduio_correct.play();
            }

            else if(input.value == fname2[2])
            {
                box3.textContent = fname2[2];
                aduio_correct.play();
            }

            else if(input.value == fname2[3])
            {
                box4.textContent = fname2[3];
                box5.textContent = fname2[4];
                aduio_correct.play();
            }

            else if(input.value == fname2[5])
            {
                box6.textContent = fname2[5];
                aduio_correct.play();
            }

            else if(input.value == fname2[6])
            {
                box7.textContent = fname2[6];
                aduio_correct.play();
            }

            else if(input.value == fname2[7])
            {
                box8.textContent = fname2[7];
                aduio_correct.play();
            }

            else {
                updateHangmanPicture();

                pick.textContent = input.value + " " + pick.textContent;
              }
        }
  }

  if(random == 2)
  {
        for(let i = 0; i < 1; i++)
        {
            if(input.value == fname3[0])
            {
                box1.textContent = fname3[0];
                aduio_correct.play();
            }

            else if(input.value == fname3[1])
            {
                box2.textContent = fname3[1];
                aduio_correct.play();
            }

            else if(input.value == fname3[2])
            {
                box3.textContent = fname3[2];
                aduio_correct.play();
            }

            else if(input.value == fname3[3])
            {
                box4.textContent = fname3[3];
                box8.textContent = fname3[7];
                aduio_correct.play();
            }

            else if(input.value == fname3[4])
            {
                box5.textContent = fname3[4];
                aduio_correct.play();
            }

            else if(input.value == fname3[5])
            {
                box6.textContent = fname3[5];
                aduio_correct.play();
            }

            else if(input.value == fname3[6])
            {
                box7.textContent = fname3[6];
                aduio_correct.play();
            }

            else 
            {
                updateHangmanPicture();
                pick.textContent = input.value + " " + pick.textContent;
              }
        }
  }
  
}

  function updateHangmanPicture() 
  {
    if(currentHangmanImageIndex < hangmanImages.length - 1) 
    {
        currentHangmanImageIndex++;
        var hangmanPicture = document.getElementById("picture");
        hangmanPicture.innerHTML = "<img src='" + hangmanImages[currentHangmanImageIndex] + "' alt='Hangman Picture'>";
        audio_wrong.volume = .5;
        audio_wrong.play();
    }

    else
    {
        document.getElementById("input1").disabled = true;
        document.getElementById("end").innerHTML = "Game Over! You ran out of attempts.";
    }
  }
      

    function refreshPage()
    {
        window.location.reload();
    } 
