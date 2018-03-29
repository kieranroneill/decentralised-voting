import { expect } from 'chai';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { assert, match, mock, stub } from 'sinon';

configure({ adapter: new Adapter() });

// General globals.
global.assert = assert;
global.expect = expect;
global.match = match;
global.mock = mock;
global.mount = mount;
global.shallow = shallow;
global.stub = stub;
