import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { FaFileUpload } from 'react-icons/fa';


const Drag = () => {
  const [cleanedData, setCleanedData] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (cleanedData) {
      downloadExcel();
    }
  }, [cleanedData]);

  const handleDrop = async (event) => {
    event.preventDefault();

    const files = event.dataTransfer.files;

    for (const file of files) {
      const extension = file.name.split('.').pop().toLowerCase();

      if (extension === 'xlsx' || extension === 'csv' || extension === 'xls') {
        // Handle Excel files
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1, dateNF: 'yyyy-mm-dd HH:mm:ss' });
          console.log('OLD Data:', rawData);
          // Clean the data
          const cleanedData = cleanData(rawData);
          setCleanedData(cleanedData);

          console.log('Cleaned Data:', cleanedData);
        };
        reader.readAsArrayBuffer(file);
      } else {
        console.log('Unsupported file format. Please drop an Excel file.');
      }
    }
  };

  // Function to clean the data
  const cleanData = (rawData) => {
    const cleanedData = [];
    const workerScans = {};

    for (const row of rawData) {
      const workerId = row[1]; // Assuming the worker ID is in the 2nd column
      const date = row[0].split(' ')[0]; // Extracting date from the timestamp

      if (!workerScans[workerId]) {
        workerScans[workerId] = {};
      }

      if (!workerScans[workerId][date]) {
        // First scan of the day
        workerScans[workerId][date] = [row]; // Use an array to store multiple scans on the same day
      } else {
        // Add additional scans of the day
        workerScans[workerId][date].push(row);
      }
    }

    // Convert the workerScans object into an array, keeping only the first and last scan of each day
    for (const workerId in workerScans) {
      for (const date in workerScans[workerId]) {
        const scansOfDay = workerScans[workerId][date];
        if (scansOfDay.length > 1) {
          // If there are multiple scans on the same day, keep only the first and last
          cleanedData.push(scansOfDay[0], scansOfDay[scansOfDay.length - 1]);
        } else {
          // If there is only one scan on the day, keep it
          cleanedData.push(scansOfDay[0]);
        }
      }
    }

    console.log(cleanedData);
    return cleanedData;
  };

// Function to download the cleaned data as an Excel file
const downloadExcel = () => {
  const ws = XLSX.utils.json_to_sheet(cleanedData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Cleaned Data');
  if(inputValue === '')
  {
    const blob =XLSX.writeFile(wb, `result.xlsx`);
  }
  else{
    const blob =XLSX.writeFile(wb, `${inputValue}.xlsx`);
  }
  


  // Use XLSX.write to generate a blob
  //const blob = XLSX.write(wb, { bookType: 'xlsx', mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
/*
  // Create a Blob object and initiate the download
  const blobObject = new Blob([blob], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url = URL.createObjectURL(blobObject);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'cleaned_data.xlsx';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a); a
  URL.revokeObjectURL(url);*/
};


  return (
    <div className="flex flex-col  items-center h-screen bg-gray-800">
      <input
            type="text"
            value={inputValue}  // Bind input value to state variable
            onChange={handleChange}  // Call handleChange function when input changes
            placeholder="File Name"
            className='p-4 bg-gray-800 text-white mb-10 mt-36 rounded-3xl text-center w-72 border-[2px] border-blue-500 '
          />
      <div className="bg-gray-800 p-8 w-[65%] h-[55%] border-[8px] border-dashed border-blue-500  rounded-lg shadow-md flex justify-center items-center"
           onDragOver={(event) => event.preventDefault()}
           onDrop={handleDrop}
      >
          
          <div className='rounded-full bg-white border-gray-200 border-2'>
            <FaFileUpload className='mb-6 text-blue-400' size={150} />
          </div>
          <h1 className='text-2xl md:text-5xl text-blue-400 font-bold'>
            Drag and Drop Files Here (.xslx  .xls  .csv)
          </h1>       
      </div>
      
    </div>
  );
};

export default Drag;
