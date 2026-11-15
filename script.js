// НОМЕР WHATSAPP
const whatsappNumber = "77020748711";

// Фильтрация каталога
const filterButtons = document.querySelectorAll(".filter");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Убираем активное состояние у всех кнопок
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Активируем выбранную кнопку
        button.classList.add("active");

        const category = button.dataset.category;

        // Показываем нужные товары
        productCards.forEach(card => {
            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });
});

// Заказ через WhatsApp
const orderButtons = document.querySelectorAll(".order-button");

orderButtons.forEach(button => {
    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = button.dataset.price;

        const message =
            `Здравствуйте! Хочу заказать букет ${name}. Цена: ${price}. Подскажите, пожалуйста, по поводу заказа.`;

        const whatsappLink =
           `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappLink, "_blank");
    });
});