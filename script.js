document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('.responsive-table');
    const rows = table.querySelectorAll('td');

    rows.forEach(row => {
        const imgCell = row.querySelector('td img');
        const imgId = imgCell.getAttribute('data-id');

        // Ver Detalle ve Comprar butonlarını oluşturma
        const detailButton = document.createElement('button');
        detailButton.innerText = 'Ver Detalle';
        detailButton.setAttribute('data-action', 'detail');
        detailButton.setAttribute('data-id', imgId);
        

        const buyButton = document.createElement('button');
        buyButton.innerText = 'Comprar';
        buyButton.setAttribute('data-action', 'buy');
        buyButton.setAttribute('data-id', imgId);

        // Butonları hücrelere ekleme
        const buttonCell = document.createElement('td');
        buttonCell.appendChild(detailButton);
        buttonCell.appendChild(buyButton);

        // İlk satırdaki son hücreye butonları ekleyin
        row.appendChild(buttonCell);
    });

    // Butonlara tıklama event'lerini ekleme
    table.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const action = event.target.getAttribute('data-action');
            const imgId = event.target.getAttribute('data-id');

            if (action === 'detail') {
                // Ver Detalle butonuna tıklandığında yapılacak işlemler
                alert(`Detalle del producto con ID: ${imgId}`);
            } else if (action === 'buy') {
                // Comprar butonuna tıklandığında yapılacak işlemler
                alert(`Compra del producto con ID: ${imgId}`);
            }
        }
    });
});
    
    

