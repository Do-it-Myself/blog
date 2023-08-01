import React from "react";

import { PostTemp, P, H1, H2, Href, Img, Youtube } from "src/pages/posts/Element";

export default function Page(props) {
  return (
    <PostTemp {...props}>
      <P>
        I’ve recently joined a hackathon with the theme “Social
        Entrepreneurship”. Under this, one of the sub-theme is “Healthier,
        Longer, Better Lives”. My teammate and I chose this hacking prompt and
        spent a month developing OpenFitness – a sports search filter with
        gamification elements.
      </P>
      <H1>Problems</H1>
      <P>
        As students who want to stay active and maintain a balanced lifestyle,
        we often find it incredibly difficult to do so without tools to help us
        out.
      </P>
      <Img {...props} image="Problem_1.PNG" />
      <P>
        For instance, I would like to stay active by enjoying different sports
        with my friends. However, as university students, all of us have
        incredibly packed timetables. None of us could afford the time to plough
        through dozens of search results to find one that fits all of our needs.
        In the end, we end up studying in our rooms rather than meeting up and
        doing sports. It’s too time-consuming to search for sports venues.
      </P>
      <Img {...props} image="Problem_2.PNG" />
      <P>
        As for my teammate, he has always wanted to improve his physique by
        heading to the gym a few times each week. Working out is a long-term
        commitment – it takes months of consistent workouts for results to show,
        but as a university student, he’d prefer working on his coursework
        assignments over working out because it feels like a more efficient use
        of my time. It’s difficult for him to stay motivated and disciplined to
        work out because the results take a long time to show.
      </P>
      <P>
        In fact, based on the AIA Healthier Together Survey, it is more
        important for one to stay physically active than staying mentally active
        in order to feel engaged in life. Among the eight ingredients of a
        healthier, longer, better life is being active and engaged. We can see
        that sports play a significant role in ensuring one’s well-being.
        However, another study states that over 50% of my hometown’s population
        fails to meet the baseline physical activity level. We are simply not
        doing enough sports for our well-being.
      </P>
      <P>
        To address these issues, OpenFitness combines a search filter for sports
        venues with gamification elements, with the goal of promoting an active
        lifestyle among people. There are three main features that make the app
        stand out from the competition.
      </P>
      <Img {...props} image="OpenFitness.jpg" />
      <H1>Features</H1>
      <H2>Efficient - Filter</H2>
      <P>
        Our search filter makes it more efficient to look for sports venues that
        fit the user’s criteria. For us, it’s never been more frustrating to
        look for a sports venue that seems like a perfectly good fit, only to
        find out that it won’t be open on the day you’re planning to go there,
        or that it’s out of your budget. This process of searching, browsing,
        and eliminating, can be extremely time-consuming and exhausting for the
        user. Using our centralized sports-only search engine, OpenFitness
        streamlines this process by allowing users to filter based on common
        criteria like location, price, type of sports, and opening hours. It
        then generates a list of matching results. Users can click on any of the
        results for details, where information, photos, and reviews of the
        sports venue are all organized on one page.
      </P>
      <Youtube id="WDIw7B_2k2A" />
      <H2>Engaging – Gamification</H2>
      <P>
        Our gamification elements promote user engagement in doing sports. When
        the user arrives at a sports venue, our app uses GPS to determine which
        sports venue the user is currently at. Either the app detects the
        closest sports venue, or the user could manually choose the locations.
        Users can collect points every time they finish a sports session. The
        number of points is calculated based on the duration of the session.
        Users can level up after they’ve reached a certain number of points.
        We’ve also introduced personal fitness goals for the user. The weekly
        fitness tasks serve as short-term goals, while the badges serve as
        long-term goals. Users can check their progress on their statistics
        page. On the other hand, our leaderboard system promotes competition
        among the user’s social group. The combination of short-term and
        long-term goals drives users’ motivation and promotes long-term
        engagement.
      </P>
      <Youtube id="JI04AgdDbQk" />
      <H2>Personalized – Recommendation</H2>
      <P>
        Our app offers personalized recommendations on types of sports. Users’
        scores are broken down into four categories. Our recommendations are
        made based on scores in each category. If the user scores particularly
        high on cardio, then our app predicts that they might prefer cardio
        sports and recommends cardio to them. At the same time, if the user
        scores particularly low on muscle strength, then our app may suggest
        they try out activities that develop muscle strength. This dual
        recommendation system provides the user with the option to either
        develop their fitness “spike” (specialty) or go for balanced fitness
        development.
      </P>
      <Youtube id="0XGpcGTuXxc" />
      <H1>Conclusion</H1>
      <P>
        Tying back to our personal experiences with doing sports, the
        gamification features would serve as a source of motivation and
        accountability for my teammate to workout consistently. In addition,
        using the search filter function, it will take much less time for me to
        find sports venues that suit all of my friends’ fitness levels and
        interests. The personalized recommendations can also give us ideas for
        what new sports to try out the next time I meet with my friends.
      </P>
      <P>
        Eventually, whether it’s university students, full-time workers, or just
        anybody who wants to try out sports but doesn’t know where to start, all
        Hongkongers can look for sports venues more efficiently and enjoy an
        active lifestyle.
      </P>
      <H1>Development</H1>
      <P>
        We believe that our app has the potential to expand to a larger scale.
        In terms of managing the database of sports venues, we’ve got an
        excellent success story to draw from, which is the restaurant guide app
        OpenRice. Similarly, for our gamification elements, we’ve got successful
        study apps like Forest and YPT, which rank friends based on the number
        of hours they’ve spent on studying. However, as our app allows user to
        manually input their sports locations, there might be concerns that
        users may fake sports sessions in order to score points and rank higher
        on the leaderboard. However, these study apps show that users will be
        unlikely to do so as they know this ultimately can’t help them fulfill
        their main goal – for study apps, it’s to get good grades, while for
        OpenFitness, it’s to maintain a healthy lifestyle.
      </P>
      <Img {...props} image="Business_model.PNG" />
      <P>
        Meanwhile, unlike Google Maps Reviews, since our app only focuses on
        sports venues, we believe it’s much more feasible to maintain and
        regulate the information provided by our search filter. Unlike Facebook
        pages of sports venues, our app allows users to contribute directly to
        the photos of the sports venues. Therefore, there will be both company
        and user input to expand the database. In terms of user engagement, we
        believe that the convenience provided by our app, in addition to the
        bandwagon effect from our leaderboard ranking system, are strong pull
        factors to use our app.
      </P>
      <Img {...props} image="Compare.PNG" />
      <P>
        In the future, more data could be covered by the app, such as
        facilities, latest trends, and trainers testimonials, so that users
        could have more information in mind when choosing the right venue. The
        app could even collaborate with sports centers to allow users to book
        their facilities and classes through our platform.
      </P>
      <P>
        The app can also possibly be transformed into a social media platform
        for all things sports-related. Not only can users write about their
        opinions on sports venues and sports tips on their blogs, but also share
        their snapshots of trying out different sports activities. A virtual
        community for sports enthusiasts can then be gradually developed.
      </P>
      <H1>Impact</H1>
      <P>
        In the long run, we envision our app improving Hong Kong’s development
        sustainability. Economically, success stories from other search filter
        managing and gamification companies show this app development is a
        viable business model, and this app is simultaneously a way to promote
        the sports industry. Socially, we hope our app could develop a sports
        community in Hong Kong and promote an active culture among Hongkongers,
        eventually encouraging more and more to adopt healthy lifestyles.
      </P>
      <H1>Technologies</H1>
      <P>The following shows the technologies used for this project.</P>
      <Img {...props} image="Technologies.PNG" />
      <H1>File</H1>
      <P>React Native file:</P>
      <Href>https://github.com/Do-it-myself/OpenFitness</Href>
    </PostTemp>
  );
}
