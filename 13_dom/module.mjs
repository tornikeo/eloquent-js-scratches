

export function func() {
    console.log('You import module.mjs');
}
// console.log( Node.ELEMENT_NODE );
// // console.log(document.documentElement);  
// console.log(document.body.nodeType);

// console.log(document.body.nodeType === Node.ELEMENT_NODE)

// console.log(document.body.childNodes);

// console.log(document.body.childNodes[0].nextSibling.parentNode);

function talksAbout(node, word) {
    if (node.nodeType == Node.ELEMENT_NODE) {
        for (const child of node.childNodes) {
            if (talksAbout(child, word)) {
                return true;
            }
        }
        return false;
    } else if (node.nodeType == Node.TEXT_NODE) {
        return node.nodeValue.indexOf(word) > -1;
    }
}

// console.log(talksAbout(document.body, "book"));
// console.log(talksAbout(document.body, "dragons"));

// let link = document.body.getElementsByTagName('a')[0]
// console.log(link.href);