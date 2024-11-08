export interface NavItem {
  href: string;
  key: string;
  text: string;
  icon: string;
}

export interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  cardColor: string;
  titleColor: string;
  descriptionColor: string;
  buttonColor: string;
  buttonTextColor: string;
  buttonLink: string;
}

export interface EmptyStateCardProps {
  emptyImage: string;
  emptyLink: string;
  emptyButton: string;
}


export interface ActivityCardProps {
  cardImage?: string;
  cardTitle: string;
  description: string;
  currency: string;
  price: number;
  averageRatings: number;
  overallRating: number;
}

export interface HotelCardProps {
  cardImage: string;
  cardTitle: string;
  address: string;
  currency: string;
  excludedPrice: number;
  grossPrice: number;
  reviewScore: number;
  reviewCount: number;
  checkInDate: string;
  checkOutDate: string;
}

 export interface Activity {
   id: string;
   name: string;
   primaryPhoto?: {
     small: string;
   };
   shortDescription: string;
   representativePrice: {
     currency: string;
     chargeAmount: number;
   };
   reviewsStats: {
     combinedNumericStats: {
       average: number;
       total: number;
     };
   };
 }


export interface PriceBreakdown {
  strikethroughPrice?: {
    currency: string;
    value: number;
  };
  excludedPrice: {
    currency: string;
    value: number;
  };
  grossPrice: {
    currency: string;
    value: number;
  };
}

export interface Hotel {
  hotel_id: number;
  property: {
    name: string;
    countryCode: string;
    reviewScore: number;
    reviewCount: number;
    photoUrls: string[];
    priceBreakdown: PriceBreakdown;
    checkinDate: string;
    checkoutDate: string;
  };
}

export interface MinPrice {
  currencyCode: string;
  units: string;
  nanos: number;
}

export interface FlightData {
  id: string,
  name: string;
  logoUrl: string;
  iataCode: string;
  count: number;
  minPrice: MinPrice;
}

export interface FlightCardProps {
  cardImage: string;
  cardTitle: string;
  currency: string;
  totalPrice: string;
}
