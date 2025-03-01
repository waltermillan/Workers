USE [WorkersDb]

GO
IF OBJECT_ID('[dbo].[Categoty]', 'U') IS NOT NULL
	DROP TABLE [dbo].[Categoty]
GO
IF OBJECT_ID('[dbo].[Worker]', 'U') IS NOT NULL
	DROP TABLE [dbo].[Worker]
GO

/****** Object:  Table [dbo].[Categoty]    Script Date: 5/1/2025 19:18:40 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Categoty](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NULL,
 CONSTRAINT [PK_Categoty] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

--Table Worker

USE [WorkersDb]
GO

/****** Object:  Table [dbo].[Worker]    Script Date: 6/1/2025 16:20:23 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Worker](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NULL,
	[SurName] [varchar](50) NULL,
	[Age] [int] NULL,
	[CategoryId] [int] NULL,
	[Seniority] [int] NULL,
	[Salary] [decimal](9, 2) NULL,
	[Gender] [char](1) NULL,
	[DateOfBirth] [datetime] NULL,
 CONSTRAINT [PK_Worker] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Worker]  WITH CHECK ADD  CONSTRAINT [FK_Worker_Category] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Category] ([Id])
GO

ALTER TABLE [dbo].[Worker] CHECK CONSTRAINT [FK_Worker_Category]
GO



