import { stub } from 'sinon';

function App() {
    this.on = stub();
    this.quit = stub();
}

function BrowserWindow() {
    this.loadURL = stub();
    this.on = stub();
}

export default class Electron {
    constructor() {
        this.app = new App();
        this.BrowserWindow = BrowserWindow;
    }
}
