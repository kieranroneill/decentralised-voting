import { expect } from 'chai';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Helpers.
import { createDom } from './helpers';

const { window } = createDom();

// General globals.
global.expect = expect;
global.mount = mount;
global.shallow = shallow;

// Client globals.
global.document = window.document;
global.navigator = { userAgent: 'node.js', appName: 'Netscape', language: 'en' };
global.window = window;
