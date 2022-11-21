
import { USER_STATUS } from '../../../../../../commom/constants/userStatus'
import { USER_TYPES } from '../../../../../../commom/constants/userTypes'


export const userStatusCount = (data) => {
   let adminArr = data.filter(e => e.userTypes === USER_TYPES.ADMIN)
   let engineerArr = data.filter(e => e.userTypes === USER_TYPES.ENGINEER)
   let customerArr = data.filter(e => e.userTypes === USER_TYPES.CUSTOMER)

   let adminCount = {
      Approved: 0,
      Pending: 0,
      Rejected: 0,
   };
   let engineerCount = {
      Approved: 0,
      Pending: 0,
      Rejected: 0,
   };
   let customerCount = {
      Approved: 0,
      Pending: 0,
      Rejected: 0,
   };
   adminArr.forEach(user => {
      const { userStatus = "" } = user;

      if (userStatus === USER_STATUS.APPROVED) {
         adminCount.Approved++
      }
      else if (userStatus === USER_STATUS.PENDING) {
         adminCount.Pending++
      }
      else if (userStatus === USER_STATUS.REJECTED) {
         adminCount.Rejected++
      }
   })
   engineerArr.forEach(user => {
      const { userStatus = "" } = user;

      if (userStatus === USER_STATUS.APPROVED) {
         engineerCount.Approved++
      }
      else if (userStatus === USER_STATUS.PENDING) {
         engineerCount.Pending++
      }
      else if (userStatus === USER_STATUS.REJECTED) {
         engineerCount.Rejected++
      }
   })
   customerArr.forEach(user => {
      const { userStatus = "" } = user;

      if (userStatus === USER_STATUS.APPROVED) {
         customerCount.Approved++
      }
      else if (userStatus === USER_STATUS.PENDING) {
         customerCount.Pending++
      }
      else if (userStatus === USER_STATUS.REJECTED) {
         customerCount.Rejected++
      }
   })

   return ({ adminCount, engineerCount, customerCount })
}