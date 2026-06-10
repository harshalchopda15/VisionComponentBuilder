namespace ComponentManagerApi.Services
{
    public class MockAiGenerationService : IAiGenerationService
    {
        public async Task<string> GenerateReactCodeAsync(string description)
        {
            // Simulate the delay of calling a real LLM like Claude or OpenAI (2 seconds)
            await Task.Delay(2000);

            // A very basic simulation of AI generation based on keywords
            if (description.ToLower().Contains("button"))
            {
                return "export default function GeneratedButton() { return <button className='bg-blue-500 text-white p-2 rounded'>Click Me</button>; }";
            }
            if (description.ToLower().Contains("nav"))
            {
                return "export default function NavBar() { return <nav className='flex justify-between p-4 bg-gray-800 text-white'><div>Logo</div><div>Links</div></nav>; }";
            }

            return "export default function GenericComponent() { return <div>Generated based on: " + description + "</div>; }";
        }
    }
}