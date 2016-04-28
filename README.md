# cogs121-sp16-ass2

-------------------------------------------------------------------
# App Name: Crash Vis
Our California Highway Patrol officers work hard to assure the safe, convenient and efficient
transportation of people and goods on our highway system.  With a massively expansive highway
system and a limited amount of resources, CHP officers are faced with the problem of how they
can position themselves in the most strategic places to prevent and respond to motor vehicle collisions.
This is where Crash Vis comes in.  Our application is capable of visualizing statistics
on motor vehicle collisions in a way that can be easily interpreted by officers to help them identify
problem areas on the road.  The easier it is for our officers to see the problem, the easier it is
for them to control traffic and prevent collisions.

-------------------------------------------------------------------
#Authors/Contributions:
* Bonnie Chinh:     Brainstorm ideas for assignment. Implemented the information bar.
* Joseph Martin:    Brainstorm ideas for assignment. Help with design, README documentation, writing.
* Anjelica Thang:   Brainstorm ideas for assignment. Set up and manage SQL for Postgre database. Assist with overall design and debugging.
* Lok Wong:         Set up connection to Postgre database. Implemented homepage and help functionality. Assist with design.
* Chen Yang:        Reorganized and implemented the d3 visual with data obtained. Assist with debugging.

-------------------------------------------------------------------
#Instructions:
1. Click on a region to view the cities in that region.
2. Position your mouse over the city you want to know more about.
3. Click anywhere to zoom out and explore another region.
-------------------------------------------------------------------
#Design Principles/Decisions:

**Discoverability/Signifiers**
- Are users able to easily find the points of the application that they are interested in?
- Users are able to identify key areas of interest based on either region or accident rate.  Cities are nested within regions that makes them easier to identify and the size of a city's cirlce represents the accident rate.

**Learnability**
- Are users able to easily learn and remember how to interact with your application?
- Crash Vis is simple to learn and interact with.  Users can gain an understanding of general collision trends with one glance and have access to key information about accident rates in key areas within two clicks.

**Feedback**
- Is there strong evidence of user feedback for actionable items?
- The clickable areas are outlined upon mouse-hover to indicate clickability.  Upon clicking the application zooms in on that area to give the user a closer view of the data.

**Natural Mapping/Mental Metaphors**
- Is there strong evidence of providing natural mappings or relatable metaphors that help the user navigate the application?
- Our development team utilized research in cognitive science to develop a visualization that works with the natural human perceptive system to help convey intuitive understanding.  Contrast in proximity and color are used to differentiate different regions and cities, while the size of the circles is representative of the relative numerosity of collisions in that area.

**Constraints**
- Does the application have deliberate constraints to guide the flow of user interaction?
- Users are constrained in that the information is presented in a hierarchy based on the region the cities are in. The downside to this decision is that users cannot see the data organized from highest to lowest accident rate, but must navigate within the regions.  The reason we decided to make this decision was that we believe it is a more usefull mapping to be able to see the relative accident rates of regions as an aggregate of their cities. 

**Error Prevention/Recovery**
- Is there strong evidence of error prevention and error recovery so that the user won’t be
left confused when something unexpected happens?

-------------------------------------------------------------------
* Special thanks to UC San Diego for access to the DELPHI database