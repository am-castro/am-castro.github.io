$(document).ready(
    function getRepositories() {
        var url = `https://api.github.com/users/am-castro/repos`;
        jQuery.ajax({
            url: url,
            type: "GET",
            dataType: 'text',
            success: function(returnjson) {
                repositories = JSON.parse(returnjson);
                changeRepos(repositories);
                loading();
            },
            error: function() {
                setBg();
                loading();
            }
        });
    }
);
function loading(){

    document.getElementById("main").style.display = "block";
    document.getElementById('main').click();
    setTimeout(()=>{
        document.getElementById("spinner").style.display = "none";
        sound(4);
    },1000)
}
function formatDate(number){
    if(number<10){
        return '0'+number;
    }else{
        return number;
    }
}
function changeRepos(repositories){
    for(let i=0; i<repositories.length; i++){
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
        </div>`;
    }

    loading();
}