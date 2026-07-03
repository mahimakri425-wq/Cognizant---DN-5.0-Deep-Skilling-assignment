USE CognizantDB;
GO


-- Drop Existing Procedures (if they exist)

IF OBJECT_ID('sp_InsertEmployee', 'P') IS NOT NULL
    DROP PROCEDURE sp_InsertEmployee;
GO

IF OBJECT_ID('sp_GetEmployeesByDepartment', 'P') IS NOT NULL
    DROP PROCEDURE sp_GetEmployeesByDepartment;
GO

-- Drop Existing Tables (if they exist)

IF OBJECT_ID('Employees', 'U') IS NOT NULL
    DROP TABLE Employees;
GO

IF OBJECT_ID('Departments', 'U') IS NOT NULL
    DROP TABLE Departments;
GO


-- Create Departments Table

CREATE TABLE Departments
(
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);
GO


-- Create Employees Table

CREATE TABLE Employees
(
    EmployeeID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    Salary DECIMAL(10,2),
    JoinDate DATE,
    FOREIGN KEY (DepartmentID)
    REFERENCES Departments(DepartmentID)
);
GO


-- Insert Sample Data into Departments

INSERT INTO Departments
VALUES
(1,'HR'),
(2,'Finance'),
(3,'IT'),
(4,'Marketing');
GO


-- Insert Sample Data into Employees

INSERT INTO Employees
(FirstName, LastName, DepartmentID, Salary, JoinDate)
VALUES
('John','Doe',1,5000.00,'2020-01-15'),
('Jane','Smith',2,6000.00,'2019-03-22'),
('Michael','Johnson',3,7000.00,'2018-07-30'),
('Emily','Davis',4,5500.00,'2021-11-05');
GO

-- Display Sample Data

SELECT * FROM Departments;
SELECT * FROM Employees;
GO

-- Stored Procedure:
-- Get Employees By Department

CREATE PROCEDURE sp_GetEmployeesByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT *
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
GO


-- Test Procedure

EXEC sp_GetEmployeesByDepartment 3;
GO


-- Stored Procedure:
-- Insert Employee

CREATE PROCEDURE sp_InsertEmployee
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50),
    @DepartmentID INT,
    @Salary DECIMAL(10,2),
    @JoinDate DATE
AS
BEGIN
    INSERT INTO Employees
    (
        FirstName,
        LastName,
        DepartmentID,
        Salary,
        JoinDate
    )
    VALUES
    (
        @FirstName,
        @LastName,
        @DepartmentID,
        @Salary,
        @JoinDate
    );
END;
GO


-- Test Insert Procedure

EXEC sp_InsertEmployee
    'Robert',
    'Brown',
    3,
    7500.00,
    '2022-05-10';
GO


-- Verify Final Output

SELECT * FROM Employees;
GO