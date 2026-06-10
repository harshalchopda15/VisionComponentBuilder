namespace ComponentManagerApi.Services
{
    public interface IAiGenerationService
    {
        Task<string> GenerateReactCodeAsync(string description);
    }
}