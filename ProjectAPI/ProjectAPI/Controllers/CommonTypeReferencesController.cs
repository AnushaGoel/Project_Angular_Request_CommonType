using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectAPI.Context;
using ProjectAPI.Model;

namespace ProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommonTypeReferencesController : ControllerBase
    {
        private readonly NSTDbContext _context;

        public CommonTypeReferencesController(NSTDbContext context)
        {
            _context = context;
        }

        // GET: api/CommonTypeReferences
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CommonTypeReference>>> GetCommonTypes()
        {
          if (_context.CommonTypes == null)
          {
              return NotFound();
          }
            return await _context.CommonTypes.ToListAsync();
        }

        // GET: api/CommonTypeReferences/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CommonTypeReference>> GetCommonTypeReference(int id)
        {
          if (_context.CommonTypes == null)
          {
              return NotFound();
          }
            var commonTypeReference = await _context.CommonTypes.FindAsync(id);

            if (commonTypeReference == null)
            {
                return NotFound();
            }

            return commonTypeReference;
        }

        // PUT: api/CommonTypeReferences/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCommonTypeReference(int id, CommonTypeReference commonTypeReference)
        {
            if (id != commonTypeReference.Id)
            {
                return BadRequest();
            }

            _context.Entry(commonTypeReference).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommonTypeReferenceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CommonTypeReferences
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CommonTypeReference>> PostCommonTypeReference(CommonTypeReference commonTypeReference)
        {
          if (_context.CommonTypes == null)
          {
              return Problem("Entity set 'NSTDbContext.CommonTypes'  is null.");
          }
            _context.CommonTypes.Add(commonTypeReference);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCommonTypeReference", new { id = commonTypeReference.Id }, commonTypeReference);
        }

        // DELETE: api/CommonTypeReferences/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCommonTypeReference(int id)
        {
            if (_context.CommonTypes == null)
            {
                return NotFound();
            }
            var commonTypeReference = await _context.CommonTypes.FindAsync(id);
            if (commonTypeReference == null)
            {
                return NotFound();
            }

            _context.CommonTypes.Remove(commonTypeReference);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CommonTypeReferenceExists(int id)
        {
            return (_context.CommonTypes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
