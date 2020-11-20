window.onload = function grabArticles(){
    const articles = document.getElementsByClassName('product-area');
    for(let article of articles){
        const newLink = document.getElementById('links');
        let createLi = document.createElement("li");
        let createA = document.createElement("a");
        let getId = article.getAttribute('id');

        article = article.getAttribute('name');
        createA.setAttribute('href', '#' + getId);
        createA.appendChild(document.createTextNode(article));
        createLi.appendChild(createA);
        newLink.append(createLi);
    }
};