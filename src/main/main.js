import { app } from 'electron';
import { join } from 'path';

// Utilities.
import { createWindow, onActivate, onAllWindowsClosed } from './utilities/SystemUtil';

const publicPath = join(__dirname, '..', 'renderer');
let mainWindow = null;

app.on('activate', () => onActivate(mainWindow));

app.on('ready', () => createWindow(mainWindow, publicPath));

app.on('window-all-closed', () => onAllWindowsClosed(app));
