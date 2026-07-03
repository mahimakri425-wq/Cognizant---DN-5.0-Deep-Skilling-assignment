USE CognizantDB;
GO


-- Exercise 5: Return Data from a Stored Procedure
-- Goal: Return total number of employees in a department


-- Drop procedure if it already exists
IF OBJECT_ID('sp_GetEmployeeCountByDepartment', 'P') IS NOT NULL
    DROP PROCEDURE sp_GetEmployeeCountByDepartment;
GO

-- Create Stored Procedure

CREATE PROCEDURE sp_GetEmployeeCountByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT
        DepartmentID,
        COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = @DepartmentID
    GROUP BY DepartmentID;
END;
GO


-- Execute Stored Procedure


-- IT Department
EXEC sp_GetEmployeeCountByDepartment 3;
GO

-- HR Department
EXEC sp_GetEmployeeCountByDepartment 1;
GO

-- Finance Department
EXEC sp_GetEmployeeCountByDepartment 2;
GO

-- Marketing Department
EXEC sp_GetEmployeeCountByDepartment 4;
GO

-- Display Employees Table

SELECT * FROM Employees;
GO