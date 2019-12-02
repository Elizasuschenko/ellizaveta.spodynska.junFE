let formBlock = document.querySelector('.main-form');
formBlock.addEventListener('click', ()=>{
    let buttonList = event.target.closest('[data-nav]');
    if (buttonList){
        let listItem = event.target.closest('[data-nav]');
        listItem.nextElementSibling.hidden = !listItem.nextElementSibling.hidden;
        return true
    }
    if(event.target.closest('.give-navigation-menu-item')){
        let eventBlock = event.target.closest('.give-navigation-menu-item');
        let listItems = event.target.closest('.give-navigation');
        let itemGive = event.target.closest('.give');
        let logoGive = itemGive.querySelector('.pic-logo');
        let contentGive = itemGive.querySelector('.form-item-pretitle');
        contentGive.innerHTML = eventBlock.querySelector('.give-navigation-item-title').innerHTML;
        logoGive.setAttribute('src', eventBlock.querySelector('.give-navigation-item-logo').getAttribute('src'))
        listItems.hidden = true
    }
    if(event.target.closest('[data-radio]')){
        let firstInput = formBlock.querySelector('.give-item');
        let secondInput = formBlock.querySelector('.take-item');
        let elem = event.target.closest('[data-radio]');
        let firstEl = elem.querySelector('.firstCurrency');
        let secEl = elem.querySelector('.secCurrency');
        let firstInputPic = firstInput.querySelector('img');
        let secInputPic = secondInput.querySelector('img');
        let firstInputTitle = firstInput.querySelector('.form-item-pretitle');
        let secInputTitle = secondInput.querySelector('.form-item-pretitle');
        firstInputPic.setAttribute('src', firstEl.getAttribute('src'));
        firstInputTitle.innerHTML =  firstEl.getAttribute('alt');
        secInputTitle.innerHTML =  secEl.getAttribute('alt');
        secInputPic.setAttribute('src', secEl.getAttribute('src'));
    }
    return false
});
let humburger = document.querySelector('.humburger');
humburger.addEventListener('click', ()=>{
    let menuList = document.querySelector('.menu-list')
    menuList.style.display == 'flex' ? menuList.style.display = 'none' : menuList.style.display = 'flex'
})