INSERT INTO [dbo].[Category]([Name]) VALUES('Human Resources');
INSERT INTO [dbo].[Category]([Name]) VALUES('Finance');
INSERT INTO [dbo].[Category]([Name]) VALUES('Marketing');
INSERT INTO [dbo].[Category]([Name]) VALUES('Sales');
INSERT INTO [dbo].[Category]([Name]) VALUES('IT');
INSERT INTO [dbo].[Category]([Name]) VALUES('Legal');
INSERT INTO [dbo].[Category]([Name]) VALUES('Operations');
INSERT INTO [dbo].[Category]([Name]) VALUES('Customer Service');
INSERT INTO [dbo].[Category]([Name]) VALUES('Engineering');
INSERT INTO [dbo].[Category]([Name]) VALUES('Product Management');
INSERT INTO [dbo].[Category]([Name]) VALUES('Business Development');
INSERT INTO [dbo].[Category]([Name]) VALUES('R&D');
INSERT INTO [dbo].[Category]([Name]) VALUES('Administration');
INSERT INTO [dbo].[Category]([Name]) VALUES('Purchasing');
INSERT INTO [dbo].[Category]([Name]) VALUES('Quality Assurance');
INSERT INTO [dbo].[Category]([Name]) VALUES('Project Management');
INSERT INTO [dbo].[Category]([Name]) VALUES('Training');
INSERT INTO [dbo].[Category]([Name]) VALUES('Supply Chain');
INSERT INTO [dbo].[Category]([Name]) VALUES('Data Analysis');
INSERT INTO [dbo].[Category]([Name]) VALUES('Public Relations');
INSERT INTO [dbo].[Category]([Name]) VALUES('Event Management');
INSERT INTO [dbo].[Category]([Name]) VALUES('Healthcare');
INSERT INTO [dbo].[Category]([Name]) VALUES('Compliance');
INSERT INTO [dbo].[Category]([Name]) VALUES('Logistics');
INSERT INTO [dbo].[Category]([Name]) VALUES('Research');
INSERT INTO [dbo].[Category]([Name]) VALUES('Administration');
INSERT INTO [dbo].[Category]([Name]) VALUES('Technology');
INSERT INTO [dbo].[Category]([Name]) VALUES('Accounting');
INSERT INTO [dbo].[Category]([Name]) VALUES('Internship');
INSERT INTO [dbo].[Category]([Name]) VALUES('Security');

-- Asumiendo que los valores de CategoryId son entre 1 y 30, por ejemplo.
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES ('John', 'Doe', 35, 1, 3, 55000.00, 'M', '1989-05-15');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES ('Jane', 'Smith', 42, 2, 5, 65000.00, 'F', '1981-10-22');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES ('Michael', 'Johnson', 29, 3, 2, 48000.00, 'M', '1995-02-03');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES ('Emily', 'Davis', 50, 4, 4, 72000.00, 'F', '1973-09-09');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('David', 'Williams', 38, 5, 3, 60000.00, 'M', '1986-12-14');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Alice','Johnson',34,1,3,50000.00,'F','1989-02-20');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Bob','Brown',45,2,5,70000.00,'M','1978-07-12');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Charlie','Davis',25,3,2,45000.00,'M','1998-03-15');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Deborah','Miller',36,4,4,60000.00,'F','1987-11-02');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Edward','Wilson',52,5,5,75000.00,'M','1971-06-10');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Frank','Moore',29,1,2,52000.00,'M','1994-01-25');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Grace','Taylor',40,2,4,63000.00,'F','1983-09-30');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Hannah','Anderson',33,3,3,55000.00,'F','1990-08-17');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Ian','Thomas',27,4,2,47000.00,'M','1996-04-22');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Jack','Jackson',39,5,3,58000.00,'M','1984-05-19');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Kathy','White',42,1,4,67000.00,'F','1981-03-09');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Leo','Martin',50,2,5,72000.00,'M','1973-06-25');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Megan','Clark',26,3,1,46000.00,'F','1997-11-05');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Nathan','Rodriguez',34,4,3,54000.00,'M','1989-02-18');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Olivia','Martinez',48,5,4,68000.00,'F','1975-10-30');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Paul','Hernandez',39,1,2,53000.00,'M','1984-01-12');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Quincy','Young',32,2,3,56000.00,'M','1991-07-07');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Rachel','King',35,3,2,49000.00,'F','1988-11-21');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Sam','Wright',41,4,5,73000.00,'M','1982-02-15');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Tina','Lopez',44,5,4,67000.00,'F','1979-12-02');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Uma','Gonzalez',38,1,3,55000.00,'F','1985-08-23');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Victor','Perez',36,2,2,51000.00,'M','1987-11-15');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Wendy','Roberts',47,3,4,64000.00,'F','1976-05-10');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Xander','Scott',29,4,2,46000.00,'M','1994-09-20');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Yara','Adams',32,5,3,51000.00,'F','1991-01-13');
INSERT INTO [dbo].[Worker]([Name],[SurName],[Age],[CategoryId],[Seniority],[Salary],[Gender],[DateOfBirth]) VALUES('Zach','Baker',31,1,1,48000.00,'M','1992-11-05');




