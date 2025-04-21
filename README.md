# 🌦️ Workers App Project

Visualization of workers. Classic ABM.
the idea of this project is to practice the whole development of an application, it is simple. the aim is to segregate functionality by means of two profiles (administrator and User). And the idea is to practice design patterns: Factory, Repository, DTO and UnitOfWork.
---

## 📅 Changelog

- **2025-03-01**: Initial upload — Backend / Frontend / Database. Add login component.
- **2025-03-02**: Front End: Improvement of the look & feel of the page, English translation and visualisation improvements.
- **2025-03-14**: Back End/Front End/Databases: Corrected database table names in plural, added HashPassword class and cleaned up frontEnd code.
- **2025-03-21**: Back End/Front End/Databases: Complete app update, use of EF, add Category entity, improve login module.

---

## 🎯 Objective

To practice with:
- **.NET (C#)** and **SQL (Oracle DB)**
- **Angular (TypeScript)**
- **Design Patterns**
- **Onion Architecture**

---

## 🚀 Features

### 🔧 Backend
- Follows **Onion Architecture**
- Implements several **Design Patterns**:
  - Repository Pattern
  - Factory
  - Unit of Work
  - Base Entity
  - Data Transfer Object (DTO)

- **Key Libraries**:
  - Encryption:
    - `BCrypt.Net-Next`
    - `System.Security.Cryptography` (AES-256 encryption)
  - Logging:
    - `Serilog`
    - `Serilog.Extensions.Logging`
    - `Serilog.Sinks.File`
  - ORM:
    - `Microsoft.EntityFrameworkCore` for SQL Server Express integration
    - `Microsoft.EntityFrameworkCore.Design` for SQL Server Express integration
    - `Microsoft.EntityFrameworkCore.SqlServer` for SQL Server Express integration

---

### 💻 Frontend

- Built with **Angular 18.2.12**
- Uses Angular Material for modal/popup support:
  - `@angular/material: 18.2.14`
  - `@angular/animations: 18.2.13`
  - `@angular/cdk: 18.2.14`
- Modular project structure

---

### 🗄️ Database

- Written in **SQL Server DB (via SQL Server Management)**
- Uses **SQL Server Express**
- Includes:
  - **DDL scripts** for table creation
  - **DML scripts** for sample data insertion

---

## 🧪 Installation

### ✅ Prerequisites

Ensure the following are installed on your system:

- [.NET SDK 9.0.200](https://dotnet.microsoft.com/)
- [SQL Server Management](https://learn.microsoft.com/en-us/ssms/download-sql-server-management-studio-ssms)
- [Node.js + npm](https://nodejs.org/) (for frontend)

---

### 🔧 Setup Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/waltermillan/Workers.git
    ```

2. Follow the video guides for full setup:
    - [1st Version Setup](xxxx)

3. Complete the remaining setup steps as described in the project documentation.

---

## 📄 License

**Free and open-source**
