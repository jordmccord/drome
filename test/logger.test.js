const logger = require('../lib/logger');

describe('Logger', () => {
    test('Log data', () => {
        let consoleLogSpy = jest.spyOn(console, 'log');
        logger.log('Test data');
        expect(consoleLogSpy).toHaveBeenCalled();
    });
    test('Log info', () => {
        let consoleLogSpy = jest.spyOn(console, 'log');
        logger.info('Test data');
        expect(consoleLogSpy).toHaveBeenCalled();
    });
    test('Log success', () => {
        let consoleLogSpy = jest.spyOn(console, 'log');
        logger.success('Test data');
        expect(consoleLogSpy).toHaveBeenCalled();
    });
    test('Log warn', () => {
        let consoleLogSpy = jest.spyOn(console, 'log');
        logger.warn('Test data');
        expect(consoleLogSpy).toHaveBeenCalled();
    });
    test('Log error', () => {
        let consoleLogSpy = jest.spyOn(console, 'log');
        logger.error('Test data');
        expect(consoleLogSpy).toHaveBeenCalled();
    });
    test('Log header', () => {
        let consoleLogSpy = jest.spyOn(console, 'log');
        logger.header('Test data');
        expect(consoleLogSpy).toHaveBeenCalled();
    });
    test('Log footer', () => {
        let consoleLogSpy = jest.spyOn(console, 'log');
        logger.footer('Test data');
        expect(consoleLogSpy).toHaveBeenCalled();
    });
});