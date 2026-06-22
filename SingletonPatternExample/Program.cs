using System;

namespace SingletonPatternExample
{
    class Program
    {
        static void Main(string[] args)
        {
            // Get first instance
            Logger logger1 = Logger.GetInstance();
            logger1.Log("First log message");

            // Get second instance
            Logger logger2 = Logger.GetInstance();
            logger2.Log("Second log message");

            // Check if both references point to same object
            if (logger1 == logger2)
            {
                Console.WriteLine("Only one Logger instance exists.");
            }
            else
            {
                Console.WriteLine("Multiple Logger instances exist.");
            }
        }
    }
}