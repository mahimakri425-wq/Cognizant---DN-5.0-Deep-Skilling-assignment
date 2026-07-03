USE CognizantDB;
GO

-- Create Products Table
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10,2)
);

-- Insert Sample Data
INSERT INTO Products VALUES
(1, 'Laptop A', 'Electronics', 70000),
(2, 'Laptop B', 'Electronics', 85000),
(3, 'Laptop C', 'Electronics', 85000),
(4, 'Mobile A', 'Electronics', 40000),
(5, 'Chair A', 'Furniture', 5000),
(6, 'Chair B', 'Furniture', 6000),
(7, 'Table A', 'Furniture', 10000),
(8, 'Table B', 'Furniture', 10000),
(9, 'Sofa', 'Furniture', 25000);

-- Display All Products
SELECT * FROM Products;

-- ROW_NUMBER()
SELECT
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS RowNumber
FROM Products;

-- RANK()
SELECT
    ProductName,
    Category,
    Price,
    RANK() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS RankNumber
FROM Products;

-- DENSE_RANK()
SELECT
    ProductName,
    Category,
    Price,
    DENSE_RANK() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS DenseRank
FROM Products;

-- Top 3 Products Using ROW_NUMBER()
SELECT *
FROM (
    SELECT
        ProductName,
        Category,
        Price,
        ROW_NUMBER() OVER (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS RowNumber
    FROM Products
) AS RankedProducts
WHERE RowNumber <= 3;

-- Top 3 Products Using RANK()
SELECT *
FROM (
    SELECT
        ProductName,
        Category,
        Price,
        RANK() OVER (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS RankNumber
    FROM Products
) AS RankedProducts
WHERE RankNumber <= 3;

-- Top 3 Products Using DENSE_RANK()
SELECT *
FROM (
    SELECT
        ProductName,
        Category,
        Price,
        DENSE_RANK() OVER (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS DenseRank
    FROM Products
) AS RankedProducts
WHERE DenseRank <= 3;