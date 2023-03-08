function rpsGame() {
    // Prompting for user's choice
        while (true) {
            user_choice = prompt("Choose between rock, paper and scissors (type 'r', 'p' or 's'): ").toLowerCase()
            if (user_choice !== 'r' && user_choice !== 'p' && user_choice !== 's') {
            console.log('Your entry does not match the choices. Try again.')
        }
        else {
            break
        }
        }
    //Determining computer's choice
        let comp_choice = Math.random()
        if (comp_choice >= 0 && comp_choice <= 0.33) {
            comp_choice = 'r'
        }else if (comp_choice >= 0.34 && comp_choice <= 0.67) {
            comp_choice = 'p'
        }else {
            comp_choice = 's'
        }
    // Determining the winner
        if (user_choice === 'r' && comp_choice === 'r'){
            alert('You both chose rock. No winner.')   
        }else if (user_choice === 'r' && comp_choice === 'p'){
            alert(`Computer wins! Paper covers rock`)
        }else if (user_choice === 'r' && comp_choice === 's'){
            alert('You win! Rock destroys scissors.')
        }else if (user_choice === 'p' && comp_choice === 'p'){
            alert('You both chose paper. No winner.')
        }else if (user_choice === 'p' && comp_choice === 'r'){
            alert('You win! Paper covers rock.')
        } else if (user_choice === 'p' && comp_choice === 's'){
            alert('Computer wins! Scissors cut paper.')
        } else if (user_choice === 's' && comp_choice === 's'){
            alert('You both chose scissors. No winner.')
        } else if (user_choice === 's' && comp_choice === 'r'){
            alert('Computer wins! Rock destroys scissors.')
        } else if (user_choice === 's' && comp_choice === 'p'){
            alert('You win! Scissors cut paper.')
        } 
    }
    rpsGame()