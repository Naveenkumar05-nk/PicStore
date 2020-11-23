import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

//   To get the url back once the upload of image is done 
  const [url, setUrl] = useState(null);

  useEffect(() => {

    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on('state_changed', (snap) => {
        // Formula to calculate the upload percentage
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);

    }, (err) => {
        setError(err);
    

        // It will run once the upload of file is complete 
    }, async() =>{
        const url = await storageRef.getDownloadURL();

        // To create the url and entry in the firebase database with the timestamp
        const createdAt = timestamp();
        await collectionRef.add({ url, createdAt });
        setUrl(url);
    })
  },[file])


  return { progress, url, error }

}


export default useStorage;
