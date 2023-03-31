using System.ComponentModel.DataAnnotations;

namespace RestaurantTemplateAPI.Models
{
    public class MenuItem
    {
        [Key]
        public int MenuItemId { get; set; }
        [Required]
        public int? MenuCategoryId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public decimal? Price { get; set; }
        public string? Allergy { get; set; }
        public Boolean Vegetarian { get; set; } = false;
        public Boolean GlutenFree { get; set; } = false;
        public Boolean Active { get; set; } = true;
        public Boolean Featured { get; set; } = false;
        public string? ImagePath { get; set; }
    }
}
