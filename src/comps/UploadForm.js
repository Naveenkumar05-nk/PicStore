import React, { useState }from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);

    // To store the state of the error generated uploading the incorrect file type
    const [error, setError] = useState(null);

    // Different types of files allowed for users to upload
    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    const changeHandler = (e) =>{
        // Converts the uploaded file into a javascript object kinda form 
        let selected = e.target.files[0]
        

        // To check the file type uploaded and to handle the change in state of the file
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            // To avoid the stay of error msg if the image uploaded is of correct format
            setError("")
        } else{
            setFile(null);   
            setError("Please select an image file (png/jpeg/jpg)");
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>

            {/* To show the output either error or correct upload of the file */}
            <div className="output">
               { error && <div className="error">{ error }</div>}
               { file && <div>{ file.name }</div>}
               { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
};

export default UploadForm;
