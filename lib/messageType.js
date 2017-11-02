const message = (function() {
    
    const types = {
        message: /message\b/i,
        notification: /notification\b/i
    }
    
    return {
        isUserMessage: (message) => {
            return types.message.test(message.type)
        },
        isNotification: (message) => {
            return types.notification.test(message.type)
        }
    }
})();

module.exports = message;
