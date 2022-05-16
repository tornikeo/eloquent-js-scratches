addEventListener('message', e => {
    let k = 0;
    for(let i = 0; i < 1000000000; i++) {k++;}
    console.log(k);
    postMessage(e.data * e.data)
})