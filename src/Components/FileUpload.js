import React, { useState } from 'react';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        // Get the selected file from the input field
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {
        if (selectedFile) {
            // You can now handle the file here, for example, send it to a server or process it
            console.log('Uploading file:', selectedFile.name);
            // Reset the selected file after processing
            setSelectedFile(null);
        } else {
            alert('Please select a file to upload.');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FileUpload;
