# cogs121-sp16-ass2

-------------------------------------------------------------------
# App Name: Crash Vis
Our California Highway Patrol officers work hard to assure the safe, convenient and efficient
transportation of people and goods on our highway system.  With a massively expansive highway
system and a limited amount of resources, CHP officers are faced with the problem of how they
can position themselves in the most strategic places to prevent and respond to motor vehicle collisions.
This is where Crash Vis comes in. Our application is capable of visualizing statistics
on motor vehicle collisions in a way that can be easily interpreted by officers to help them identify
problem areas on the road. The easier it is for our officers to see the problem, the easier it is
for them to control traffic and prevent collisions.

-------------------------------------------------------------------
#Authors/Contributions:
* Bonnie Chinh:     Brainstorm ideas for assignment. Implemented the information bar. Hover functionality of statistics. Dashboard & Sidebar implementation.
* Joseph Martin:    Brainstorm ideas for assignment. Help with designing landing page and general design, README documentation, writing.
* Anjelica Thang:   Brainstorm ideas for assignment. Set up and manage SQL for Postgre database. Assist with overall design and debugging.
* Lok Wong:         Set up connection to Postgre database. Implemented homepage and help functionality. Assist with design.
* Chen Yang:        Reorganized data obtained to fit d3 visual. Assist with debugging. Dashboard and sidebar implementation. Circle zoom functionality.

-------------------------------------------------------------------
#Instructions:
1. Click on a region to view the cities in that region.
2. Position your mouse over the city you want to know more about.
3. Click anywhere to zoom out and explore another region.
4. View information about accidents by region in a list on the sidebar.
-------------------------------------------------------------------
#Design Principles/Decisions:

**Discoverability/Signifiers**
- Are users able to easily find the points of the application that they are interested in?
- Users are able to identify key areas of interest based on either region or accident rate.  Cities are nested within regions that makes them easier to identify and the size of a city's circle represents the accident rate. Users can easily zoom in and out or hover to view information.

**Learnability**
- Are users able to easily learn and remember how to interact with your application?
- Crash Vis is simple to learn and interact with.  Users can gain an understanding of general collision trends with one glance and have access to key information about accident rates in key areas within two clicks. Crash Vis also offers a Help button case users forget how it works. As another helpful measure for first-time users, there is a small instruction box in the bottom-left corner of the screen.

**Feedback**
- Is there strong evidence of user feedback for actionable items?
- The clickable areas are outlined upon mouse-hover to indicate clickability.  Upon clicking the application zooms in on that area to give the user a closer view of the data. The sidebar and hover information also give users immediate feedback.

**Natural Mapping/Mental Metaphors**
- Is there strong evidence of providing natural mappings or relatable metaphors that help the user navigate the application?
- Our development team utilized research in cognitive science to develop a visualization that works with the natural human perceptive system to help convey intuitive understanding.  Contrast in proximity are used to differentiate different regions and cities, while the size of the circles is representative of the relative numerosity of collisions in that area. The list of cities on the sidebar also show the cities within the region clicked on in order to strengthen natural mapping.

**Constraints**
- Does the application have deliberate constraints to guide the flow of user interaction?
- Users are constrained in that the information is presented in a hierarchy based on the region the cities are in. The downside to this decision is that users cannot see the data organized from highest to lowest accident rate, but must navigate within the regions.  The reason we decided to make this decision was that we believe it is a more usefull mapping to be able to see the relative accident rates of regions as an aggregate of their cities.

**Error Prevention/Recovery**
- Is there strong evidence of error prevention and error recovery so that the user won’t be
left confused when something unexpected happens?
- If users were to click on the wrong area, the sidebar would display the name of the area along with the cities contained in the area so the user could easily refer to it or see if they had entered the wrong circle. The instructions upon landing on the page under "Motor Vehicle Injuries" help prevent errors to begin with. Users can also recover from errors if they clicked on the wrong circle by clicking anywhere on the page to zoom out.

-------------------------------------------------------------------
#Justification of Tools

Our team decided to use Bootstrap in order to easily style our work and create a consistent set of buttons and features on our pages. We also decided to use a free Bootstrap library, DashGum, to help us organize the information we wanted to display in a beautiful way. These were necessary to our project in order to attract users and ease the process of visualizing information of motor vehicle injuries. Aside from asthetics, our team chose to use a circle packing visualization as a unique and interactive way of visualizing data. Rather than using a map, circle packing allows us to divide San Diego county into six major regions, which, based off their labels, already give users an idea of their geographic locations within the county. The smaller circles inside give users a bird's-eye view of general information involving injuries, which the users can then hover over and zoom into for more detail. We believe the bird's-eye view on a simple visualization makes the data much easier to understand and the interaction created promotes an engaging experience.

-------------------------------------------------------------------
* Special thanks to UC San Diego for access to the DELPHI database