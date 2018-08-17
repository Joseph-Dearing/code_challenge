var numbers = ["4", "3", "2", "1"];
/*Listed above is the array of numbers that we
are going to reverse once the reverse button element
I created in the HTML file is pressed. When the page
is loaded and the button is pressed for the first time
it will display (1, 2, 3, 4) and when it is pressed again 
for the second time it should display (4, 3, 2, 1) which
of course would me the reverse order of the numbers*/

document.getElementById("reverse").innerHTML = numbers;
/*This function above will target the variable of numbers
above and put them in reverse order once the button I created
in the HTML file is pressed*/

function reverseArray() {
    numbers.reverse();

    document.getElementById("reverse").innerHTML = numbers;
}

