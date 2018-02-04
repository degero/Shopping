using System;
using System.Collections.Generic;
using System.Text;

namespace Shopping.Business.DTO
{
    /// <summary>
    /// Represents an item in a shopping list
    /// </summary>
    public class ShoppingItem
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
