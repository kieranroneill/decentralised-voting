import { expect } from 'chai';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { assert, match, stub } from 'sinon';

configure({ adapter: new Adapter() });

// Helpers.
import { createDom } from './helpers';

const { window } = createDom();

// General globals.
global.assert = assert;
global.expect = expect;
global.match = match;
global.mount = mount;
global.shallow = shallow;
global.stub = stub;

// Client globals.
global.document = window.document;
global.navigator = { userAgent: 'node.js', appName: 'Netscape', language: 'en' };
global.window = window;
