import { expect } from 'chai';
import os from 'os';
import { assert, match, mock } from 'sinon';

// Mocks.
import Electron from '../../../test/mocks/electronMock';

// Utilities.
import { createWindow, onAllWindowsClosed } from './SystemUtil';

describe('main/utilities/SystemUtil', () => {
    const scope = {
        electronMock: null,
        osMock: null
    };

    beforeEach(() => {
        scope.electronMock = new Electron();
        scope.osMock = mock(os);
    });

    afterEach(() => {
        scope.electronMock = null;
        scope.osMock.restore();
    });

    describe('createWindow()', () => {
        it('should create a main window', () => {
            const publicPath = '/absolute/path/to/the/where/the/index/is';
            const mainWindow = createWindow(scope.electronMock, publicPath);

            expect(mainWindow).to.be.instanceof(scope.electronMock.BrowserWindow);

            assert.calledWith(mainWindow.loadURL, match(publicPath));
        });

        it('should default to using "__dirname" for the publicPath if it is not defined', () => {
            const mainWindow = createWindow(scope.electronMock);

            expect(mainWindow).to.be.instanceof(scope.electronMock.BrowserWindow);

            assert.calledWith(mainWindow.loadURL, match(__dirname));
        });
    });

    describe('onAllWindowsClosed()', () => {
        it('should quit the electron app if it is not macOS', () => {
            scope.osMock.expects('platform').returns('linux');

            onAllWindowsClosed(scope.electronMock);

            assert.calledOnce(scope.electronMock.app.quit);
        });

        it('should not quit the electron app if it is macOS', () => {
            scope.osMock.expects('platform').returns('darwin');

            onAllWindowsClosed(scope.electronMock);

            assert.notCalled(scope.electronMock.app.quit);
        });
    });
});
