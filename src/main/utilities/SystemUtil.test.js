import { app } from 'electron';

// Module.
import { onActivate, onAllWindowsClosed } from './SystemUtil';
import * as SystemUtil from './SystemUtil';

describe('app/utilities/SystemUtil', () => {
    const scope = {
        electronAppMock: null,
        mainWindow: null
    };

    beforeEach(() => {
        scope.electronAppMock = mock(app);
    });

    afterEach(() => {
        scope.mainWindow = null;

        scope.electronAppMock.restore();
    });

    describe('createWindow()', () => {

    });

    describe('onActivate()', () => {
        test('should create new window if it is null', () => {
            const createWindowStub = stub(SystemUtil, 'createWindow');

            scope.mainWindow = null;

            onActivate(scope.mainWindow);

            assert.calledWith(createWindowStub, scope.mainWindow);

            createWindowStub.restore();
        });
    });

    describe('onAllWindowsClosed()', () => {
        test('should quit the electron app if it is not macOS', () => {
            process.platform = 'linux';

            onAllWindowsClosed(scope.electronAppMock);

            scope.electronAppMock.expects('quit').never();
        });

        test('should not quit the electron app if it is macOS', () => {
            onAllWindowsClosed(scope.electronAppMock);

            scope.electronAppMock.expects('quit').once();
        });
    });
});
