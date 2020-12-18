const ForgetfulTraveller = require('./src/forgetful-traveller');

test("test1", () => {
    expect(ForgetfulTraveller([
        ["MNL", "TAG"],
        ["CEB", "TAC"],
        ["TAG", "CEB"],
        ["TAC", "BOR"],
      ])).toBe("MNL, TAG, CEB, TAC, BOR");
});

test("test2", () => {
    expect(ForgetfulTraveller([
        ["Chicago", "Winnipeg"],
        ["Halifax", "Montreal"],
        ["Montreal", "Toronto"],
        ["Toronto", "Chicago"],
        ["Winnipeg", "Seattle"],
    ])).toBe("Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle");
});

test("test3", () => {
    expect(ForgetfulTraveller([
        ["USA","BRA"], // 1
        ["JPN","PHL"], // 4
        ["BRA","UAE"], // 2
        ["UAE","JPN"], // 3
      ])).toBe("USA, BRA, UAE, JPN, PHL");
});

test("test4", () => {
    expect(ForgetfulTraveller([
        ["O","U"],
        ["F","M"],
        ["Z","Q"],
        ["X","A"],
        ["W","B"],
        ["E","W"],
        ["B","X"],
        ["A","Z"],
        ["Q","F"],
        ["M","O"],
        ["U","Y"],
      ])).toBe("E, W, B, X, A, Z, Q, F, M, O, U, Y");
});

test("test5", () => {
    expect(ForgetfulTraveller([
        ["USA","UAE"],
        ["JPN","PHL"],
        ["PHL","UAE"],
        ["UAE","JPN"],
      ])).toBe("USA, UAE, JPN, PHL, UAE");
});

test("test5", () => {
    expect(ForgetfulTraveller([
        ["Hawaii","Russia"],
        ["France","Denmark"],
        ["Honduras","Timor-Leste"],
        ["Poland","Kazakhstan"],
        ["Finland","Venezuela"],
        ["Tajikistan","Finland"],
        ["Venezuela","Poland"],
        ["Kazakhstan","Honduras"],
        ["Timor-Leste","France"],
        ["Denmark","Hawaii"],
        ["Russia","Turkey"],
      ])).toBe("Tajikistan, Finland, Venezuela, Poland, Kazakhstan, Honduras, Timor-Leste, France, Denmark, Hawaii, Russia, Turkey");
});
