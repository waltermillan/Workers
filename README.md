# 👷‍♂️ Workers App Project

A simple worker management app (classic CRUD).

This project was created to practice full-stack application development, with a focus on clean architecture and the use of design patterns. The app includes two user roles: **Administrator** and **User**, and applies patterns such as Factory, Repository, DTO, and Unit of Work.

---

## 📅 Changelog

- **2025-03-01**: Initial upload — Backend / Frontend / Database. Added login component.
- **2025-03-02**: Frontend: UI/UX improvements, English translation, and visualization tweaks.
- **2025-03-14**: Backend/Frontend/Database: Fixed plural table names, added `HashPassword` class, cleaned frontend code.
- **2025-03-21**: Full app update: introduced EF Core, added `Category` entity, enhanced login module.

---

## 🎯 Objective

To gain hands-on experience with:

- **.NET (C#)** and **SQL Server**
- **Angular (TypeScript)**
- **Design Patterns**
- **Onion Architecture**

---

## 🚀 Features

### 🔧 Backend

- Based on **Onion Architecture**
- Implements several **Design Patterns**:
  - Repository Pattern
  - Factory
  - Unit of Work
  - Base Entity
  - Data Transfer Object (DTO)

- **Key Libraries**:
  - **Encryption**:
    - `BCrypt.Net-Next`
    - `System.Security.Cryptography` (AES-256 encryption)
  - **Logging**:
    - `Serilog`
    - `Serilog.Extensions.Logging`
    - `Serilog.Sinks.File`
  - **ORM**:
    - `Microsoft.EntityFrameworkCore` (SQL Server Express)
    - `Microsoft.EntityFrameworkCore.Design`
    - `Microsoft.EntityFrameworkCore.SqlServer`

---

### 💻 Frontend

- Built with **Angular 18.2.12**
- Uses Angular Material for modals and UI components:
  - `@angular/material: 18.2.14`
  - `@angular/animations: 18.2.13`
  - `@angular/cdk: 18.2.14`
- Modular project structure

---

### 🗄️ Database

- Uses **SQL Server Express**
- Managed with **SQL Server Management Studio (SSMS)**
- Includes:
  - **DDL scripts** for table creation
  - **DML scripts** for sample data insertion

---

## 🧪 Installation

### ✅ Prerequisites

Make sure you have the following installed:

- [.NET SDK 9.0.200](https://dotnet.microsoft.com/)
- [SQL Server Management Studio (SSMS)](https://learn.microsoft.com/en-us/ssms/download-sql-server-management-studio-ssms)
- [Node.js + npm](https://nodejs.org/) (for frontend)

---

### 🔧 Setup Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/waltermillan/Workers.git
    ```

2. Follow the video guides for full setup:
    - [Version 1 Setup Guide](xxxx)

3. Complete the remaining setup steps as described in the project documentation.

---

## 📄 License

**Free and open-source**
