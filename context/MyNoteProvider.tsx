import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const NoteContext = createContext<any>('');

const MyNoteProvider = ({ children }: any) => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const result = await AsyncStorage.getItem("notes");
    if (result !== null) {
      setNotes(JSON.parse(result))
    }
  }
  useEffect(() => {
    getNotes();
  }, [])
  return (
    <NoteContext.Provider value={{ notes, setNotes, getNotes }}>
      {children}
    </NoteContext.Provider>
  )
}
export const useNotes = () => useContext(NoteContext)
export default MyNoteProvider