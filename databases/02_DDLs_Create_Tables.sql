USE [WorkersDb]
GO

GO
IF OBJECT_ID('[dbo].[Administrators]', 'U') IS NOT NULL
	DROP TABLE [dbo].[Administrators]
GO
IF OBJECT_ID('[dbo].[Categories]', 'U') IS NOT NULL
	DROP TABLE [dbo].[Categories]
GO
IF OBJECT_ID('[dbo].[Workers]', 'U') IS NOT NULL
	DROP TABLE [dbo].[Workers]
GO

/****** Object:  Table [dbo].[Administrators]    Script Date: 14/3/2025 18:24:41 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Administrators](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[User] [varchar](50) NOT NULL,
	[Password] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Administrator] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[Categories]    Script Date: 14/3/2025 18:25:46 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Categories](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NULL,
 CONSTRAINT [PK_Categoty] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[Workers]    Script Date: 14/3/2025 18:26:12 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Workers](
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

ALTER TABLE [dbo].[Workers]  WITH CHECK ADD  CONSTRAINT [FK_Worker_Category] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([Id])
GO

ALTER TABLE [dbo].[Workers] CHECK CONSTRAINT [FK_Worker_Category]
GO

