document.addEventListener('DOMContentLoaded', () => {
    const signatureForm = document.getElementById('signature-form');
    const signaturePreview = document.getElementById('signature-preview');
    const signatureHistory = document.getElementById('signature-history');

    signatureForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const position = document.getElementById('position').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        const signature = generateSignature(name, position, phone, email);
        displaySignature(signature);
        saveSignatureToHistory(signature);
    });

    function generateSignature(name, position, phone, email) {
        return `
            <div class="signature">
                <p><strong>${name}</strong></p>
                <p>${position}</p>
                <p>${phone}</p>
                <p><a href="mailto:${email}">${email}</a></p>
            </div>
        `;
    }

    function displaySignature(signature) {
        signaturePreview.innerHTML = signature;
    }

    function saveSignatureToHistory(signature) {
        const historyItem = document.createElement('div');
        historyItem.innerHTML = signature;
        signatureHistory.appendChild(historyItem);
    }

    const campos = ['nome', 'cargo', 'telefone1', 'telefone2', 'email', 'endereco', 'site'];
    campos.forEach(campo => {
      document.getElementById(campo).addEventListener('input', function() {
        // ...
      });
    });
});

<script src="js/main.js"></script>