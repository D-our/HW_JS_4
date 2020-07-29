    const numbers = [];
    const operation = getOperation('What do you want to do? (sum, sub, mult, div)');
    const  amountOfOperands= getOperands('How many operands do you want to enter? (min - 1, max - 7)');




    function getOperands (question) {
        let reply;
            do {
                reply = prompt(question, 1);
            } while ((reply >= 7) || (reply <= 1));

                return reply;
    }


    enterTheNumber('Write a number');

    function enterTheNumber(response) {

        let responseCheck;

        for (let i = 0; i < amountOfOperands; i++){
                do{
                    responseCheck = Number(prompt(response));
                } while (isNaN(responseCheck) || responseCheck === null);
                    numbers.push(responseCheck);
        }

        }



    function getOperation(getOperationQuestion) {

        let answer;

            do {
                answer= prompt(getOperationQuestion);
            } while ((answer !== 'sum') && (answer !== 'sub') && (answer !== 'mult') && (answer !== 'div'));

                return answer;

    }



    calculate(operation, numbers);

    function calculate(operation, numbers) {

        let result;

        switch (operation) {
            case 'sum':
                result= sum(numbers);
                console.log(`${numbers.join('+')} = ${result}`);
                break;
            case 'sub':
                result= sub(numbers);
                console.log(`${numbers.join('-')} = ${result}`);
                break;
            case 'mult':
                result= mult(numbers);
                console.log(`${numbers.join('*')} = ${result}`);
                break;
            case 'div':
                result= div(numbers);
                console.log(`${numbers.join('/')} = ${result}`);
                break;
        }

    }


    function sum(numbers) {

        let result = 0;

        for(let i = 0; i < numbers.length ; i++){

            result = result + numbers[i];
        }

            return result;
    }

    function sub(numbers) {

        let result = 0;

        for(let i = 0; i < numbers.length ; i++){

            result= result - numbers[i];
        }

            return result;
    }


    function mult(numbers) {

        let result = numbers[0];

        for(let i = 1; i < numbers.length ; i++){

            result= result * numbers[i];
        }

            return result;
    }

    function div(numbers) {

        let result = numbers[0];

        for(let i = 1; i < numbers.length ; i++){

            result= result / numbers[i];
        }

            return result;
    }


