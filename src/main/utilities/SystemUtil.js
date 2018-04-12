import { platform } from 'os';
import { resolve } from 'path';
import { format } from 'url';

// Config.
import defaults from '../../common/defaults';

/**
 * Should create a new window object using the web page stored in public.
 * @param electron an instance of electron.
 * @param publicPath [optional] the path to the index.html Defaults to "__dirname".
 */
export function createWindow(electron, publicPath = __dirname) {
    let mainWindow = new electron.BrowserWindow({
        height: defaults.window.height,
        width: defaults.window.width
    });

    mainWindow.loadURL(format({
        pathname: resolve(publicPath, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', () => mainWindow = null);

    return mainWindow;
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
 * @param electron an Electron instance.
 */
export function onAllWindowsClosed(electron) {
    if (platform() !== 'darwin') {
        electron.app.quit();
    }
}
