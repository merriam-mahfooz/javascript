const logs = [
  { id: 1, success: true },
  { id: 2, success: false },
  { id: 3, success: true },
  { id: 4, success: false },
  { id: 5, success: true },
];
const lastSuccessLog = logs.findLast((log) => log.success === true);
console.log("Last Successful Log: ", lastSuccessLog);
