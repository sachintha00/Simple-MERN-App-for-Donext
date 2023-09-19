import React, { useState } from 'react';
import Button from '@mui/material/Button';

function FileInput({ field, form }) {
    const [filePreview, setFilePreview] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.currentTarget.files[0];
        form.setFieldValue(field.name, selectedFile);

        // Create a preview URL for the selected file
        if (selectedFile) {
            const previewURL = URL.createObjectURL(selectedFile);
            setFilePreview(previewURL);
        } else {
            setFilePreview(null);
        }
    };

    return (
        <>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="file-upload"
                type="file"
                onChange={handleFileChange}
            />
            <label htmlFor="file-upload">
                <Button variant="contained" component="span">
                    Upload File
                </Button>
            </label>
            {filePreview && (
                <img
                    src={filePreview}
                    alt="File Preview"
                    style={{ maxWidth: '100%', marginTop: '10px' }}
                />
            )}
        </>
    );
}

export default FileInput;
