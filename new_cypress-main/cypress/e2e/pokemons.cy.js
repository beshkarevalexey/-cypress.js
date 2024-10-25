describe('Покемоны', function () {

    it('Основной тест', function () {
        cy.visit('https://pokemonbattle.ru/login'); // зашел на сайт
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // ввел лог
        cy.get('#password').type('USER_PASWORD'); // ввел пасс
        cy.get('.auth__button').click(); // нажал "войти"
        cy.get('.header__container > .header__id').click(); // нажал на личный кабинет тренера
        cy.get('[href="/shop"]').click(); // нажал на смену аватара
        cy.get('.available > button').first().click({ force: true }); // выбор аватара
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // ввел номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // вводим срок действия карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // вводим cvv-код карты
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Savva Dorogomilov'); // вводим имя владельца карты
        cy.get('.pay-btn').click(); // нажимаем кнопку "оплатить"
        cy.get('#cardnumber').type('56456'); // вводим смс-код подтверждения
        cy.get('.payment__submit-button').click(); // нажимаем "отправить"
    })

})