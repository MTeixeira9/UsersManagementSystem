using Microsoft.AspNetCore.Identity;

namespace ChallengeVisionBox.Models;

public class Person
{
    public int Id { get; set; }
    public string FullName { get; set; }
    public string Email { get; set; }
    public string Job { get; set; }
}
