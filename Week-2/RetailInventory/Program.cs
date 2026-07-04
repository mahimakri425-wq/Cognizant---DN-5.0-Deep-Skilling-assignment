using RetailInventory.Data;
using RetailInventory.Models;
using Microsoft.EntityFrameworkCore;

using var context = new AppDbContext();

// Lab 4 - Insert Data
var electronics = new Category
{
    Name = "Electronics"
};

var groceries = new Category
{
    Name = "Groceries"
};

await context.Categories.AddRangeAsync(electronics, groceries);

var product1 = new Product
{
    Name = "Laptop",
    Price = 75000,
    Category = electronics
};

var product2 = new Product
{
    Name = "Rice Bag",
    Price = 1200,
    Category = groceries
};

await context.Products.AddRangeAsync(product1, product2);

await context.SaveChangesAsync();

Console.WriteLine("Data Inserted Successfully!");

// =======================
// Lab 5 - Retrieve Data
// =======================

// 1. Retrieve All Products
var products = await context.Products.ToListAsync();

Console.WriteLine("\nAll Products:");
foreach (var p in products)
{
    Console.WriteLine($"{p.Name} - ₹{p.Price}");
}

// 2. Find by ID
var product = await context.Products.FindAsync(1);

Console.WriteLine($"\nFound: {product?.Name}");

// 3. First Product with Price > 5000
var expensive = await context.Products
    .FirstOrDefaultAsync(p => p.Price > 5000);

Console.WriteLine($"Expensive: {expensive?.Name}");