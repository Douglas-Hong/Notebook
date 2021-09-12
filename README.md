# Notebook

This project is a simple recreation of Google Keep!

## Features
* Create notes that contain a title and description
* Delete notes
* Edit notes after they are created
* Pin/unpin notes
* Change the color of each note
* View the time each note was updated

## Changes From Google Keep
* Clicking away from the note creator now does not submit the note. This was implemented
in case the user accidentally clicks away from the note creator or clicks away when
scrolling. The only way to submit a note is to click the "Submit" button. The only way
to close the note creator is to click the "Close" button.
* The description textarea now has a minimum of 3 rows (instead of 1 row). This significantly 
decreases the number of times the note creator area is expanded because most notes tend to
be pretty short.
* You must click the palette icon in order to select a color; you can no longer hover over
the palette icon in order to select a color. This change brings more consistency because you also 
must click the pin, "Submit", "Close", and "Delete" buttons in order to execute them.
* You can scroll long notes without having to click on the notes first.
* The note dialog has a shorter maximum height; this helps the user view other notes in the background.
* You can delete a note in just one click; there is no need to click a button that reveals more options.

## Screenshots
<p align="center">Home Page</p>

![Home Page](https://i.imgur.com/GXg26V8.jpg)

<p align="center">Editing a Note</p>

![Editing a Note](https://i.imgur.com/sq6KuCo.jpg)