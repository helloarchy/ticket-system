# Ticket System
A ticketing system using microservices.

## Tech Stack
* Typescript
* Node.js
* MongoDB
* SQL
* Docker
* Kubernetes
* Azure
* Stripe

## User Journey
The user can navigate to the home page and log in, or sign up. From there, they can view tickets available
for purchase. By choosing one, they can add it to their basket. From the basket, the ticket can be purchased.
In doing so, a timer will start giving them 15 minutes to complete the purchase, during which time the ticket
is locked preventing price changes, or from being sold to another user. The user can check out and pay
using Stripe integration. Following payment, the user can view their order history.

## Microservices
### Auth
User registration, logging in, signing out.

### Tickets
Creating and editing tickets, and controlling ticket updates.

### Orders
Creating and editing user orders.

### Expiration
Preventing overselling and changing prices on tickets a user has committed to buying, but has yet to 
pay for.

### Payments
Handle all user payments via credit cards and the Stripe API. Cancel orders if payment fails, or complete 
if successful.


