/**
 * Created by CherylRuo on 3/3/17.
 */
(function() {
    angular
        .module("webapp")
        .controller("UserController", UserController);

    function UserController() {
        var vm = this;
        var letterArr = [];
        var letterInd = [];
        var alphabet = [];
        var charArr = [];
        vm.letters = [];
        vm.res = "";
        vm.index = 0;
        vm.cipherRes = "";

        for (var idx='A'.charCodeAt(0),end='Z'.charCodeAt(0); idx<=end; idx++){
            alphabet.push(String.fromCharCode(idx));
        }
        vm.alphabet = alphabet;

        vm.updateText = updateText;
        function updateText(response) {
            letterArr = [];
            letterInd = [];
            vm.letters = response;
            vm.index = 0;
            charArr = [];
            for(var i=0; i<vm.letters.length; i++) {
                var c = vm.letters.charAt(i);
                var cLowerCase = c.toLowerCase()+"";
                var charCode = cLowerCase.charCodeAt(0)-'a'.charCodeAt(0);
                letterArr.push(c);
                letterInd.push(charCode);
            }
            vm.letterArr = letterArr;
            vm.letterInd = letterInd;

            var num = letterInd[0];
            for(var j=0; j<alphabet.length; j++) {
                var str = alphabet[j].toLowerCase();
                var n = (str.charCodeAt(0) - 97 + num)%26;
                var s = String.fromCharCode(97 + n);
                var charUpperCase = s.toUpperCase();
                charArr.push(charUpperCase);
            }
            vm.charArr = charArr;
        }

        vm.displayChosenLetters = displayChosenLetters;
        function displayChosenLetters(chosenLetter, ind) {
            vm.index = (vm.index + 1) % letterInd.length;
            var highlightInd = letterInd[vm.index];
            var charArr = [];
            vm.cipherRes += vm.charArr[ind];
            for(var j=0; j<alphabet.length; j++) {
                var str = alphabet[j].toLowerCase();
                var n = (str.charCodeAt(0) - 97 + highlightInd)%26;
                var s = String.fromCharCode(97 + n);
                var charUpperCase = s.toUpperCase();
                charArr.push(charUpperCase);
            }
            vm.charArr = charArr;
            vm.chosenLetter = chosenLetter;
            vm.res += vm.chosenLetter;
        }

        vm.clearText = clearText;
        function clearText(response) {
            vm.res = "";
            vm.cipherRes = "";
        }
    }

})();