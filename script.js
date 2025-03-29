function createSquares()
{
    const container = document.querySelector("#container");
    
    let currentDiv;

    /* Default Divs */
    for (let i = 0; i < 16; i++)
    {
        for (let j = 0; j < 16; j++)
        {
            currentDiv = document.createElement("div");
            currentDiv.setAttribute("id", `div${j + 1}`);
            currentDiv.setAttribute("class", "boxes");
            container.append(currentDiv);
    
        }
        

    }

    /* Mouse Enter for default divs*/
    const clickableDivs = document.querySelectorAll(".boxes");
    clickableDivs.forEach((div) => {
        div.addEventListener("mouseenter", function () {
            div.style.backgroundColor = "black";
            div.style.color = "white";
        });
    });

   
    /* Button to ask for div */
    const button = document.querySelector("#ask");
    button.addEventListener("click", function () {
        const numberSquares = prompt("No. of squares for the new Grid: (Not more than 100)");

        /* If no. is not greater than 100 */
        if (numberSquares <= 100) {
            /* Remove the old one */
            clickableDivs.forEach((div) => {
                div.remove();
            });
    
            /*Calculate the width for each box */
            let widthNewElement = 100 / numberSquares;
           
           
            /* BUilt the boxes */
            for (let j = 0; j < numberSquares; j++)
            {
                for (let k = 0; k < numberSquares; k++)
                {
                    currentDiv = document.createElement("div");
                    currentDiv.style.width = widthNewElement + "%";
                    currentDiv.setAttribute("id", `div${k + 1}`);
                    currentDiv.setAttribute("class", "newBoxes");
                    container.append(currentDiv);
                }
                
            }
           
            

            /* Select new Divs for hover effect*/
            const newClickableDivs = document.querySelectorAll(".newBoxes");
            /* let currentOpacity = Number(window.getComputedStyle(div).opacity);*/
          
            newClickableDivs.forEach((div) => {
                div.count = 0;
                
                div.addEventListener("mouseenter", function () {
                    div.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
                    div.count++;
                    if (div.count === 10)
                    {
                        div.style.backgroundColor = "black";
                    }
                });
            });

            // If we remove 1 from total Opacity it erases so we get an eraser..

        }
        else
        {
            alert("Squares shouldn't be more than 10");
        }
       
    });
}

createSquares();



