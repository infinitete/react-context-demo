import { createContext } from 'react';

const change = (color: string) => color;

export default createContext({color: 'dark', change});
