$(document).ready(
    function getRepositories() {
        var url = `https://api.github.com/users/am-castro/repos`;
        jQuery.ajax({
            url: url,
            type: "GET",
            dataType: 'text',
            success: function(returnjson) {
                repositories = JSON.parse(returnjson);
                changeRepos(repositories.sort());
            },
            error: function() {
                loading();
            }
        });
    }
);
function loading(){

    document.getElementById("main").style.display = "block";
    setTimeout(()=>{
        document.getElementById("spinner").style.display = "none";
    },1000);
}

function formatDate(number){
    if(number<10){
        return '0'+number;
    }else{
        return number;
    }
}
function changeRepos(repositories){
    for(let i=repositories.length-1; i>=0; i--){
        createdDate = new Date(repositories[i].created_at);
        // modifiedDate = new Date(repositories[i].created_at);
        dateFormat = (formatDate(createdDate.getDate().toString()) + "/" + (formatDate(createdDate.getMonth()+1).toString()) + "/" + createdDate.getFullYear());
        document.getElementById('card').innerHTML += `<div class='card'>
            <div class='card-header'>
                <div>
                    <div class='card-title'>${ repositories[i].name } </div>
                    <div class='card-subtitle'> Created at: ${ dateFormat }</div>
                </div>
                <a href='${repositories[i].html_url}' class='card-btn'>Go to page</a>
            </div>
            <div class='card-content'>
                <img class='card-image' src='https://raw.githubusercontent.com/am-castro/${repositories[i].name}/master/${repositories[i].name}_logo.png'
            </div>
        </div>`;
    }

    loading();
}