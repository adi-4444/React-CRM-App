


export const userStatusCount = (data) => {
   let adminArr = data.filter(e => e.userTypes === "ADMIN")
   let engineerArr = data.filter(e => e.userTypes === "ENGINEER")
   let customerArr = data.filter(e => e.userTypes === "CUSTOMER")

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

      if (userStatus === "APPROVED") {
         adminCount.Approved++
      }
      else if (userStatus === "PENDING") {
         adminCount.Pending++
      }
      else if (userStatus === "REJECTED") {
         adminCount.Rejected++
      }
   })
   engineerArr.forEach(user => {
      const { userStatus = "" } = user;

      if (userStatus === "APPROVED") {
         engineerCount.Approved++
      }
      else if (userStatus === "PENDING") {
         engineerCount.Pending++
      }
      else if (userStatus === "REJECTED") {
         engineerCount.Rejected++
      }
   })
   customerArr.forEach(user => {
      const { userStatus = "" } = user;

      if (userStatus === "APPROVED") {
         customerCount.Approved++
      }
      else if (userStatus === "PENDING") {
         customerCount.Pending++
      }
      else if (userStatus === "REJECTED") {
         customerCount.Rejected++
      }
   })

   return ({ adminCount, engineerCount, customerCount })
}