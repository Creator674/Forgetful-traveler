function ForgetfulTraveller(routes){
    let current_city;
    routes.forEach(e => {
        let is_unique = true;

        for(let i = 0; i < routes.length; ++i){
            if(e[0] === routes[i][1]){
                is_unique = false;
            }
        }

        if(is_unique){
            current_city = e[0];
        }
    });

    let answer = current_city;

    routes.forEach(e => {
        current_city = GetNextCity(current_city);
        answer = answer + ", " + current_city;
    })

    function GetNextCity(previous_city){
        let next_city;
        routes.forEach(e => {
            if(e[0] === previous_city){
                next_city = e[1];
            }
        })
        return next_city;
    }

    return answer;
}

module.exports = ForgetfulTraveller;