import React from "react";

import { PostTemp, P, H1, Href, Youtube } from "src/pages/posts/Element";

export default function Page(props) {
  return (
    <PostTemp {...props}>
      <P>
        I joined a web-app game making hackathon last year, which required us to
        add a twist to a classic board game. We’ve then created Gravity 4, which
        works exactly like the popular Connect 4, except the user can choose to
        flip the board other than adding chips as a move.
      </P>
      <H1>Code details</H1>
      <P>
        Overall, we displayed the chips in a table format and stored the status
        of individual elements in a matrix. Every time a user makes a move, the
        algorithm will iterate through the matrix to check whether there are
        lines of four forms. I added programs to identify invalid inputs from
        the players. When the player types multiple letters, symbols, or
        repeated letters, the program can identify and state that they are
        invalid.
      </P>
      <P>
        An interesting result to point out is, since flipping the board causes
        all the chips to shift, it is possible to draw in Gravity 4 when it’s
        not possible for the classic Connect 4.
      </P>
      <P>
        Despite a rushed hackathon, we’ve dealt with all the edge cases, such as
        not letting users continue to add chips when the game is over, not
        letting chips overflow etc.
      </P>
      <H1>Demonstration video</H1>
      <P>Here’s a video showing the program.</P>
      <Youtube id="EtcNpfq6rV4" />
      <H1>File</H1>
      <Href>https://github.com/Do-it-Myself/Gravity-4</Href>
    </PostTemp>
  );
}
