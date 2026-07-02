using System;

namespace FinancialForecasting
{
    class Program
    {
        static void Main(string[] args)
        {
            double currentValue = 10000;
            double growthRate = 0.10;
            int years = 5;

            double futureValue = Forecast.PredictFutureValue(currentValue, growthRate, years);

            Console.WriteLine("Financial Forecast");
            Console.WriteLine("--------------------");
            Console.WriteLine($"Current Value : {currentValue}");
            Console.WriteLine($"Growth Rate   : {growthRate * 100}%");
            Console.WriteLine($"Years         : {years}");
            Console.WriteLine($"Future Value  : {futureValue:F2}");
        }
    }
}
