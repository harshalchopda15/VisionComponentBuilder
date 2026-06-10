using Microsoft.AspNetCore.Mvc;
using ComponentManagerApi.Models;
using ComponentManagerApi.Services;

namespace ComponentManagerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComponentsController : ControllerBase
    {
        private readonly IAiGenerationService _aiService;

        public ComponentsController(
            IAiGenerationService aiService)
        {
            _aiService = aiService;
        }

        // POST: api/components/generate
        [HttpPost("generate")]
        public async Task<IActionResult> GenerateCode(
            [FromBody] GenerateRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Prompt))
            {
                return BadRequest(new
                {
                    message = "Prompt is required."
                });
            }

            try
            {
                var generatedCode =
                    await _aiService.GenerateReactCodeAsync(
                        request.Prompt
                    );

                return Ok(new
                {
                    code = generatedCode
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    message = "Code generation failed.",
                    error = ex.Message
                });
            }
        }
    }
}