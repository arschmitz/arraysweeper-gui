# arraysweeper

A module for creating an GUI based on the arraysweeper module.
(https://www.npmjs.com/package/arraysweeper)[https://www.npmjs.com/package/arraysweeper]



* * *

### arraysweeper.module:$.arraysweeper
$.arraysweeper(element, height, width, count) 

A module for creating an GUI based on the arraysweeper module.
(https://www.npmjs.com/package/arraysweeper)[https://www.npmjs.com/package/arraysweeper]

**Parameters**

**element**: `jQuery | selector | node`, The element to create the game on

**height**: `number`, Height of the board to create.

**width**: `number`, Width of the board to create.

**count**: `number`, The number of mines to place on the board.



### arraysweeper.arraysweeper(height, width, count) 

jQuery Plugin Method for creating an arraysweeper-gui game
$.fn.arraysweeper

**Parameters**

**height**: `number`, Height of the board to create.

**width**: `number`, Width of the board to create.

**count**: `number`, The number of mines to place on the board.



### arraysweeper.refresh(true) 

refrsh the board this will reset the game and get new random mines

**Parameters**

**true**: `boolean`, getValues - If values should be obtained from the settings bar



### arraysweeper.getValues() 

return an object of the values from the settings bar



### arraysweeper.init() 

Initalize the toolbars



### arraysweeper.setValues(height, width, count) 

Set the initial values for the inputs

**Parameters**

**height**: `number`, Height of the board to create.

**width**: `number`, Width of the board to create.

**count**: `number`, The number of mines to place on the board.



### arraysweeper.renderBoard() 

Render the game board based on its current state




* * *










