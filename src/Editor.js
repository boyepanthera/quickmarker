import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.min.css';
import './Editor.css';

// use Register plugin to configure other plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageEdit);

const Editor = ()=> {
    return(
        <FilePond 
        className='Editor mx-auto' 
        allowImageEdit= {true}
        imageEditIcon='<svg></svg>'
        imagePreviewMarkupShow={true} 
        imagePreviewHeight={1000} width={1200} 
        allowMultiple={true} maxFiles={12}
        />
    )
}

export default Editor