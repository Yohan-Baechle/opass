const pwdGen = {
    range: null,
    displayLength: null,
    numbersBtn: null,
    lowercaseBtn: null,
    uppercaseBtn: null,
    specialCharsBtn: null,
    generateBtn: null,
    passwordInput: null,
    copyIcon: null,
    success: null,
    sunBtn: null,
    moonBtn: null,

    dataNumbers: '0123456789',
    dataLowercase: 'abcdefghijklmnopqrstuvwxyz',
    dataUppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    dataSpecialChars: '$@+-=%&*_#!?,;:()[]{}/~|^',

    init: function() {
        this.range = document.querySelector('.range');
        this.displayLength = document.querySelector('.display-length');
        this.numbersBtn = document.querySelector('.numbers-btn');
        this.lowercaseBtn = document.querySelector('.lowercase-btn');
        this.uppercaseBtn = document.querySelector('.uppercase-btn');
        this.specialCharsBtn = document.querySelector('.special-chars-btn');
        this.generateBtn = document.querySelector('.generate-btn');
        this.passwordInput = document.querySelector('.password-input');
        this.copyIcon = document.querySelector('#copy-icon');
        this.success = document.querySelector('.success');
        this.sunBtn = document.querySelector('#sun-icon');
        this.moonBtn = document.querySelector('#moon-icon');

        this.range.addEventListener('input', (e) => {
            this.updateValue(e.target.value);
        });

        this.generateBtn.addEventListener('click', () => {
            this.generatePassword();
        });

        this.passwordInput.addEventListener('click', () => {
            this.select();
        });

        this.copyIcon.addEventListener('click', () => {
            this.copyToClipboard();
        });

        this.sunBtn.addEventListener('click', () => {
            this.setTheme('light');
        });

        this.moonBtn.addEventListener('click', () => {
            this.setTheme('dark');
        });
    },

    updateValue: function(value) {
        this.displayLength.value = value;
    },

    generatePassword: function() {
        this.success.innerText = ''; 
        this.success.style.display = 'hidden';

        let data = '';
        if (this.numbersBtn.checked) {
            data += this.dataNumbers;
        }
        if (this.lowercaseBtn.checked) {
            data += this.dataLowercase;
        }
        if (this.uppercaseBtn.checked) {
            data += this.dataUppercase;
        }
        if (this.specialCharsBtn.checked) {
            data += this.dataSpecialChars;
        }

        let password = '';
        for (let i = 0; i < this.displayLength.value; i++) {
            const randomIndex = Math.floor(Math.random() * data.length);
            password += data.charAt(randomIndex);
        }

        this.passwordInput.value = password;
    },

    copyToClipboard: async function() {
        this.success.style.visibility = 'hidden'; 

        this.passwordInput.select();

        try {
            await navigator.clipboard.writeText(this.passwordInput.value);
            this.success.textContent = 'copié'; 
            this.success.style.visibility = 'visible'; 
            setTimeout(() => {
                this.success.style.visibility = 'hidden'; 
            }, 5000); 
        } catch (err) {
            this.success.textContent = 'échec';
            this.success.style.visibility = 'visible'; 
            setTimeout(() => {
                this.success.style.visibility = 'hidden'; 
            }, 5000); 
        }

        document.getSelection().removeAllRanges();
    },

    setTheme: function(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    pwdGen.init();
});
