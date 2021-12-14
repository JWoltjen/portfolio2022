# Portfolio 2022

## What is SCSS and why use it? 

It is a way to right styles with more enchanced syntax. it is a preprocessor that will compile the syntatic sugar down to regular CSS when the code is compiled at runtime. SCSS, which stands for Sassy CSS, is similar to regular CSS in that it uses curly braces and semicolons. Any valid CSS is valid SCSS, but SCSS also allows for nested selectors and the deployment of mixins and global variables. 

The use of nesting in particular provides for much more organize and concise code, which cuts down on having to hunt for the right css selector or having to worry about whether changing the attributes of that selector will change a style somewhere else in your program. However, nesting that goes too many layers deep may create its own set of problems, so it is best practice to stay shallow and specific with your root elements. 

SCSS variables are also helpful to create consistency in a theme. SCSS variables are replaced with values when converted into CSS variables. This takes place before they are served to the browser. SCSS variable scope is similar to JS scope. All variables defined at the top level are global, all variables defined in blocks are local. Blocks can access both local and global variables. 

## How does this project use the Mobile Mixin? 

A mixin is a group of CSS declaration s that can be resued. The syntax is similar to functions in JS. Instead of declaring the function with the function keyword, mixins are declared with @mixin. For this project, a mobile mixin was created that handles media queries for any screen size smaller that 768 pxs. Once the mixin was created, it was quite easy to plop it below the nested SCSS element and voila, create SCSS code below that directly affects how that element is styled below 768px. 

Personally, I like this approach because I only have to deal with clunky media query syntax once, and then applying the @mobile mixin is incredibly easy, and readable in case I need to go back and edit more things. 
