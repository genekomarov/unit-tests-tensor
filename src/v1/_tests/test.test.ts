import 'mocha';
console.log('file - begin');
describe('describe level 1', () => {
    console.log('describe level 1 - begin');
    describe('describe level 2', () => {
        console.log('describe level 2 - begin');
        it('it 1', () => {
            console.log('it');
        });
        console.log('describe level 2 - middle');
        it('it 2', () => {
            console.log('it');
        });
        console.log('describe level 2 - end');
    });
    console.log('describe level 1 - end');
});
console.log('file - end');