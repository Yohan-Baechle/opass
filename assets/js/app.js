const pwdGen = {
    range: null,
    displayLength: null,

    init: function() {
        this.range = document.querySelector('.range');
        this.displayLength = document.querySelector('.display-length');

        this.range.addEventListener('input', (e) => {
            this.update(e.target.value);
        });

        this.displayLength.addEventListener('input', (e) => {
            this.update(e.target.value);
        });

    },

    update: function(value) {
        this.range.value = value;
        this.displayLength.value = value;
    },
};

document.addEventListener('DOMContentLoaded', function() {
    pwdGen.init();
});
