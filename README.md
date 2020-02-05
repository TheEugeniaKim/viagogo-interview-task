## ViaGoGO Interview Task 

To start please run the following commands:

npm install 

npm start  

# Part 1:
**Task:** Given the javascript object containing event data (in the eventlist.js file), built a page that displays a list of events for one artist.

Update the design to show the user all the important information that a customer would want to know when deciding on which event to go to.

**Response:** These deliverables are handled in the View.js and EventCard.js files where the list of events are being displayed. I want to note that there seem to be many different key value pairs that I didn't render for the purposes of this exercise because the values were null or false. They would not have shown up on the page. For example, the "IsSellingFast" attribute or the "IsRecentlyViewed" attribute all have false values. However, I could absolutely incorporate those features in the view on the event cards in the future. 


# Part 2:
**Task:** Design and implement a filter that will allow users to filter by location. The filter should have a full list of locations where all locations are visible and allows the user to select a location.

**Response:** This deliverable is handled in the Filter.js file where the filter dropdown component is built. Selecting a city changes the venueCityFilter in state, which affects the events that are rendered in View. 


# Part 3: 
**Task:** Imagine that based on the information we collected about how users interact with our page, we found that the filter was not well received by our users. We still believe that having a filter is a great feature for them, so:

Tell us about the possible reasons that the filter your implemented in part 2 did not help the customer experience.
What could you change to improve the filter experience, and why do you think it would be better for the customer?

**Response:** There are many other attributes that a user might want to filter out for their event searches. I noticed in the eventlist object that For example, they may want to filter for a weekend evening, price, or specific dates. They also may want to sort rather than filter because it's easier to compare events side by side. 

In the AdvancedFilter.js file there's a button which I believe should either open up modal with the additional filter options. I noticed that the viagogo site actually takes it to another page. If I were to do it the way the website looks, I would implement react router to have the clicked event send the user to an advanced filter page. I would reuse the View component again and build the advanced filter component to render side by side with the View. The AdvancedFilter component would be one very large form that would affect additional filters in state. I would then conditionally render the event cards in the View component depending on what attributes were filtered in the AdvancedFilter form that I would build. 

I used redux in my code because eventually the Advanced Filter option would cause state to become difficult to manage depending on the number of filters we wanted to make available to the user. However, I could also build this without using redux and simply pass state down through props. 