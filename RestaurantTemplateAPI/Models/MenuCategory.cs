using System.ComponentModel.DataAnnotations;

namespace RestaurantTemplateAPI.Models
{
    public class MenuCategory
    {
        [Key]
        public int MenuCategoryId { get; set; }
        [Required]
        public string? MenuCategoryName { get; set;}
        public string? Description { get; set; }
    }
}
