document.querySelector('#sizePicker').addEventListener("submit",function (event){
  event.preventDefault(); //prevent 1 by 1 grid
  // assign the height and width to const values
  const h = document.querySelector('#inputHeight').value;
  const w = document.querySelector('#inputWidth').value;
  // call the make grid function
  makeGrid(h,w);

  function makeGrid(h,w){
    const start = document.querySelector('#pixelCanvas'); //point to the start of JS
    //empty the table
    while (start.firstChild) {
      start.removeChild(start.firstChild);
    };
    // create the grid i as height and j as width
    for (let i =1; i<=h; i++){
      let temp = ""; //to create the row
      temp += '<tr>'; //start the row <tr>
      for (let j=1; j<=w; j++){ //loop creating the columns <td>
        temp += '<td></td>';
      };
      temp += '</tr>'; //close the row
      start.insertAdjacentHTML('afterbegin', temp); //insert the created row with columns
    };

    // color the grid
    start.addEventListener('click', function addColor(event) {
      //select the color using colorPicker
      const color = document.querySelector('#colorPicker');
      // choose the exact square to color
      const square = event.target;
      //add the color to the targeted square
      //avoid long press to color the whole grid using if tagName
      if (square.tagName.toLowerCase()=='td'){
        square.setAttribute( 'style', 'background-color:' + color.value);
      }
    });

  } //close MakeGrid function
}); //close addEventListener function
