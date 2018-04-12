import electron from 'electron';
import { join } from 'path';
import { Application } from 'spectron';

describe('main/main', () =>  {
    const scope = {
        app: null
    };

    beforeEach(async () => {
        scope.app = new Application({
            path: electron,
            args: [join(__dirname, '..', '..', 'build', 'main', 'main.js')]
        });

        await scope.app.start();
    });

    afterEach(async () => {
        if (scope.app && scope.app.isRunning()) {
            await scope.app.stop();
        }
    });

    describe('when the app starts', () => {
        it('should show an initial window', async () => {
            const count = await scope.app.client.getWindowCount();

            expect(count).to.equal(1);
        });
    });
});
