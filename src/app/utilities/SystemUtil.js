import { BrowserWindow } from 'electron';
import { resolve } from 'path';
import { format } from 'url';

/**
 * Should create a new window object using the web page stored in public.
 * @param mainWindow the main window object.
 * @param publicPath [optional] the path to the index.html Defaults to "__dirname".
 */
export function createWindow(mainWindow, publicPath = __dirname) {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadURL(format({
        pathname: resolve(publicPath, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', () => mainWindow = null);
}

/**
 * Called when app is activated from a minimized state.
 * @param mainWindow the main window object.
 */
export function onActivate(mainWindow) {
    if (mainWindow === null) {
        createWindow(mainWindow);
    }
}

/**
 * Called when all windows have been closed.
 * @param app the Electron instance.
 */
export function onAllWindowsClosed(app) {
    if (process.platform !== 'darwin') {
        app.quit();
    }
}
