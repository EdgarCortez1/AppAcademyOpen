function mysteryScoping1() {
    var x = 'out of block';
    if (true){
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

// in block
// in block

function mysteryScoping2() {
    const x = 'out of block';
    if (true){
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}

// in block
// out of block

function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
        var x = 'in block';  
        console.log(x);
    }
    console.log(x);
}

// You can't re-declare a const variable with a var

function mysteryScoping4() {
    let x = 'out of block';
    if (true){
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
}

// in block
// out of block

function mysteryScoping5() {
    let x = 'out of block';
    if (true){
        let x = 'in block';
        console.log(x);
    }
    let x = 'out of block again';
    console.log(x);
}

// you can't re-declare a let variable


mysteryScoping1();
mysteryScoping2();
mysteryScoping3();
mysteryScoping4();
mysteryScoping5();