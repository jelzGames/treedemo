start = () => {
    let ul = document.createElement("ul"); 
    let newNode = "Nodi 1";

    let li = createNextNode(newNode);
    ul.appendChild(li);
    document.body.appendChild(ul);
}

findNode = (level) => {
    let ul = document.getElementById(level);
    let numElements = ul.childElementCount - 1;
    let newLevel = numElements + 1;
    let newNode = level + "." + newLevel;

    let li = createNextNode(newNode);
    ul.insertBefore(li, ul.childNodes[numElements]);
   
    return false;
}

createNextNode = (newNode) => {
    let li = document.createElement("li"); 
    let span = document.createElement("span");
    span.innerText = newNode;
    
    let ulNewNode = document.createElement("ul"); 
    ulNewNode.id = newNode;

    let liAdd = document.createElement("li"); 
    let a = document.createElement("a"); 
    a.href = "";
    a.onclick = () => findNode(newNode);
    a.innerText = "[ Lisää ]";

    liAdd.appendChild(a);
    ulNewNode.appendChild(liAdd);
    li.appendChild(span);
    li.appendChild(ulNewNode);
   
    return li;
}