function userChoice() {

    let quit = false;
    let balance = 100;

    while (quit === false) {
        let input = prompt('What would you like to do?');

        switch (input) {
            case input = 'b':
                alert(balance.toFixed(2));
                break;
            case input = 'd':
                let depositInput = prompt('How much would you like to depost?');
                balance = balance + Number(depositInput);
                alert(balance.toFixed(2));
                break;
            case input = 'w':
                let withdrawInput = prompt('How much would you like to withdraw?');
                balance = balance - Number(withdrawInput);
                alert(balance.toFixed(2));
                break;
            case input = 'q':
                quit = true;
                break;
        }
    }
}

console.log('Program Ended!')