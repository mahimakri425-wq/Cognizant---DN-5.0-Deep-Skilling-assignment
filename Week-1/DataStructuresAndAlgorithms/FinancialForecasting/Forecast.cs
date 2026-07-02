using System;

namespace FinancialForecasting
{
    class Forecast
    {
        public static double PredictFutureValue(double currentValue, double growthRate, int years)
        {
            // Base Case
            if (years == 0)
                return currentValue;

            // Recursive Call
            return PredictFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
        }
    }
}
