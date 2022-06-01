using Microsoft.EntityFrameworkCore;

namespace Rest_API.Models
{
    public class SubscriptionContext : DbContext
    {
        public SubscriptionContext(DbContextOptions<SubscriptionContext> options) : base(options)
        {

        }
        public DbSet<Subscription> Subscription { get; set; } = null!;
    }
}
