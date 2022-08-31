function clearMe() {
    document.querySelector(".output-value").value = "";
}

function deleteMe() {
    const a = document.querySelector(".output-value").value;

    const b = a.split('');           // convert string to array
    const c = b.reverse();          // reverse this array
    const d = c.slice(1);          // slice the first element of this reversed array
    const e = d.reverse();        // again reversed
    const f = e.join('');        //  finally convert array to string 

    document.querySelector(".output-value").value = f;
}

function calculator(myValue) {
    document.querySelector(".output-value").value += myValue;
}

function answer() {
    const a = document.querySelector(".output-value").value;
    const b = eval(a);
    document.querySelector(".output-value").value = b;
}