import { TICKET_STATUS } from "../constants/ticketStatus";

export const calculateTickets = (ticketsList = []) => {
   const ticketsCount = {
      open: 0,
      progress: 0,
      closed: 0,
      blocked: 0,
   };

   ticketsList.forEach(ticket => {
      const { status = "" } = ticket;

      if (status === TICKET_STATUS.OPEN) {
         ticketsCount.open++;
      } else if (status === TICKET_STATUS.CLOSED) {
         ticketsCount.closed++;
      } else if (status === TICKET_STATUS.BLOCKED) {
         ticketsCount.blocked++;
      } else {
         ticketsCount.progress++;
      }
   });
   return ticketsCount;
};
