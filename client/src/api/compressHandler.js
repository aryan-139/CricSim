export async function handleCompress(formData) {
    try {
      //console.log('Compress button clicked', formData);
      console.log(formData)
      const response = await fetch('http://localhost:3001/api/compress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Response:', data);
        // Assuming the server responds with { parsedData: "..." }
        if (data.parsedData) {
          // Successfully received parsed data, return the parsed data
          return data.parsedData;
        } else {
          // Handle the case where the server response doesn't contain the expected data
          console.error('Error: Invalid Response from the server');
          return null;
        }
      } else {
        console.error('Error:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }
  