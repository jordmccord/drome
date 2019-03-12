const { colors } = require('../lib/colors');

describe('Colors', () => {
    test('can colorize text as red', () => {
        expect(colors.red('test')).toBe('\x1b[31mtest\x1b[0m');
    });
    test('can colorize text as green', () => {
        expect(colors.green('test')).toBe('\x1b[32mtest\x1b[0m');
    });
    test('can colorize text as blue', () => {
        expect(colors.blue('test')).toBe('\x1b[34mtest\x1b[0m');
    });
    test('can colorize text as cyan', () => {
        expect(colors.cyan('test')).toBe('\x1b[36mtest\x1b[0m');
    });
    test('can colorize text as yellow', () => {
        expect(colors.yellow('test')).toBe('\x1b[33mtest\x1b[0m');
    });
    test('can colorize text as white', () => {
        expect(colors.white('test')).toBe('\x1b[37mtest\x1b[0m');
    });
    test('can colorize text as magenta', () => {
        expect(colors.magenta('test')).toBe('\x1b[35mtest\x1b[0m');
    });
});