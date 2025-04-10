async function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    let responseDiv = document.getElementById("response");

    // Hiển thị câu hỏi của người dùng
    responseDiv.innerHTML = `Bạn hỏi: ${userInput}`;

    const apiKey = "YOUR_COHERE_API_KEY";  // Thay "YOUR_COHERE_API_KEY" bằng API key của bạn

    const response = await fetch('https://api.cohere.ai/v1/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: userInput,
            max_tokens: 100  // Số token tối đa cho câu trả lời
        })
    });

    if (response.ok) {
        const data = await response.json();
        responseDiv.innerHTML += `<br><strong>AI trả lời:</strong> ${data.generations[0].text}`;
    } else {
        responseDiv.innerHTML += "<br><strong>Error:</strong> Không thể kết nối tới API.";
    }
}
