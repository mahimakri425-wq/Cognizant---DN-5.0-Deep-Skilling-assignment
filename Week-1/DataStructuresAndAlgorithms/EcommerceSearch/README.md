# Exercise 2: E-commerce Platform Search Function

## Aim

To implement **Linear Search** and **Binary Search** algorithms in C# for searching products in an e-commerce platform and compare their performance using Big O notation.

---

## 1. Understanding Big O Notation

Big O notation is used to measure the efficiency of an algorithm. It describes how the execution time increases as the input size increases.

Common complexities are:

- **O(1)** – Constant Time
- **O(log n)** – Logarithmic Time
- **O(n)** – Linear Time
- **O(n²)** – Quadratic Time

---

## 2. Best, Average and Worst Case

### Linear Search

- **Best Case:** O(1)
- **Average Case:** O(n)
- **Worst Case:** O(n)

### Binary Search

- **Best Case:** O(1)
- **Average Case:** O(log n)
- **Worst Case:** O(log n)

---

## 3. Product Class

The Product class contains the following attributes:

- ProductId
- ProductName
- Category

---

## 4. Time Complexity Comparison

| Algorithm | Best Case | Average Case | Worst Case |
|-----------|-----------|--------------|------------|
| Linear Search | O(1) | O(n) | O(n) |
| Binary Search | O(1) | O(log n) | O(log n) |

---

## 5. Comparison

| Linear Search | Binary Search |
|---------------|---------------|
| Works on unsorted data | Requires sorted data |
| Easy to implement | Slightly more complex |
| Slower for large datasets | Faster for large datasets |
| Time Complexity: O(n) | Time Complexity: O(log n) |

---

## 6. Conclusion

Linear Search is suitable for small or unsorted datasets. Binary Search is more efficient for large datasets because it has a time complexity of **O(log n)**. Therefore, Binary Search is the preferred algorithm for an e-commerce platform where products are stored in sorted order.

---

## Project Structure

```text
Week-1
└── DataStructuresAndAlgorithms
    └── EcommerceSearch
        ├── Product.cs
        ├── LinearSearch.cs
        ├── BinarySearch.cs
        ├── Program.cs
        ├── README.md
        └── EcommerceSearch.csproj
```