function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve('Data fetched successfully');
        } else {
          reject('Error fetching data');
        }
      }, 2000);
    });
  }
  
  async function getData() {
    try {
      const data = await fetchData(); // Await the Promise
      console.log(data); // Output: Data fetched successfully
    } catch (error) {
      console.error(error);
    }
  }
  
  getData();
  