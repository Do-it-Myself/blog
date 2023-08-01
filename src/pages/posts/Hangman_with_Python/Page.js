import React from "react";

import { PostTemp, P, H1, Href, Youtube } from "src/pages/posts/Element";

export default function Page(props) {
  return (
    <PostTemp {...props}>
      <P>
        This is my first game written with Python script, which I guess
        everyone’s familiar with. The player simply has to type their guessed
        letter (whether it is capitalized or not) into the dialog box. After
        that, the terminal will show whether the guess is correct, and update
        the status of the “hanged man”.
      </P>
      <P>
        I added programs to identify invalid inputs from the players. When the
        player types multiple letters, symbols, or repeated letters, the program
        can identify and state that they are invalid.
      </P>
      <H1>Demonstration video</H1>
      <P>Here’s a video showing the program.</P>
      <Youtube id="EFR6lqPrKVo"/>
      <H1>File</H1>
      <Href>https://github.com/Do-it-myself/Hangman-with-Python</Href>
    </PostTemp>
  );
}
