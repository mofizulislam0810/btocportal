// const baseURL='http://52.221.202.198:83/';
const baseURL='http://localhost:7236/';
const baseApiURL = baseURL+ 'api/';
const tokenData = JSON.parse(sessionStorage.getItem('token'));
let headerToken = { headers: { Authorization: 'Bearer ' + tokenData?.token } };
export const apiEndPoints = {
  headerToken:headerToken,
  register: baseApiURL + 'user/B2CRegister',
  login: baseApiURL + 'user/b2clogin',
  currentUserInfo : baseApiURL+'user/GetCurrentUser',
  weatherList: baseURL + 'weatherforecast',
  userList: baseApiURL + 'user',
  searchFlight: baseApiURL + 'Search',
  bookFlight: baseApiURL + 'Book',
  ticketingFlight: baseApiURL + 'Ticket',
  priceCheck: baseApiURL + 'RePrice',
  bookingLog: baseApiURL + 'BookB2C/BookingLog',
  paymentCheckout:baseApiURL+'BookB2C/Checkout',
  getTicketingList : baseApiURL+'ReportB2C/AirTicketingWeb',
  getTicketingDetails : baseApiURL + 'ReportB2C/AirTicketingDetails',
  passengerListByIds: baseApiURL + 'report/PassengerListByIds',
  gatewayCharge: baseApiURL + 'paymentgateway/gatewaycharges',
  externalUser : baseApiURL + "User/B2CExternalLogin",
  packageQuery: baseApiURL + 'PackageQuery',
  paymentLog: baseApiURL + 'B2CPaymentLog/Checkout',
  getTicketPending: baseApiURL + 'ReportB2C/AirTicketingPending',
  passengerupload : baseApiURL + 'AgentInfo/passengerupload',
  paymentCheckoutBkash : baseApiURL + 'B2CPaymentLog/CheckoutBkash',
  paymentCheckoutConfirmationBkash : baseApiURL + 'B2CPaymentLog/CheckoutConfirmationBkash',
  bookCheckoutBkash : baseApiURL + 'BookB2C/CheckoutBkash',
  bookCheckoutConfirmationBkash : baseApiURL + 'BookB2C/CheckoutConfirmationBkash',
};