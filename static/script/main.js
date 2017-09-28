var accordion = document.getElementsByClassName("section-heading");

var obj = {
    "blocks": [
        {
            "heading": "Section 1",
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis! Rem maiores reprehenderit animi aliquam inventore vel adipisci delectus itaque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis!"
        },
        {
            "heading": "Section 2",
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis! Rem maiores reprehenderit animi aliquam inventore vel adipisci delectus itaque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis! Rem maiores reprehenderit animi aliquam inventore vel adipisci delectus itaque!"
        },
        {
            "heading": "Section 3",
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        }
    ]
};


obj.blocks.forEach(function(item){

    var strVar="";
    strVar += "<section class=\"accordion\">";
    strVar += "        <h3 class=\"section-heading\">";
    strVar +=             item.heading;
    strVar += "            <img src=\"http:\/\/www.freeiconspng.com\/uploads\/white-down-arrow-png-2.png\" alt=\"Image result for arrow svg\" width=\"30\" height=\"30\">";
    strVar += "        <\/h3>";
    strVar += "        <p>";
    strVar +=             item.content;
    strVar += "        <\/p>";
    strVar += "    <\/section>";

    document.getElementById("container").innerHTML += (strVar);

});


for (var i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function () {
        this.parentNode.classList.toggle('clicked');
    }
};
