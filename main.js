$(function() {
    var $searchButton = $("button[type=\"submit\"]");
    var $searchField = $("input[type=\"search\"]");

    var url = "https://jobs.github.com/";

    var self = this;

    $searchButton.click(function() {
        console.log(this);
        searchFieldValidation();
        getData();
        });

    function searchFieldValidation(){

    }
    function getData() {
        fetch('url')
            .then(
                function(response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function(data) {
                        console.log(data);
                        debugger;
                    });
                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    }

});