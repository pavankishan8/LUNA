using System.Threading.Tasks;
using System.Web.Http;
using System.Net.Http;
using OpenAI_API.Completions;
using OpenAI_API;
using System.Linq;
using System;

namespace OpenAIApp.Controllers
{
    public class LunaGPTController : ApiController
    {
        [HttpGet]
        public async Task<IHttpActionResult> GetData(string request)
        {
            string apiKey = "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";
            string response = "";
            OpenAIAPI openai = new OpenAIAPI(apiKey);
            CompletionRequest completion = new CompletionRequest();
            completion.Prompt = request;
            completion.Model = "text-davinci-003";
            completion.MaxTokens = 4000;
            try
            {
                var output = await openai.Completions.CreateCompletionAsync(completion);
                if (output != null)
                {
                    foreach (var item in output.Completions)
                    {
                        response = item.Text;
                    }
                    return Ok(response);
                }
                else
                {
                    return BadRequest("No output from OpenAI API");
                }
            }
            catch (Exception ex)
            {
                // Log the exception details or print them for debugging
                return InternalServerError(ex);
            }

        }
    }
}
