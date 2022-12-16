import axios from 'axios'
const host = `${process.env.REACT_APP_BASE_URL}crm/api/v1`

export const fetchTickets = async () => {
   return await axios.get(`${host}/tickets`, {
      headers: { "x-access-token": localStorage.getItem("token") }
   },
      { userId: localStorage.getItem("userId") });
}
export const createNewTicket = async (data) => {
   return await axios.post(`${host}/tickets/`,
      data, {
      headers: {
         "x-access-token": localStorage.getItem("token")
      },
   })
}
export const updateTicket = async (ticketData, ticketId) => {
   return await axios.put(`${host}/tickets/${ticketId}`,
      ticketData, {
      headers: {
         "x-access-token": localStorage.getItem("token")
      },
   }, {
      ticketId,
   })
}
