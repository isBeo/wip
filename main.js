console.clear();







const toggle =
    document.querySelector('.toggle');

const menu = document.querySelector('#menu');

console.log(menu);

toggle.addEventListener('click', (e) => {
     const nav =
        e.target.parentElement
            .parentElement.nextElementSibling

    nav.classList.toggle('active')



    nav.classList.contains('active') ?
        document.querySelector('.mobile').style.display = 'flex' :
        document.querySelector('.mobile').style.display = 'none';

    console.log(
        (
            e.target.parentElement.parentElement.nextElementSibling
        )


        // 'hello'



    );

    // console.log(toggle);
})






