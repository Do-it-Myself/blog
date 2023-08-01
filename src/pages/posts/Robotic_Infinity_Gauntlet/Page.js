import React from "react";

import { PostTemp, P, H1, H2, Href, OL, UL, Img, Youtube } from "src/pages/posts/Element";

export default function Page(props) {
  return (
    <PostTemp {...props}>
      <P>
        This is one of the most ambitious projects I have ever done, as well as
        my first single-handed robot project – from mechanical CAD, prototyping,
        programming to testing. My main goal is to try 3D printing and computer
        vision libraries (OpenCV and Mediapipe). Initially, I wished to practice
        using Raspberry Pi but then realized its hardware cannot support my
        program. Eventually, I used my laptop for computation and used HC-05
        (the only wireless chip readily available at home) to send serial data
        to control my Arduino Uno.
      </P>
      <H1>Steps</H1>
      <P>
        I split the workflow into four main blocks – movement, computer vision,
        serial connection, and finalization as follows:
      </P>
      <H2>Movement</H2>
      <OL>
        <li>CAD the robot hand’s general dimension</li>
        <li>CAD all components</li>
        <li>3D print all components</li>
        <li>Color the gems and assemble all parts</li>
        <li>Test finger movements</li>
      </OL>
      <H2>Computer Vision</H2>
      <OL>
        <li>
          Write Python code (using OpenCV and mediapipe) to detect individual
          finger’s movement
        </li>
      </OL>
      <H2>Serial Connection</H2>
      <OL>
        <li>Test wired and wireless connection with LED</li>
        <li>Connect strings with servo and test finger movement</li>
      </OL>
      <H1>Movement</H1>
      <P>
        My goal is to fit 5 servos into the arm. I subsequently designed the
        rough size of the whole hand as follows:
      </P>
      <Img {...props} image="Rough_sketch.PNG" />
      <P>
        Afterwards, I CAD all the components one by one. I split the components
        into 5 categories – arm, base, fingers, hand, and servo.
      </P>
      <P>
        Designing the servo bed is rather challenging, as I have to consider
        both the servo position and holes for wires to go through. For the outer
        shells, the patterns are easily made with the “wrap” function. The
        electronic components are all placed in the base.
      </P>
      <P>The final Solidworks assembly is as follows:</P>
      <Img {...props} image="Whole_Assembly.PNG" />
      <P>And the inner structure is as follows:</P>
      <Img {...props} image="Whole_Assembly_Internal.PNG" />
      <P>
        After converting files to STL and generating GCode using Ultimate Cura
        Slicer, I printed the components with Ender 3 V2 3D printer using gold
        and black PLA filament.
      </P>
      <P>
        The course of the assembly made me discover a number of flaws made in
        the design:
      </P>
      <UL>
        <li>
          The back instead of the front should be thickened, so that I could
          stick the parts (e.g. hand lid) to the back instead of the front for
          easier assembly
        </li>
        <li>
          More space should be left between the walls of the finger joints, such
          that I do not need to sand as much to smoothen finger motion
        </li>
        <li>
          The hole size for M4 screws should be about 3mm instead of 2mm
          (eventually I have to drill the holes to make them larger)
        </li>
        <li>
          It’s better for some holes to be drilled after printing, since the
          printing tolerance will make holes unaligned
        </li>
      </UL>
      <P>
        Upon assembling the fingers with the fishing string, I tried the test
        their movements. The finger mechanism is inspired by InMoov’s design.
        Each finger is controlled by 2 strings – one for extension, and one for
        contraction, with the 1.75mm filament connecting the joints as follows:
      </P>
      <Img {...props} image="Finger_movement.gif" />
      <H1>Computer Vision</H1>
      <P>
        Mediapipe has a Python library analyzing hang gestures and labeling 21
        landmarks of the fingers. By comparing the coordinates of the landmark,
        I could determine whether the finger is “closed” or “opened”.
      </P>
      <P>
        For the index, middle, ring, and little finger, if the fingertip
        landmark is below that of the joint, then it’s closed, and vice versa.
        Yet for the thumb, it’s different since the finger movement is sideways
        instead of up-down. Hence, the program has to first identify whether the
        hand detected is left or right (by comparing whether some landmarks on
        the palm are on the left or the right of the others), then analyze the
        thumb’s sideway motion with a similar principle.
      </P>
      <P>
        The method above is simple but not perfect, since it wouldn’t work when
        the hand is placed upside down or horizontal. Yet, there is no need to
        detect these cases for my project, hence I simply let the program send
        warnings to users who did not put their hands in proper positions.
      </P>
      <P>The flow of the program is as follows:</P>
      <Img {...props} image="Flow_diagram_1.PNG" />
      <P>
        The demonstration video with the code (Finger_counter_trial.py) is as
        follows:
      </P>
      <Youtube id="SI_v4fDlT5I" />
      <H1>Raspberry Pi</H1>
      <P>
        At first, I wanted to directly use Raspberry Pi to run the whole robot –
        Pi Camera to capture hand movement, RPi’s hardware for Mediapipe
        analysis, and GPIO pins for servo control (Finger_counter_rpi_trial.py).
        However, not only does the jiggling problem of servos gets severe with
        RPi’s GPIO pins, but also the RPi is unable to run such an intense
        computer vision program with its limited hardware – the whole device
        just kept on shutting down!
      </P>
      <P>
        Eventually, I gave up using RPi. Instead, while I used my computer for
        computer vision analysis, I used an Arduino UNO for controlling the
        servos’ movement. Nonetheless, I still kept some unfinished CAD files
        for the design to hold my RPi inside the robot’s hand.
      </P>
      <H1>Serial Connection</H1>
      <H2>Trial connection with LED</H2>
      <P>
        Pyserial allows computers to send serial data to devices through COM
        ports. To test the library, I sent serial signals to Arduino for
        controlling an LED to turn on and off. The computer side sends “on” and
        “off” strings serially, and the microcontroller, after receiving the
        correct string, will do the subsequent action.
      </P>
      <P>I first tried a wired version (“Wired” file):</P>
      <Img {...props} image="Wired.jpg" />
      <P>Then the wireless version with Bluetooth (“Bluetooth” file):</P>{" "}
      <Img {...props} image="Wireless.jpg" />
      <H2>Trial connection with servos</H2>
      <P>
        After ensuring the serial connection can send strings properly, I start
        to test controlling servos to move. When supplying electricity for the
        servos, I realize it is costly and electrically unstable to use 5 4×1.5V
        AA battery boxes to support the servos. Trial and error made me realize
        one USB to USB-C wire can support two servos. Eventually, I bought one
        extra servo and use 3 wires to support 6 servos (one left idle).
      </P>
      <P>
        As for the wireless control, I firstly test by directly sending strings
        of 1 & 0 serially to the servos and it works well, yet when I try to
        send strings via reading hand gesture, the program wasn’t as smooth as
        expected.
      </P>
      <H2>Modifying code to match computer vision program</H2>
      <P>My initial program flow was as follows:</P>
      <Img {...props} image="Flow_diagram_2.PNG" />
      <P>
        In short, it is to send the command to the Arduino Uno every time it
        analysed the gesture. However, the command is therefore sent too
        frequently, and the Bluetooth port cannot handle such a large amount of
        data transmission – some of the commands were then just dismissed by the
        Uno and my hand wasn’t responding.
      </P>
      <P>
        Hence, I updated the program to only send string every 0.2s as follows:
      </P>
      <Img {...props} image="Flow_diagram_3.PNG" />
      <P>
        However, the command was still too frequent, yet I cannot further reduce
        the rate it sends the string. While the improvement is insignificant,
        the hand would be responding way too slowly.
      </P>
      <P>
        Therefore, I decided to apply algorithms to filter and reduce strings
        sent to the Arduino as follows:
      </P>
      <Img {...props} image="Flow_diagram_4.PNG" />
      <P>
        The first algorithm is to simply check whether the current hand gesture
        is the same as the one 0.2s ago. If same, then it’s redundant to send
        the same command again. This reduced the command sent drastically, yet
        the hand gestures were still sometimes wrong.
      </P>
      <P>
        For instance, when closing the hand, it is possible the loop captured
        the following moment:
      </P>
      <Img {...props} image="Hand.jpg" />
      <P>
        Then, the robot hand would do this unwanted intermediate gesture. To
        avoid this, the algorithm has to check whether the gesture is a final
        one or not. The algorithm, therefore, has to neglect this:
      </P>
      <Img {...props} image="Hand_1.jpeg" />
      <P>But detect this and send the ‘00000’ command:</P>
      <Img {...props} image="Hand_2.jpeg" />
      <P>
        This means, that the algorithm has to check the condition below to
        approve command sending:
      </P>
      <Img {...props} image="Algorithm.PNG" />
      <P>
        The final program (Finger_counter_with_servo.py) is working smoothly.
      </P>
      <H1>Finalization</H1>
      <H2>Perfboard circuit</H2>
      <P>
        I bought a 70×90 mm perfboard and soldered the electronics component on
        it. The circuit design is as follows:
      </P>
      <Img {...props} image="Perfboard_circuit.PNG" />
      <P>
        The blue pins are for the Arduino, the green pins are for the USB-C
        breakout boards, the purple pins are for the HC-05 Bluetooth module, and
        the white, red and black pins are for the servo motors.
      </P>
      <P>The soldered perfboard is as follows:</P>
      <Img {...props} image="Perfboard.jpg" />
      <H2>Final assembly and testing</H2>
      <P>The final assembled robot is as follows:</P>
      <Img {...props} image="Assembly.jpg" />
      <P>The internal structure is as follows:</P>
      <Youtube id="DNap2p14p6c" />
      <Img {...props} image="Base.jpg" />
      <P>The following video demonstrates the robot in-action:</P>
      <Youtube id="7noIbWIoXuM" />
      <H1>Future improvements</H1>
      <UL>
        <li>
          The delay between the real and robot hand movement could be shortened
        </li>
        <li>An external button could be made for the 9V battery</li>
        <li>1 instead of 3 wires could be used for the power supply</li>
      </UL>
      <H1>Files</H1>
      <Href>https://github.com/Do-it-myself/Robotic-Infinity-Gauntlet</Href>
    </PostTemp>
  );
}
