class Api {
    ajax = (url, requestType, data) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                type: requestType,
                data: data,
                success: function(data) {
                    resolve(data);
                },
                error: function(error) {
                    reject(error);
                }
            });
        });
    }
}