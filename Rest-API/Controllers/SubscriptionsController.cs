using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rest_API.Models;

namespace Rest_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionsController : ControllerBase
    {
        private readonly SubscriptionContext _context;

        public SubscriptionsController(SubscriptionContext context)
        {
            _context = context;
        }

        // GET: api/Subscriptions
        [HttpGet("GetAllUser")]
        public async Task<ActionResult<IEnumerable<Subscription>>> GetSubscription()
        {
          if (_context.Subscription == null)
          {
              return NotFound();
          }
            return await _context.Subscription.ToListAsync();
        }

        // GET: api/Subscriptions/5
        [HttpGet("GetUserById/{id}")]
        public async Task<ActionResult<Subscription>> GetSubscription(int id)
        {
          if (_context.Subscription == null)
          {
              return NotFound();
          }
            var subscription = await _context.Subscription.FindAsync(id);

            if (subscription == null)
            {
                return NotFound();
            }

            return subscription;
        }

        // PUT: api/Subscriptions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSubscription(int id, Subscription subscription)
        {
            if (id != subscription.Id)
            {
                return BadRequest();
            }

            _context.Entry(subscription).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubscriptionExists(id))
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

        // POST: api/Subscriptions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Subscription>> PostSubscription(Subscription subscription)
        {
          if (_context.Subscription == null)
          {
              return Problem("Entity set 'SubscriptionContext.Subscription'  is null.");
          }
            _context.Subscription.Add(subscription);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSubscription", new { id = subscription.Id }, subscription);
        }

        // DELETE: api/Subscriptions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSubscription(int id)
        {
            if (_context.Subscription == null)
            {
                return NotFound();
            }
            var subscription = await _context.Subscription.FindAsync(id);
            if (subscription == null)
            {
                return NotFound();
            }

            _context.Subscription.Remove(subscription);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SubscriptionExists(int id)
        {
            return (_context.Subscription?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
