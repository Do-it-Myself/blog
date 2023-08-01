import React from "react";

import { PostTemp, P, H1, H2, Href, OL, UL, Img, Youtube } from "src/pages/posts/Element";

export default function Page(props) {
  return (
    <PostTemp {...props}>
      <P>
        Wishing to make a PCB from scratch, I decided to make a cool PCB
        keyboard and mouse. This is the first individual hardware project I have
        tried, and there are many hiccups that I have faced during the process.
      </P>
      <H1>Steps</H1>
      <P>
        I split the workflow into three main blocks – prototyping, PCB
        production, and finalization as follows:
      </P>
      <H2>Prototyping</H2>
      <OL>
        <li>Test the hardware for the keyboard – microprocessors, buttons</li>
        <li>Design the circuit for the keyboard</li>
        <li>Code for four buttons and try it on a breadboard</li>
        <li>Code for all buttons and try it on a breadboard</li>
        <li>Add features (shift, symbols) and try it on a breadboard</li>
        <li>Test the hardware for mouse – thumbstick</li>
        <li>
          Code for left/right click (buttons) and the cursor movement
          (thumbstick) and try it on a breadboard
        </li>
        <li>
          Combine both codes for keyboard and mouse and try it on a breadboard
        </li>
      </OL>
      <H2>PCB production</H2>
      <OL>
        <li>Draw symbols for the microprocessor and the thumbstick</li>
        <li>Draw footprints for the microprocessor, thumbstick, and buttons</li>
        <li>Draw schematics for the PCB</li>
        <li>Design the PCB layout</li>
        <li>Create Gerber files and send the PCB to manufacturing</li>
      </OL>
      <H2>Finalization</H2>
      <OL>
        <li>Solder the component for final testing</li>
      </OL>
      <H1>Prototyping</H1>
      <H2>Testing hardware</H2>
      <P>
        Initially, my more ambitious plan was to use ESP32 to make a wireless
        keyboard. However, the ESP32 I bought was faulty and it couldn’t even
        run digitalRead(PIN) properly (all it gives is just 0 despite I
        literally connecting it to a VCC!). After hours of struggle, I switched
        to a less-ambitious plan of using Arduino Pro Micro, which supports HID
        protocol to emulate a keyboard and a mouse with {"<Keyboard.h>"} and{" "}
        {"<Mouse.h>"} library. I bought soft tactile buttons from PiHut as
        recommended by some bloggers making PCB keyboards. However only 1/3 of
        them worked properly (the remaining 2/3 were not responding even when I
        pressed hard), so I switched to normal plastic tactile buttons – though
        less comfortable to click, none of them is faulty.
      </P>
      <H2>Designing circuit</H2>
      <P>
        The working principle of the keyboard is as follows. I allocated the
        keys into column 0-4 and row 5-12 as below.
      </P>
      <Img {...props} image="Rows_and_columns.PNG" />
      <P>
        The microprocessor will take turn to make each column HIGH in signal
        with pin 0 – 4, and pin 5 – 12 will detect whether they receive a HIGH
        signal. For instance, if button ‘Q’ is pressed, when it’s pin 0 turn to
        be HIGH, pin 6 will detect a HIGH signal. A switch-case code is written
        to map the column and row activated to the respective letter.
      </P>
      <H2>Code-debugging</H2>
      <P>
        The code works fine for the four-button case (Four_button.ino). However,
        when I expanded the code to all buttons (All_buttons_old.ino), there
        were two problems arose:
      </P>
      <OL>
        <li>
          The button will detect multiple pressing even when I only intend to
          press the button once
        </li>
        <li>
          The button might map to the wrong key – by trial and error, this only
          happens to the first output but not the others
        </li>
      </OL>
      <P>
        Problem 1 arose clearly because the time taken for me to press and
        unpress the button is too ‘long’ from the microprocessor perspective –
        it thought I have continuously pressed the button. I haven’t fully
        discovered the cause for problem 2, but I suspect it might be due to an
        electrical propagation delay when I press the button in the middle of
        the process of detecting a HIGH signal.
      </P>
      <P>
        The solution to both is to add a variable counting the number of loops
        the code has run during the process of pressing and unpressing the
        button. The code will wait till the second count to output the keyboard,
        and will no longer output anything. When the button is released, the
        count will be reset to 0. (All_buttons_with_count.ino)
      </P>
      <H2>Adding features</H2>
      <P>
        I upgraded the code by adding the shift function first. When the shift
        button is clicked, the red LED light will be on as an indication. A
        variable is made to store the status of the shift button. I simply
        implemented an if-else code to detect the status and give different
        outputs.
      </P>
      <P>
        The symbol function is activated by long-pressing the buttons. I
        upgraded the function such that if the count reaches 500 (later reduced
        to 50 when the mouse function is implemented), it will replace the
        number/letter typed with the respective symbol instead.
        (All_buttons_shift_symbols.ino)
      </P>
      <H2>Implementing mouse function</H2>
      <P>
        Two separate pins are used to detect the left and right click buttons
        for the mouse respectively. For the cursor movement, it is detected by
        the thumbstick. The thumbstick (from Adafruit) is essentially a
        potentiometer. When untouched, the potential is divided in half – with
        analogRead(PIN) at around 512. I mapped the analog signal range (0 –
        1023) to 13 discrete values (-6 – 6) that control the extent of the
        cursor movement in x and y directions. (Mouse.ino)
      </P>
      <H2>Combining keyboard and mouse</H2>
      <P>
        The final stage of the prototyping is to combine the keyboard and mouse
        code. The following shows the breadboard setup and the prototype trial.
        (Buttons_and_mouse.ino)
      </P>
      <Img {...props} image="Prototype.jpg" />
      <Youtube id="oI0pxV9rdF0" />
      <H1>PCB</H1>
      <P>
        After designing symbols and footprints of the components, I drew the PCB
        circuit on the schematic as below:
      </P>
      <Img {...props} image="Schematic.PNG" />
      <P>
        I then start to draw the exact PCB layout. After connecting the wires to
        the corresponding pins, I started to add a silkscreen for the buttons
        and some decorations.
      </P>
      <UL>
        <li>Red: F. Cu</li>
        <li>Blue: B. Cu</li>
        <li>Grey: F. Silkscreen</li>
        <li>Black: Edge Cut</li>
      </UL>
      <Img {...props} image="PCB_layout.PNG" />
      <P>At last, the front surface of the PCB’s 3D render is as follows:</P>
      <Img {...props} image="3D_render.png" />
      <P>
        Recommended by my friend, I sent the PCB to PCBway for manufacturing. A
        few days later, I received the package from them and started my final
        work.
      </P>
      <Img {...props} image="PCB.jpg" />
      <H1>Finalization</H1>
      <P>
        I soldered the female pin headers for the Arduino, the thumbstick, the
        LED, and one button first for initial testing (just in case the PCB is
        wrongly designed). After checking it works, I soldered the remaining
        components and did my final test. (Buttons_and_mouse_micro.ino)
      </P>
      <Img {...props} image="Final.jpg" />
      <Youtube id="1_WU78MpiaA" />
      <H1>File</H1>
      <P>Arduino and KiCAD file:</P>
      <Href>https://github.com/Do-it-myself/PCB-Keyboard-and-Mouse</Href>
    </PostTemp>
  );
}
