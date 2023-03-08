import { contextBridge } from 'electron';
import dataContext from './dataContext';

contextBridge.exposeInMainWorld('api', {
    dataContext: dataContext,
});