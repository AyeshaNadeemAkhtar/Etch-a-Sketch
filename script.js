const container = document.querySelector("#container");
let div;


// Generate 16-by-16 grid
for (let i = 1; i <= 16; i++)
{
  for (let j = 1; j <= 16; j++)
  {
    div = document.createElement("div");
    
    div.setAttribute("class", `div${j}`);
    div.setAttribute("class", "initialDivs")
    container.appendChild(div);
  }
}


// Activate trailing effect
const allDivs = container.querySelectorAll("div");
allDivs.forEach(function(div) {
  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = "black";
  });
});


// Clickable button
const button = document.querySelector("button");
button.addEventListener("click", () => {
  let alertSquares = parseInt(prompt("No. of squares: "));
  if (alertSquares > 100)
  {
    alert("You can choose b/w 1 and 100");
  }

  // Remove initial divs
  allDivs.forEach(function(div) {
    div.remove();
  })


  
  // Generate new Divs
  for (let i = 1; i <= alertSquares; i++)
    {
      for (let j = 1; j <= alertSquares; j++)
      {
        div = document.createElement("div");
        
        div.setAttribute("class", `div${j}`);
        div.setAttribute("class", `recentDivs`);
        container.appendChild(div);
      }
    }

    button.disabled = true;
    

    // Do flex on recentDivs
    let flexBasis = 100 / alertSquares + '%';
    const finalAllDivs = container.querySelectorAll(".recentDivs");


    for(let div of finalAllDivs)
    {
      div.style.flex = `1 0 ${flexBasis}`;

      div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = getRandomColors();
      });
    };

    
});


// Get randomColors
function getRandomColors() {
  console.log("Random Function is called"); /* bp */
  let r = Math.floor(Math.random() * 256) ;
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}