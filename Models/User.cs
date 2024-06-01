using Microsoft.AspNetCore.Identity;

namespace UsersManagementSystem.Models;

public class User
{
    public int Id { get; set; }
    public string FullName { get; set; }
    public string Email { get; set; }
    public string Job { get; set; }
}
