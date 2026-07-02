using System;

namespace EcommerceSearch
{
    class Program
    {
        static void Main(string[] args)
        {
            Product[] products =
            {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Mobile", "Electronics"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Fashion")
            };

            Console.WriteLine("Linear Search:");

            Product linearResult = LinearSearch.Search(products, 104);

            if (linearResult != null)
                Console.WriteLine(linearResult);
            else
                Console.WriteLine("Product not found.");

            Console.WriteLine();

            Console.WriteLine("Binary Search:");

            Product binaryResult = BinarySearch.Search(products, 104);

            if (binaryResult != null)
                Console.WriteLine(binaryResult);
            else
                Console.WriteLine("Product not found.");
        }
    }
}
