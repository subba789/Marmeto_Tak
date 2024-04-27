console.log("Connected");

document.querySelector('.number-selector .plus').addEventListener('click', function() {
    document.getElementById('quantity').stepUp();
});

document.querySelector('.number-selector .minus').addEventListener('click', function() {
    document.getElementById('quantity').stepDown();
});

// Add event listener to the color options
const colorOptions = document.querySelectorAll('.color-option');
colorOptions.forEach(option => {
    option.addEventListener('click', function() {
        colorOptions.forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Add event listener to the size radio buttons
const sizeRadios = document.querySelectorAll('input[name="size"]');
sizeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        const selectedSizeLabel = document.querySelector(`label[for="${this.id}"]`).innerText;
        document.getElementById('selectedSize').innerText = selectedSizeLabel;
    });
});

// Add to cart functionality
document.querySelector('.cart .back').addEventListener('click', function() {
    const selectedColor = document.querySelector('.color-option.selected').style.backgroundColor;
    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    const selectedQuantity = document.getElementById('quantity').value;

    const addToCartMessage = `Embrace Sideboard with color ${selectedColor} and size ${selectedSize} added to cart`;
    document.getElementById('addToCartMessage').innerText = addToCartMessage;
});
