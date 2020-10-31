# YoutubeCC_standin

Youtube has removed community captions. I wanted to see if I could try to build something which could bridge a gap for those affected who do not have the resources to access paid resources.

# The Plan

I plan to use paste-bin as a location for captions to be posted in a standard format.

The Youtuber in question can (using a standard format) link to a set of paste-bins which have the captions in various langauges:

I.e. in the video description:
  
  text blah blah
  
  [Caption: "ENGLISH", www.pastebin.com/VALIDURL]
  [Caption: "FRRNCH", www.pastebin.com/VALIDURL]
  
  blah blah

The plugin picks this up. Allows the user to select from one of the languages listed and loads the text file from the pastebin

The plugin then reads in the text from the paste bin as a set of words allocated to time slots.

Using a javascript query to get the video's time the software will then decide when to show the designated captions!
