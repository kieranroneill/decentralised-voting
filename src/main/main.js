import electron from 'electron';
import { join } from 'path';

// Utilities.
import { createWindow, onActivate, onAllWindowsClosed } from './utilities/SystemUtil';

const app = electron.app;
const publicPath = join(__dirname, '..', 'renderer');
let mainWindow = null;

app.on('activate', () => onActivate(mainWindow));

app.on('ready', () => mainWindow = createWindow(electron, publicPath));

app.on('window-all-closed', () => onAllWindowsClosed(electron));
