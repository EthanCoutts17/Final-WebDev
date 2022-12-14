/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const calc_cost = document.getElementById("calculated-cost");
const mon = document.getElementById("monday");
const tue= document.getElementById("tuesday");
const wed = document.getElementById("wednesday");
const thur = document.getElementById("thursday");
const fri = document.getElementById("friday");
const clear_days = document.getElementById("clear-button");

const f_rate = document.getElementById("full")
const h_rate = document.getElementById("half")

var total_cost = 0;
var days_selected = 0;
var daily_rate = 35;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

mon.addEventListener("click", mondayPressed);
tue.addEventListener("click", tuesdayPressed);
wed.addEventListener("click", wednesdayPressed);
thur.addEventListener("click", thursdayPressed);
fri.addEventListener("click", fridayPressed);

function mondayPressed() {

    mon.classList.add("clicked");
    calculate();
}

function tuesdayPressed() {

    tue.classList.add("clicked");
    calculate();
}

function wednesdayPressed() {

    wed.classList.add("clicked");
    calculate();
}
function thursdayPressed() {

    thur.classList.add("clicked");
    calculate();
}
function fridayPressed() {

    fri.classList.add("clicked");
    calculate();
}

function day_Counter() {

    if (mon.classList.contains("clicked")) {
        days_selected++;
    }
    if (tue.classList.contains("clicked")) {
        days_selected++;
    }
    if (wed.classList.contains("clicked")) {
        days_selected++;
    }
    if (thur.classList.contains("clicked")) {
        days_selected++;
    }
    if (fri.classList.contains("clicked")) {
        days_selected++;
    }

    console.log("Days Selected: "+days_selected);
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clear_days.addEventListener("click", clearClicked);

function clearClicked() {

    console.log("Clear Button Press")

    mon.classList.remove("clicked");
    tue.classList.remove("clicked");
    wed.classList.remove("clicked");
    thur.classList.remove("clicked");
    fri.classList.remove("clicked");

    total_cost = 0;
    days_selected = 0;

    calculate();
}



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

h_rate.addEventListener("click", halfRateApplied);

function halfRateApplied() {

    daily_rate = 20;

    f_rate.classList.remove("clicked");
    h_rate.classList.add("clicked");

    calculate();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

f_rate.addEventListener("click", full_Rate_Applied);

function full_Rate_Applied() {

    daily_rate = 35;

    h_rate.classList.remove("clicked");
    f_rate.classList.add("clicked");

    calculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {

    total_cost = 0;

    day_Counter();

    total_cost = days_selected * daily_rate;

    days_selected = 0;

    console.log("Total Cost: "+total_cost);

    calc_cost.innerHTML = total_cost;
}





