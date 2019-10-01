import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import React from 'react';
import cloudinary from 'cloudinary-core';

const uploader =  ()=> {
    const [files, setFiles] = useState(null);
    const [inputs, setInputs]= useState({});

    const handleFiles = (event)=> {
        setFiles(files = event.target.files);
    }

    const handleSubmit= (event)=> {
        event.preventDefault();
        console.log(event.target);
    }

    const handleChange = (event) => {
        event.persist();
        setInputs( inputs => (
            {...inputs, [event.target.name] :event.target.value})        
        ) 
    }

    return (
        <form onSubmit={handleSubmit}>
            <>
                <div>
                    <input name='watermarkContent' type='text' onChange={handleChange} />
                </div>
                <div>
                    <input name='attachedFiles'  type='file' onChange={handleFiles} />
                </div>
                <button>Submit</button>
            </>
        </form>
    )
}

export default Uploader