using System.Threading.Tasks;
using System.Web.Http;
using System.Net.Http;
using OpenAI_API.Completions;
using OpenAI_API;
using System.Linq;

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
            var output = await openai.Completions.CreateCompletionAsync(completion);
            if (output != null)
            {
                foreach (var item in output.Completions)
                {
                    response = item.Text;
                }
                return Ok(response);
                //Pavan
            }
            else
            {
                return BadRequest("Not found");
            }
        }
    }
}
