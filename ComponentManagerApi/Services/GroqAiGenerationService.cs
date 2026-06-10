using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace ComponentManagerApi.Services
{
    public class GroqAiGenerationService : IAiGenerationService
    {
        private readonly HttpClient _httpClient;
        private readonly string _apiKey;

        public GroqAiGenerationService(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _apiKey = configuration["Groq:ApiKey"] ?? throw new InvalidOperationException("Groq API key is missing.");
        }

        public async Task<string> GenerateReactCodeAsync(string description)
        {
            var requestBody = new
            {
                // Using Llama 3.1 8B, which is incredibly fast and free on Groq
                model = "llama-3.1-8b-instant", 
                messages = new[]
                {
                    new {
                        role = "system",
                        content = @"
                        You are a React component generator.
                        Rules:
                        1. Return ONLY React TSX code.
                        2. Do NOT use markdown.
                        3. Do NOT use triple backticks.
                        4. Do NOT explain anything.
                        5. Do NOT include usage examples.
                        6. Output must start directly with import or export.
                        7. Use React + Tailwind CSS.
                        8. Produce production-ready code only."
                    },
                    new { role = "user", content = $"Generate a React component for: {description}" }
                },
                temperature = 0.2
            };

            var jsonContent = new StringContent(JsonSerializer.Serialize(requestBody), Encoding.UTF8, "application/json");
            
            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _apiKey);

            // Groq's OpenAI-compatible endpoint
            var response = await _httpClient.PostAsync("https://api.groq.com/openai/v1/chat/completions", jsonContent);

            if (!response.IsSuccessStatusCode)
            {
                var error = await response.Content.ReadAsStringAsync();
                throw new HttpRequestException($"Groq API Call Failed: {error}");
            }

            var responseString = await response.Content.ReadAsStringAsync();
            using var jsonDocument = JsonDocument.Parse(responseString);
            
            // Extracting the message content using the same JSON path
            var generatedText = jsonDocument.RootElement
                .GetProperty("choices")[0]
                .GetProperty("message")
                .GetProperty("content")
                .GetString();

            generatedText = generatedText?
                .Replace("```tsx", "")
                .Replace("```jsx", "")
                .Replace("```typescript", "")
                .Replace("typescript", "")
                .Replace("```", "")
                .Trim();

            return generatedText ?? "Code generation failed.";
        }
    }
}