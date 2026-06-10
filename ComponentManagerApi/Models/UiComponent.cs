namespace ComponentManagerApi.Models
{
    public class UiComponent
    {
        // The [Id] property will automatically become our Primary Key in PostgreSQL
        public int Id { get; set; }
        
        public string Name { get; set; } = string.Empty;
        
        public string Description { get; set; } = string.Empty;
        
        public string GeneratedCode { get; set; } = string.Empty;
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}