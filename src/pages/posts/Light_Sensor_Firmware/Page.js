import React from "react";

import { PostTemp, P, H1, Href, OL, Img, Youtube } from "src/pages/posts/Element";

export default function Page(props) {
  return (
    <PostTemp {...props}>
      <P>
        This is the first time I attempt to write a firmware library. I used
        STM32 Blue Pill Development Board, which has an ARM Cortex-M
        microcontroller, hence MBed library could be used. I attempted to use
        the library written to read light sensor (TSL2591) data and calculate
        the lux of the environment.
      </P>
      <H1>Reference information</H1>
      <P>
        While TSL2591 has its own{" "}
        <Href embed="https://cdn-shop.adafruit.com/datasheets/TSL25911_Datasheet_EN_v1.pdf">
          datasheet
        </Href>
        , Adafruit also has an{" "}
        <Href embed="https://www.arduino.cc/reference/en/libraries/adafruit-tsl2591-library/">
          Arduino-specific library
        </Href>
        .
      </P>
      <H1>Overview</H1>
      <P>
        The light sensor has different registers storing information – from data
        read from the sensor to data that controls the sensor setting. The
        sensor uses the I2C protocol with a preset slave address. To read or
        write data in the registers, I have to first write the ‘command bits’
        (1010 0000) and the register address. Hence, a “write” function involves
        2 writes, and a “read” function involves 1 read and 1 write.
      </P>
      <P>
        The library consists of two files – a header file (.h) and an
        implementation file (.cpp). The header file listed the variable and
        method, and declared the class, while the implementation file actually
        wrote the method content.
      </P>
      <H1>Coding</H1>
      <P>
        The header file is the easier one. With the Adafruit Arduino library, I
        could easily borrow the instance definition from it. For the methods,
        there are existing functions (e.g. interrupts) that I need not use,
        hence I selected methods useful to keep for my class.
      </P>
      <P>
        I categorized the methods into four groups – basic functions,
        configurations, setting data, and lighting data. The basic functions are
        the one for reading and writing data, as well as enabling and disabling
        the sensor. I didn’t realize I got to enable certain bits before the
        sensor could collect data, which wasted much extra time on debugging.
      </P>
      <P>
        Despite not fully understanding the scientific principle behind the
        sensor, I deduced that I have to set proper gain and timing to allow
        nice measurement. Hence, two methods are made specifically for setting
        them.
      </P>
      <P>
        To ensure the I2C communication works, I made the “begin” function. It
        attempts to check the ID of the sensor, and compared it with its known
        value. If it’s the same, it means the I2C communication is established.
        There are also two functions to check the set gain and timing value
        stored in the sensor, which is for calculating lux.
      </P>
      <P>
        The highlight is to collect light data and calculate lux. The data is
        read in the “getFullLuminosity” methods, and the lux is calculated with
        a formula in the Adafruit library.
      </P>
      <H1>Debugging</H1>
      <P>
        I used a logic analyzer to check the signal sent between the master
        (Blue Pill) and the slave (sensor) for debugging. The file (Debug.dsl)
        measured the voltage level when it was reading data from the light
        sensor.
      </P>
      <Img {...props} image="Debug.jpg" />
      <H1>Serial</H1>
      <P>
        I made a program to send gain, timing, and 5 lux measurement serially.
        Unlike Arduino, STM32 requires a serial-to-USB adaptor to send serial
        data to the COM port. The measurement setup is as follows:
      </P>
      <Img {...props} image="Serial.jpg" />
      <P>
        The demonstration video is as follows.{" "}
        <Href embed="https://docs.microsoft.com/en-us/windows/win32/sensorsapi/understanding-and-interpreting-lux-values">
          Microsoft has a webpage about interpreting lux value
        </Href>{" "}
        – the value before covering matches that of ‘bright indoor’, and that
        after covering matches that of ‘dark indoor’, verifying the accuracy of
        the data and the formula.
      </P>
      <Youtube id="uuNA8J59e7Y" />
      <H1>OLED</H1>
      <P>
        Afterwards, I decided to display the lux and gain on an OLED display.
        Fortunately, while Adafruit provided a graphics library, davetcc forked
        it and produced an MBed library for SH1106.
      </P>
      <P>I got into quite a lot of hiccups when configuring the library:</P>
      <OL>
        <li>
          There are dependencies I have to download to support the library
        </li>
        <li>Rtos library has to be enabled in build_flags</li>
      </OL>
      <P>
        Eventually, I managed to make the OLED display words. Then I code it
        such that it could display the lux and gain information. If the sensor
        has disconnected in the middle, it would find out and prompt users to
        reset the microprocessor.
      </P>
      <P>The display setup is as follows:</P>
      <Img {...props} image="OLED.jpg" />
      <P>And the demonstration video is as follows:</P>
      <Youtube id="_2RWrVb3b3I" />
      <H1>Files</H1>
      <Href>https://github.com/Do-it-myself/Light-Sensor-Firmware</Href>
    </PostTemp>
  );
}
