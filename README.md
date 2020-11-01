# YoutubeCC_standin

Youtube has removed community captions. I wanted to see if I could try to build something which could bridge a gap for those affected who do not have the resources to access paid resources.

The core benefit of the community captions system was that a creator could crowd source caption creation. This was beneficial for the creator and the viewers as this allows for the work load of the task to be distributed amongst more people (making the task of captioning every video less overbearing). Further it makes captioning videos feasible for those who cannot afford (in time and/or money) to caption their videos themselves. 

# Successes

This is my first Firefox plugin and it does achieve the purpose it set out to even if the UI is a little clunky. It will be nowhere as good as YouTube's old Community Captions were but hopefully its something.

# Limitations:

- So far, this plugin only supports Firefox

- For security reasons this plugin cannot automatically download captions from an online text hosting forum. Instead the user must locate the caption files and copy+paste the contents into a designated location for the captions to then be applied.

- UI limitations: 
  - While undertaking this project it became clear that the YouTube website was designed to be resistant to change. 
  - Inserting HTML elements does work, but I'm fairly certain that YouTube's scripts are doing some form of error checking and removing everything which it thinks is wrong. 
  - Overall, this means that for someone of my experience level and amount of free time this makes the GUI I have added much less flexible than would have been ideal. This could also lead to brittleness in the code as and when YouTube choose to arbitrarily change their error checking code.


# How to use:

## Part 1: Making Captions

Simply write a text file adhering to the following format:

The Caption format should be as follows:
```JSON
[
    { 
        "stime":"0",
        "etime":"11",
        "caption":"TEXT FOR THE FIRST LINE",
        "flag": "0"
    },
    {
        "stime":"11",
        "etime":"6", 
        "caption":"TEXT FOR THE SECOND LINE",
        "flag": "0"
    },
    .....ETC.....
    ,{
        "stime":"50",
        "etime":"60", 
        "caption":"TEXT FOR THE LAST LINE",
        "flag": "0"
    }
]
```

stime: The start time for that caption line to appear
etime: The end time when that caption line disappears
caption: The line of text to be displayed
flag: Used in background calulations

The 'flag' tag must always be paired with "0".

That's it!

## Part 2: Distributing Captions

My recommendation is to take the Captions file you have just written and to upload it to pastebin: https://pastebin.com/

Just paste the text of your captions file in the 'New Paste' box and press the 'Create New Paste' button.
This will redirect you to an uploaded paste of your Captions. If you look up to the URL bar you will see 
an address that looks similar to this: https://pastebin.com/223ZMg92

Take a note of this URL.

When uploading your video, I recommend writing something similar to the following in your video's description:
[CAPTIONS]
English -> https://pastebin.com/223ZMg92
Spanish -> https://pastebin.com/Cu6Z0A9B
etc...

## Part 3: Viewing the Captions!

Firstly you will need to install my plugin: https://addons.mozilla.org/en-US/firefox/addon/youtube-cc-standin/

Secondly, navigate to a Youtube Video and locate the correct caption text for this specific video (hopefully linked in the video's description).

Use Ctrl+C to take a copy of the Captions text into your clipboard.

Start playing the video (NOT in fullscreen). You should notice that this causes some buttons and textboxes to appear just below the video's description.

Paste the Captions from your clipboard into the big textbox labelled "Paste Caption Code Here"

Press the "Apply Captions" button.

The captions should now have been applied to the video and should work as expected.

The other buttons and textboxes allow you to change the colour, position and font size of the captions. 
To update these values click the "Update Caption Settings" button.

