$(function() {
    initializeData();

    function initializeData() {
        let api = new Api();
        api.ajax("api/requests/TeaRequest.php", "get").then(result => {
            let rows = [];
            result.map(x => {
                result.push(`
                    <div class="product-container">
                        <img src="${x.imageUrl}" class="max-width-300" />
                    </div>  
                `)
            });

            $("#tea-menu").append(rows);
        })
        .catch(error => {

        });
    }
})