# My calculator project

## The why?

This will be the first project I create for my portfolio as part of the bootcamp I'm doing over at _nology! 

I'm excited to begin tying together all the JavaScript knowledge I've picked up so far.

I'm using this readme to pre-plan the logic and steps I'll need to implement before I begin my build. The aim being to show as much as I can of my thought process behind the project decisions.

<br>

For the design of the calculator, I've chosen to reproduce the below (there may be a few small changes based on the project MVP):

![calculator-image](https://user-images.githubusercontent.com/85076228/159907711-adc41f91-423f-4c35-91d5-445fc09566fe.png)

<br>

## The MVP

The MVP requires me to take into account the following:

-   include the following operators and buttons:
    -   +, -, /, \*, =, .
-   it should have a display rendering the current calculation
-   it should handle decimals
-   it should not use eval() or Function() constructor (edited)
-   it doesn't need to support orders of operation (as exciting as it sounds to put that together, I'm relieved I can keep it simple to start with!)

<br>

## The game-plan!

Here's the plan of attack - which will be reviewed by one of the awesome \_nology coaches to make sure I'm not severely off-track:

1. Create the general layout and design.

    - Assign each button an id in the html.

2. Create four functions (one for each operator), most likely using a reduce iterator - I'll do some testing around this to make sure it works before moving further forward.

3. Create an event listener using 'querySelectorAll' to target all the calculator buttons in the relevant div.

4. Create a function that will print the relevant innerHTML to the appropriate div in order to display the current calculation. This will be called in the event listener detailed in the previous step.

5. Create another event listener just for the operators. This will detect whenever they are pressed.

6. Create a function to use in that event listener which will push the calculation to another variable (converted from a string using parseInt()). The new variable will be passed as a parameter into the relevant operator function which will return the result and print it to the display using the same function created previously.
    - I'm thinking I will have two if statements: one for the main operators, and another for equals (which will print the result)
    - I'm having trouble thinking about the exact specifics of how I would print a result and continue the operation when selecting an operator after already parsing two numbers in. I anticipate dedicating some extra attention/playing around with this part of the code to get it right
        - I'll probably need to create another if statement for this scenario that instructs the JS to use the result of the calculation as the first value of the next equation somehow


<<<<<<< HEAD
7. Create an event listener and function for the clear button. It will clear the innerHTML of the display div. It won't need to worry about erasing anything else, as I will only be storing the calculation *after* an operator has been pressed.
=======
7. Create an event listener and function for the clear button. It will clear the innerHTML of the display div. My initial thought is that I won't need to worry about erasing anything else, as I will only be storing the calculation in a variable *after* an operator or equals has been pressed. However, I'll probably need an if statement for the situation when pressing another operator after already doing a calculation (instead of pressing equals).


That's all for now, I'm looking forward to sinking my teeth into this one over the next few days.
>>>>>>> 73b2e801ea6ebf19a0a6cb7c8b82473db93a8bab
