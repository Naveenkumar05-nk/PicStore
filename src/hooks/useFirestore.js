import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {

  // To retrieve the images from the database docs
  const [docs, setDocs] = useState([]);

  useEffect(() => {

    // A realtime update of the docs,whenever there is a change in DB docs it'll be showed in real time
    const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return { docs };
}

export default useFirestore;