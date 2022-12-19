# rsschool-cv
# Alexey Sidorkin
# My Contact Info:
*  Phone: +375 29 157 25 28
*  E-mail: amidgard@list.ru
*  GitHub: [Frussia122](https://github.com/Frussia122)
*  VK: [byebyekitty1](https://vk.com/byebyekitty1)
# Summary
I had some expirience working on freelance. Worked with a lot of technologies: less/sass, gulp, react, redux and etc. I Had about 7 - 10 works in portfolio. Now im a student of the Gomel state University of Francisk Skorina.
# Skills
* HTML, CSS, JavaScript
* React JS, Redux
* GIT
* Module Bundlers: Gulp, Webpack.
* Figma
# Code Example
```
async function submit() {
let response = await fetch(`https://www.nbrb.by/api/exrates/rates?ondate=${ondate}&periodicity=0`);
    if (response.ok) {
    let json = await response.json();
        let USD = 'USD';
        let EUR = 'EUR';
        let RUB = 'RUB';
        for(var i = 0; i < json.length; i++) { 
            if(json[i].Cur_Abbreviation == USD) {
            curRateUSD = json[i].Cur_OfficialRate;
        }
        if(json[i].Cur_Abbreviation == EUR) {
        curRateEUR = json[i].Cur_OfficialRate;
        }
        if(json[i].Cur_Abbreviation == RUB) {
        curRateRUB = json[i].Cur_OfficialRate;
        }
    }
    return;
    }
        else {
            throw.error('Error');
        }
}
```
# Work experience:
* Freelance 1 year. 

# Education
* Gomel State University of Francisk Skorina
    + Faculty of Fisics And IT
* Epam Course of Frondent Development
* Udemy courses. 
# Languages
* Russian
* English
* Belarussian
