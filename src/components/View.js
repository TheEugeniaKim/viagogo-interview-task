import React from 'react'
import {json} from '../eventlist'
import EventCards from './EventCards'

class View extends React.Component {

  state = {
    events: []
  }

  componentDidMount(){
    return this.setState({
      events: json.Items
    })
  }

  render(){
    console.log(this.state.events)
    return this.state.events.map(event => {
      return (
        <EventCards
          id={event.EventId}
          EventId={event.EventId}
          Day={event.Day}
          Month={event.Month}
          Date={event.Date}
          Time={event.Time}
          EndDate={event.EndDate}
          DateVal={event.DateVal}
            // EndDateVal: null
          VenueName={event.VenueName}
          VenueCapacity={event.VenueCapacity}
            // VenueCapacitySliderOffset: 0
          VenueCity={event.VenueCity}
          VenueStateProvince={event.VenueStateProvince}
          VenueCountry={event.VenueCountry}
          VenueCountryCode={event.VenueCountryCode}
            // VenueConfigId: 126478
          EventName={event.EventName}
            // MinPrice: "£137.57"
            // EventUrl: "/Concert-Tickets/Rock-and-Pop/Elton-John-Tickets/E-2566910"
            // MetroAreaUrl: null
            // AvailableTickets: 673
            // TotalMaxDisplayTickets: 671
            // AvailableTicketsNumber: 673
            // IsSellingFast: false
            // IsDateTimeTBA: false
            // LinkTitleText: "Elton John at Toyota Center - TX Houston on Sun 09 Dec 2018 20:00"
            // AllowPublicPurchase: true
            // AllowPublicListing: true
            // OnSaleDate: null
            // LimitedQuantityRemainingContent: null
            // IsCheapestCity: true
            // IsCheapestCityContent: "Cheapest tickets in Houston."
            // IsMostExpensiveInCity: false
            // cheapestPercentageAmount: null
            // IsRecentlyViewed: false
            // CategoryId: 4508
            // IsCrossListed: false
            // IsSoldOut: false
            // HidePrice: true
            // IsMostLovedEvent: false
            // HeadingTowardsLimitedStockMessage: "Tickets for this event are almost gone."
            // HeadingTowardsLimitedSupplyMessage: null
            // UrgencyCategory: 0
            // CityImageUrl: null
            // IsLocalEvent: false
            // MapPngUrl: null
            // EmojiFlag: null
            // IsWeekend: false
            // VenueNotes: null
            // RecentCategories: null
            // EventCountdownMessage: null
            // HasMonthlyDeal: false
            // TransactionWithinTheLastDay: false
            // PriceSymbolIndicator: null
            // NewListingWithinTheLastDay: false
            // IsMostPopularEventInVenueCityThatWeekend: false
            // IsNextEvent: false
            // SecondsToEvent: 0
            // VenueHasImage: false
            // VenueImageUrl: null
            // IsLastDateInCity: true
            // SoldOutTicketClasses: null
            // BestSellingMessage: null
            // AlreadySoldContent: null
            // DistanceFromUser: null
            // VenueDescription: "Medium-sized venue - great view and atmosphere"
            // CalendarViewModel: {MonthName: "Dec", WeekdayAndTime: "Sun 20:00", DayOfMonth: "09", Year: "2018", Weekday: "Sun", …}
            // GoogleVenueInfomationRating: null
            // VenueCapacityString: "18,043"
            // HasGeneralAdmissionTickets: false
            // HasSeatedTickets: false
            // CheapestInCountryContent: null
            // SnapshotMetrics: null
            // OnSaleSinceMessage: null
            // FriendlyEventCountdownMessage:
          key={event.EventId}
        />
      )
    })
  }
}

export default View 