## ViaGoGO Interview Task 

To start please run the following commands:

npm install 

npm start  

# Part 1:
Given the javascript object containing event data (in the eventlist.js file), built a page that displays a list of events for one artist.

Update the design to show the user all the important information that a customer would want to know when deciding on which event to go to.

These deliverables are handled in the View.js and EventCard.js files where the list of events are being displayed. 


# Part 2:
Design and implement a filter that will allow users to filter by location. The filter should have a full list of locations where all locations are visible and allows the user to select a location.

This deliverable is handled in the Filter.js file where the filter dropdown component is built.

# Part 3: 
Imagine that based on the information we collected about how users interact with our page, we found that the filter was not well received by our users. We still believe that having a filter is a great feature for them, so:

Tell us about the possible reasons that the filter your implemented in part 2 did not help the customer experience.
What could you change to improve the filter experience, and why do you think it would be better for the customer?

There are many other attributes that a user might want to filter out for their event searches. For example, they may want to filter for a weekend evening, price, or specific dates. They also may want to sort rather than filter because it's easier to compare events side by side. 

In the AdvancedFilter.js file there's a button which I believe should either open up modal with the filter options. I noticed that the viagogo site actually takes it to another page. I would implement react router to have the clicked event send the user to an advanced filter page. 

I used redux in my code because eventually the Advanced Filter option would cause state to become difficult to manage depending on the number of filters we wanted to give the user. 