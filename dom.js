/*
#DOM Selection Method:
    getElementById()           ====> element
    getElementsByTagName()     ====> HTMLCollection
    getElementsByClassName()   ====> HTMLCollection
    querySelector()            ====> element
    querySelectorAll()         ====> nodeList

DOM MANIPULATION
    element.innerHTML = mengubah isi element yang sudah diselksi
    element.style<property> 
    element.setAttribute() || getAttribute() || removeAttribute() sesuatu yang menempel pada element html
    element.classList 
        element.classList.add()
        element.classList.remove
        element.classList.toggle()
        element.classList.item()
        element.classList.contains()
        element.classList.replace()

    DOM Manipulation Node: 
        document.createElement()
        document.createTextNode();
        document.appendChild()
        document.insertBefore()
        document.removeChild()
        document.replaceChild()

#Event Handling
*/


// #DOM Selection Method:
//     getElementById()           ====> element
// const h1 = document.getElementById('judul');
// h1.style.backgroundColor='yellow';

// //     getElementsByTagName()     ====> HTMLCollection
// const p = document.getElementsByTagName('p');
// for(let i=0; i<p.length; i++){
//     p[i].style.backgroundColor='royalblue';
// }

//     p[0].style.backgroundColor='royalblue';
// //     getElementsByClassName()   ====> HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.style.backgroundColor='violet';

// //     querySelector()            ====> element
// const li2 = document.querySelector('section#b> ul> li:nth-child(2)');
// li2.style.backgroundColor='yellow';

// //     querySelectorAll()         ====> nodeList
// const p4 = document.querySelectorAll('section#b> p');
// p4[0].style.backgroundColor='violet';

// DOM MANIPULATION
//     element.innerHTML = mengubah isi element yang sudah diselksi
//     element.style<property> 
//     element.setAttribute() || getAttribute() || removeAttribute() sesuatu yang menempel pada element html
//     element.classList 
//         element.classList.add()
//         element.classList.remove
//         element.classList.toggle()
//         element.classList.item()
//         element.classList.contains()
//         element.classList.replace()


// const h1 = document.getElementById('judul');
// const p4 = document.getElementsByTagName('p')[3];
// h1.innerHTML='textnya berubah lagi';
// p4.innerHTML=h1.innerHTML;
// p4.style='background-color: violet; color: white';


// const a = document.getElementsByTagName('a')[0];
// a.setAttribute('title','link ke web unsur');
// a.setAttribute('class', 'link');

// const p = document.getElementsByClassName('p1')[0];

    // DOM Manipulation Node: 
    //     document.createElement()
    //     document.createTextNode();
    //     document.appendChild()
    //     document.insertBefore()
    //     document.removeChild()
    //     document.replaceChild()

 const li = document.createElement('li');
 const textLi = document.createTextNode('list 4');
 li.appendChild(textLi);

 const sectionB = document.getElementById('b');
 const ul = sectionB.getElementsByTagName('ul')[0];
ul.appendChild(li);


