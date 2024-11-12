const data = require("./sbucks.json");
const axios = require("axios");

data.stores.map((store) => {
  console.log(
    `Starbucks ${store.storeNumber}>>${store.address.streetAddressLine1}, ${store.address.city}, NL, ${store.address.postalCode}`
  );
});

axios({
  url: "https://use1-prod-th.rbictg.com/graphql",
  method: "post",
  data: {
    operationName: "GetRestaurants",
    query: `query GetRestaurants($input: RestaurantsInput) {  restaurants(input: $input) {    pageInfo {      hasNextPage      endCursor      __typename    }    totalCount    nodes {      ...RestaurantNodeFragment      __typename    }    __typename  }}fragment RestaurantNodeFragment on RestaurantNode {  _id  storeId  isAvailable  posVendor  chaseMerchantId  curbsideHours {    ...OperatingHoursFragment    __typename  }  deliveryHours {    ...OperatingHoursFragment    __typename  }  diningRoomHours {    ...OperatingHoursFragment    __typename  }  distanceInMiles  drinkStationType  driveThruHours {    ...OperatingHoursFragment    __typename  }  driveThruLaneType  email  environment  franchiseGroupId  franchiseGroupName  frontCounterClosed  hasBreakfast  hasBurgersForBreakfast  hasCatering  hasCurbside  hasDelivery  hasDineIn  hasDriveThru  hasTableService  hasMobileOrdering  hasLateNightMenu  hasParking  hasPlayground  hasTakeOut  hasWifi  hasLoyalty  id  isDarkKitchen  isFavorite  isHalal  isRecent  latitude  longitude  mobileOrderingStatus  name  number  parkingType  phoneNumber  physicalAddress {    address1    address2    city    country    postalCode    stateProvince    stateProvinceShort    __typename  }  playgroundType  pos {    vendor    __typename  }  posRestaurantId  restaurantImage {    asset {      _id      metadata {        lqip        palette {          dominant {            background            foreground            __typename          }          __typename        }        __typename      }      __typename    }    crop {      top      bottom      left      right      __typename    }    hotspot {      height      width      x      y      __typename    }    __typename  }  restaurantPosData {    _id    __typename  }  status  vatNumber  __typename}fragment OperatingHoursFragment on OperatingHours {  friClose  friOpen  monClose  monOpen  satClose  satOpen  sunClose  sunOpen  thrClose  thrOpen  tueClose  tueOpen  wedClose  wedOpen  __typename}`,
    variables: {
      input: {
        coordinates: {
          searchRadius: 25000,
          userLat: 47.4946553,
          userLng: -52.8103455,
        },
        first: 100,
      },
    },
  },
}).then((result) => {
    result.data.data.restaurants.nodes.map((store) => {
        console.log(`Tim's ${store.storeId}>>${store.physicalAddress.address1}, ${store.physicalAddress.city}, ${store.physicalAddress.stateProvinceShort}, ${store.physicalAddress.postalCode}`);
    })
  
});
