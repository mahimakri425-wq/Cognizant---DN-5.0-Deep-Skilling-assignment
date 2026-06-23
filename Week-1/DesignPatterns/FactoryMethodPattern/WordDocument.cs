using System;

namespace FactoryMethodPattern
{
    public class WordDocument : Document
    {
        public void Open()
        {
            Console.WriteLine("Word Document Opened");
        }
    }
}