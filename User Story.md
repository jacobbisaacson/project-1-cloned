USER STORY

When the URL is opened, an alert explaining what the game is appears
-- When the User clicks OK, the game officially starts by:
1. Showing the grid where the game will be played (where the moles will appear) and 
	- the game board (grid) will appear in the main body of the page
2. Showing the scoreboard (player 1 vs. player 2) and
3. Showing the timer for each round (which will commence when the User hits OK)
	- both the scoreboard and timer will appear in the header
	- the timer is only for the current round for the Player 1


Moles will appear at random locations in the grid at a frequency of 2-3 seconds at a time (will tinker with that, might make it longer), and
	-- User will use the mouse to click on spot where the mole is located at that moment.
	-- The moles should appear, and stay visable for 2-3 seconds giving the User enough time to spot and click on them, but not too much time so that it's super easy

When the User clicks on the mole, its event listener ('click') will call a function to score a point for the User
This will also call another function to "wack" the mole, which will (hopefully) show an image of a "wacked" mole.

If the User misses -- I think nothing should happen, the timer (for their turn) will keep ticking away and other moles will appear for more wack attempts

When the player's time is up, an alert will appear saying their time is up, and it's the next players turn.
The next player will receive a prompt to start their round, and when they click 'YES' their turn officially begins.
// actually this should probably be another button like, "start round" (if I can't use the same button that starts the game)

When the second player's turn has ended, it will be player 1's turn again, which will start when player 1 clicks the button

This goes for 3 rounds total, and at the end of the 3rd round, whoever has the higher score (the most "hits") wins! 
