export const fetchRevenueData = async () => {
    // Fetch revenue data from an API or mock data
    return [
      { month: 'Jan', value: 1000 },
      { month: 'Feb', value: 1200 },
      { month: 'Mar', value: 1100 },
      { month: 'Apr', value: 1300 },
      { month: 'May', value: 1150 },
      { month: 'Jun', value: 1400 },
    ];
  };
  
  export const fetchOrdersData = async () => {
    // Fetch orders data from an API or mock data
    return [
      { month: 'Jan', value: 80 },
      { month: 'Feb', value: 90 },
      { month: 'Mar', value: 85 },
      { month: 'Apr', value: 95 },
      { month: 'May', value: 90 },
      { month: 'Jun', value: 100 },
    ];
  };
  
  export const fetchGridData = async () => {
    // Fetch grid data from an API or mock data
    return [
      { id: 1, customer: 'John Doe', date: '2023-04-01', amount: 50 },
      { id: 2, customer: 'Jane Smith', date: '2023-04-02', amount: 75 },
      { id: 3, customer: 'Bob Johnson', date: '2023-04-03', amount: 100 },
      { id: 4, customer: 'Alice Williams', date: '2023-04-04', amount: 60 },
      { id: 5, customer: 'Tom Davis', date: '2023-04-05', amount: 80 },
      { id: 6, customer: 'Sarah Lee', date: '2023-04-06', amount: 90 },
    ];
  };