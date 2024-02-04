document.getElementById('checkButton').addEventListener('click', function() {
    const walletAddress = document.getElementById('walletAddress').value;
    
    // Fetch wallet addresses from wallets.json
    fetch('wallets.json')
        .then(response => response.json())
        .then(data => {
            // Check if walletAddress exists in the list
            if (data.wallets.includes(walletAddress)) {
                document.getElementById('response').innerText = 'Yes';
            } else {
                document.getElementById('response').innerText = 'No';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
