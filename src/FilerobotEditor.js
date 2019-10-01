import React,{useState} from 'react';
import FilerobotImageEditor from 'filerobot-image-editor';
import picSrc from './seater.jpg';


const FileRobotEditor = ()=> {
    const src = picSrc;
    const [show, toggle] = useState(false);
    const config = {
        reduceBeforeEdit: {
            mode: 'manual',
            widthLimit: 150,
            heightLimit: 200
          },
          isLowQualityPreview: true
    }    

    console.log(config);
    return (
        <>
        <div className='container'>

        </div>
        <img src={src} onClick={()=> toggle(true)} alt='Upload ' />
        <FilerobotImageEditor 
            show={show}
            isLowQualityPreview = {true}
            src={src}
            config = {config}
            onClose={()=> toggle(false)}
        
        />
        </>
    )
}


export default FileRobotEditor;
