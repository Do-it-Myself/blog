import React from "react";

import { PostTemp, P, H1, H2, Href, UL, Img, Table, Youtube } from "src/pages/posts/Element";

export default function Page(props) {
  return (
    <PostTemp {...props}>
      <P>
        KwickScreen, a UK-based company designing hospital isolation screens,
        mainly uses glass-fiber bistable tubes (C-tubes) to make their screens
        retractable. They’ve sponsored a design tournament, with a design prompt
        asking contestants to use C-tubes to enter new markets. My teammates and
        I chose this design prompt and eventually spent three weeks refining
        existing queue barriers.
      </P>
      <H1>Background</H1>
      <P>
        Queue barrier systems are used for maintaining efficient pedestrian flow
        and implementing social distancing. The system is widely used in malls,
        hotels, airports, hospitals etc. Currently, the commonly existing types
        are as follows.
      </P>
      <Table style={{ fontSize: "15px" }}>
        <tr>
          <th>
            <Img {...props} image="Retractable_belt_barrier.PNG" width="100%" />
          </th>
          <th>
            <Img {...props} image="Post_and_rope_barrier.PNG" width="100%" />
          </th>
          <th>
            <Img {...props} image="Cafe_barrier.PNG" width="100%" />
          </th>
        </tr>
        <tr>
          <th>Retractable belt</th>
          <th>Post & rope</th>
          <th>Cafe</th>
        </tr>
      </Table>
      <P>
        Our team discovered that C-tube is a good fit to queue barrier systems
        due to its unique properties:
      </P>
      <UL>
        <li>Retractable and rigid</li>
        <li>Remains in place when extended</li>
      </UL>
      <Img {...props} image="C-tube.jpeg" />
      <P>Harnessing C-tube’s properties, we designed KwickLine.</P>
      <H1>What is KwickLine?</H1>
      <P>
        KwickLine is a queue barrier system with a retractable screen as the
        barrier. While the wide screen makes queue-jumping harder, the banner
        inside the screen can easily be customized.
      </P>
      <Table>
        <tr>
          <th>
            <Img {...props} image="No_queue_jump.PNG" width="100%" />
          </th>
          <th>
            <Img {...props} image="Customizable.PNG" width="100%" />
          </th>
        </tr>
        <tr>
          <th>✗ Queue-jumping</th>
          <th>✓ Customizable</th>
        </tr>
      </Table>
      <P>
        Each screen pulled from a column can be connected to another column in
        different positions. The screen direction is then adjustable to form
        different barrier systems.
      </P>
      <Img {...props} image="Using_KwickLine.PNG" />
      <Img {...props} image="Lock.gif" width="calc(var(--imageWidth)/2)" />
      <H1>Design Overview</H1>
      <P>
        The following shows the CAD render model and our prototype, which is
        made with mainly PVC tubes, cardboard and plastic films, and of course
        the C-tubes.
      </P>

      <Img {...props} image="CAD_render.PNG" />

      <Img {...props} image="Prototype.jpeg" />
      <H1>Design Features</H1>
      <H2>Variable-length</H2>
      <P>
        The width of the screen is adjustable, while normal queue barriers with
        advertisements have fixed length only. Our design then allows banners of
        different aspect ratios to be inserted.
      </P>
      <Img {...props} image="Variable_length.gif" />
      <H2>Easy banner replacement</H2>
      <P>
        The plastic screen, which is held in place by magnetic tape, can be
        opened easily to replace the banner. A flap on top prevents water from
        entering, especially on rainy days. KwickLine is then suitable for both
        outdoor and indoor applications.
      </P>
      <Table>
        <tr>
          <th>
            <Img
              {...props}
              image="Easy_banner_replacement_sketch.PNG"
              width="calc(var(--imageWidth)*0.6)"
            />
          </th>
          <th>
            <div style={{ width: "calc(var(--imageWidth)*0.1)" }}></div>
          </th>
          <th>
            <Img
              {...props}
              image="Easy_banner_replacement.gif"
              width="calc(var(--imageWidth)*0.3)"
            />
          </th>
        </tr>
      </Table>
      <H2>Easy connection</H2>
      <P>
        The screen is connected to another column sturdily with a lock. The
        prototype used a ‘snap-on’ magnetic mechanism on solely the upper part,
        but mechanical locks can be incorporated into both the upper and lower
        C-tubes to strengthen the barrier. Each screen is supported by two
        columns, hence the system itself is stable. With different locking
        positions available, different screen configurations could be made.
      </P>
      <Table>
        <tr>
          <th>
            <Img
              {...props}
              image="Easy_connection.PNG"
              width="calc(var(--imageWidth)*0.55)"
            />
          </th>
          <th>
            <div style={{ width: "calc(var(--imageWidth)*0.1)" }}></div>
          </th>
          <th>
            <Img
              {...props}
              image="Easy_connection.gif"
              width="calc(var(--imageWidth)*0.35)"
            />
          </th>
        </tr>
      </Table>
      <H1>Design Challenges</H1>
      <H2>Stability</H2>
      <P>
        Force on the barrier, for instance, strong winds, could make the screen
        topple. To solve this, the columns will have a heavy base, as well as a
        strong connection.
      </P>
      <Img {...props} image="Stability.PNG" />
      <H2>Aesthetic</H2>
      <P>
        Another concern is the general appearance of KwickLine. What if the
        client just wants a generic barrier and doesn’t know what to put on the
        screen? What if Kwickline is unrolled halfway?
      </P>
      <Img {...props} image="Aesthetic_problem.PNG" />
      <P>
        The solution to this is to provide a few generic patterns for the user
        that come along with the product. Even when unrolled halfway, these
        patterns look decent.
      </P>
      <Table>
        <tr>
          <th>
            <Img
              {...props}
              image="Aesthetic_solution.PNG"
              width="calc(var(--imageWidth)*0.6)"
            />
          </th>
          <th>
            <div style={{ width: "calc(var(--imageWidth)*0.1)" }}></div>
          </th>
          <th>
            <Img
              {...props}
              image="Aesthetic_halfway.PNG"
              width="calc(var(--imageWidth)*0.3)"
            />
          </th>
        </tr>
      </Table>
      <H1>Design Details</H1>
      <H2>Rough Dimensions</H2>
      <P>
        The height of the queue barrier’s column is similar to those available
        in the market. The screen’s height and width are designed such that it
        can fit up to two A0 horizontal banners. The dimension unit is in mm.
      </P>
      <Img {...props} image="Rough_Dimensions.PNG" />
      <H2>Column</H2>
      <P>
        To provide manufacturing ease, the column is split into four components
        – the upper ‘snail-like’ cover, bottom base, outer casing, and the axis
        for pulling the screen out.
      </P>
      <Youtube id="rw0J1VeaK1s" />
      <P>
        After manufacturing the individual components, they can be fit together
        by simple locking mechanisms. The upper cover is connected to the outer
        casing by a friction lock, while the lower base is connected to the
        casing by a rotation lock.
      </P>
      <Youtube id="nMKNMJC8Dnc" />
      <Youtube id="_NheTLha2Vg" />
      <H1>Market Research</H1>
      <P>
        In the UK, there are about 2500 museums, 1230 hospitals, 550 malls, and
        40 airports respectively, with all these places adopting queue barrier
        systems. Meanwhile, there is also the market size for putting printed
        ads, which is one major function of KwickLine. The current market size
        is 61.67B USD, with a compound annual growth rate of 8.3%. From all
        these statistics, we can see there will be a demand for KwickLine.
      </P>
      <P>
        Compared to our common counterparts, KwickLine is better in terms of the
        following benchmarks.
      </P>
      <Table style={{ fontSize: "12px" }} border={true}>
        <tr>
          <th width="20%"></th>
          <th width="20%">KwickLine</th>
          <th width="20%">Retractable belt</th>
          <th width="20%">Post & rope</th>
          <th width="20%">Cafe</th>
        </tr>
        <tr>
          <th style={{ textAlign: "left" }}>Customization</th>
          <th>✓</th>
          <th>✗</th>
          <th>✗</th>
          <th>✓</th>
        </tr>
        <tr>
          <th style={{ textAlign: "left" }}>Variable length</th>
          <th>✓</th>
          <th>✓</th>
          <th>✓</th>
          <th>✗</th>
        </tr>
      </Table>
      <P>
        KwickLine does have better features, but why would users that already
        have many queue barriers invest in KwickLine? It is because the
        customization feature will appeal to customers who need to often replace
        the screen content, as it is quite costly in terms of money and time to
        replace content in traditional barriers.
      </P>
      <P>
        Currently, queue barrier counterparts are usually sold for around
        £150-250 for a banner with two columns. While we estimated the
        production cost of one KwickLine unit to be roughly £60, the suggested
        pricing system for KwickLine is therefore as below:
      </P>
      <Table style={{ fontSize: "12px" }} border={true}>
        <tr>
          <th width="10%"></th>
          <th width="30%">{"<"} 5 units</th>
          <th width="30%">{">"} 5 units</th>
          <th width="30%">Rental</th>
        </tr>
        <tr>
          <th style={{ textAlign: "left" }}>Price per unit</th>
          <th>£169</th>
          <th>£139</th>
          <th>£15/day</th>
        </tr>
        <tr>
          <th style={{ textAlign: "left" }}>Target customers</th>
          <th>Smaller shops e.g. cafe (price matches other queue barriers) </th>
          <th>Shopping malls, airports (for bulk purchase) </th>
          <th>Large events e.g. exhibitions, concerts, trade shows</th>
        </tr>
      </Table>
      <H1>Performance in Design Tournament</H1>
      <P>
        This design allows my team to be one of the stronger ones for the final
        critiques. The score is especially good for ‘Market potential and
        development’. However, there are some next-step suggestions provided:
      </P>
      <UL>
        <li>
          Can people lining up in the line see the content on the screen? How to
          widen the audience of the screen content?
        </li>
        <li>
          Can the three-layer screens be rolled up easily? Is it possible to opt
          for a one-layer design?
        </li>
      </UL>
      <H1>File</H1>
      <P>SolidWorks modeling:</P>
      <Href>https://github.com/Do-it-myself/KwickLine-Queue-Barrier</Href>
    </PostTemp>
  );
}
