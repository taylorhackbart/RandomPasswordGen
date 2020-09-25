# Random Password Generator - Homework 3

## Description 
This website allows you to generate a password between 8-120 characters. It will prompt you to choose the password length and the option to include different parameters in confirm statements. If you choose a number outside of the specific range (aka below 8 or above 120), it will prompt you to choose a new number within the range. Also, if you do not choose any of the parameters the pop up, it will prompt you to choose at least one. 

## Usage
When loading the page, press the "generate password" button to get you started. 
<img src = "https://github.com/taylorhackbart/RandomPasswordGen/blob/master/images/img1.png">

This will then prompt you to choose a password length.
<img src = "https://github.com/taylorhackbart/RandomPasswordGen/blob/master/images/img2.png">

If you do not choose an appropriate password length, it will prompt you to choose again.

<img src= "https://github.com/taylorhackbart/RandomPasswordGen/blob/master/images/img2-2.png">

Alerts will start asking if you would like to include uppercase, lowercase, numbers and/or special characters. You will press "OK" if you would like them to be included, and "cancel" if you would not. 

<img src= "https://github.com/taylorhackbart/RandomPasswordGen/blob/master/images/img3.png">

<img src= "https://github.com/taylorhackbart/RandomPasswordGen/blob/master/images/img4.png">

<img src= "https://github.com/taylorhackbart/RandomPasswordGen/blob/master/images/img5.png">

<img src= "https://github.com/taylorhackbart/RandomPasswordGen/blob/master/images/img6.png">

If you were to choose "cancel" for all parameters, it would then prompt you to choose at least one, and loop you back to the beginning.

<img src= "https://github.com/taylorhackbart/RandomPasswordGen/blob/master/images/img7.png">

Once everything has been followed correctly, it will generate a random password given the parameters you have allowed. 

<img src= "https://github.com/taylorhackbart/RandomPasswordGen/blob/master/images/img8.png">

## Technologies Used
To create these pages, we have a very basic html page with some css styling to create the box. The main portion of this webpage has been developed using JavaScript. 

## Problems I faced
I had a little trouble getting started and tried putting all of my questions in individual loops. I quickly realized (once it asked me the same question 10 times in a row) that we should be looping back only under certain circumstances aka if they don't choose any parameter. I used a few codes that I wasn't familiar with yet (concat, .push, and .join), so trying to navigate around these in my code was tricky. While I have a basic understand of what they do- I had to trial and error where they could and couldn't be used. I struggled the most with getting the password to show up on my page. It took me quite some time to figure out how to create a string from an array, but the ".join("") saved the day!

## Credits
I worked with many of my classmates on this assignment, as well as my tutor, Tyler Bolty, who really helped me understand the in's and out's of this code. Thanks Tyler!
