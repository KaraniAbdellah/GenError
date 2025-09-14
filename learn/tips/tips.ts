// NVM and NOde JS
/* 
    * Hello Brother/Sister, *
    Sometime when you working with vite with version X, and Node Js version Y.
    Sometimes X does not match Y (I Am talking about versions)
    So We Need to Upgrade Node Version

    --> That We Need NVM (Node Versiom Manager) is for Node Version

    --> To Install NVM: https://youtu.be/wLPwxaAFrIo?si=CFx7lQ9oQ79aGMwY
    --> Upgrade NodeJs via NVM: https://youtu.be/lI9sehdDyM4?si=TDfXay3JdA9jrDK3
*/

// deffrence between devDependencies and dependcies
/*
    devDependencies: all packages nedded for local development
    dependcies: all packages your app nedded
*/

// Problem in NVM
/*
    NVM doesn’t replace the system’s Node.js globally (NVM is shell-based)
    It only updates Node.js for the current shell session where NVM is initialized.

    RUN: 
        --> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
        --> source ~/.nvm/nvm.sh
        --> nano ~/.bashrc
        --> PASTE THIS INTO ~/.bashrc: 
            export NVM_DIR="$HOME/.nvm"
            [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
            [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
            CTRL + X + Y
        --> source ~/.bashrc
        --> nvm --version
*/
