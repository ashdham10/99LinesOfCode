let friends = ['Jordin', 'Felesha', 'Amanda', 'Britt', 'Mike'];

for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);

    for (var j = 99; j >= 1; j--) {
      
    if(j >= 2, j <= 99) {
        console.log([j] + ' lines of code in the file, ' + [j] +
        ' lines of code; ' + friends[i] + ' takes one out, clears it all out ' 
        + [j] + ' lines of code in the file.');
    } else {
    console.log([j] + ' lines of code in the file, ' + [j] +
    ' lines of code; ' + friends[i] + 
    ' takes one out, clears it all out,no more lines of code in the file.');
    }
}
}