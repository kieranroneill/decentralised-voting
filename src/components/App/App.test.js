import Vue from 'vue';

// Component.
import App from './App';

describe('App', () => {
    const scope = {
        vm: null
    };

    beforeEach(() => {
        scope.vm = new Vue(App);
    });

    afterEach(() => {
        scope.vm =  null;
    });

    describe('when component is created', () => {
        it('should have the correct data', () => {
            const data = App.data();

            expect(data).to.have.property('message');
            expect(data.message).to.be.null;
        });
    });

    describe('when the component mounts', () => {
        it('should update the message', () => {
            scope.vm.$mount();

            expect(scope.vm.message).to.be.a('string');
        });
    });
});
