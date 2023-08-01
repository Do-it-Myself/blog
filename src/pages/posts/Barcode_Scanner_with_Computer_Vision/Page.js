import React from "react";

import { PostTemp, P, H1, Href, Youtube } from "src/pages/posts/Element";

export default function Page(props) {
  return (
    <PostTemp {...props}>
      <P>
        This is the first time I’ve tried any computer vision project.
        Originally I wrote the code for a Raspberry Pi Hackathon but I amended
        it such that it can run with a computer web camera.
      </P>
      <P>
        My Python program used Pyzbar library to decode barcode images and
        extract information, then OpenCV to add rectangles surrounding the
        identified barcode. In the command line, the program would print out the
        decoded content and the barcode type.
      </P>
      <P>
        I’ve added some special features to the scanner. While QR codes have
        green rectangles, other barcodes have red rectangles. The program also
        records the previously scanned code content, so that it won’t repeatedly
        print out the decoded content. The best feature is the link detection
        function (using Validators and Webbrowser library) – if the decoded
        content is a URL, the program will open the link on a web browser if the
        user agrees.
      </P>
      <H1>Demonstration video</H1>
      <P>
        Here’s a video showing the program. QR codes could be read more stably
        because they have eyes and alignment patterns, such that the library
        could identify the codes more easily.
      </P>{" "}
      <Youtube id="3nix_U5lI7w" />
      <H1>File</H1>
      <Href>https://github.com/Do-it-myself/Barcode-Scanner-with-Computer-Vision</Href>
    </PostTemp>
  );
}
