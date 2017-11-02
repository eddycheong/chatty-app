const message = (function() {
    
    const types = {
        message: /message\b/i,
        notification: /notification\b/i,
        server: /server/i
    }
    
    return {
        isUserMessage: (message) => {
            return types.message.test(message.type)
        },
        isNotification: (message) => {
            return types.notification.test(message.type)
        },
        isServerStatus: (message) => {
            return types.server.test(message.type)
        }
    }
})();

module.exports = message;
