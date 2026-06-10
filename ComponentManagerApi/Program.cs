using Microsoft.EntityFrameworkCore;
using ComponentManagerApi.Data;
using ComponentManagerApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy
            .WithOrigins(
                "http://localhost:3000",
                "http://localhost:5173"
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddControllers();

// Tell the app to use AppDbContext and connect to PostgreSQL
// builder.Services.AddDbContext<AppDbContext>(options =>
//     options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// --- THE NEW AI SERVICE REGISTRATION ---
// Register the HTTP Client specifically for our Groq Service
builder.Services.AddHttpClient<GroqAiGenerationService>();
// Tell the app to use the Groq service whenever IAiGenerationService is requested
builder.Services.AddScoped<IAiGenerationService, GroqAiGenerationService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowFrontend");

// Map your custom controller endpoints
app.MapControllers();

app.Run();