USE [master]
GO
/****** Object:  Database [ManageSkillsV1]    Script Date: 12/24/2019 5:57:49 PM ******/
CREATE DATABASE [ManageSkillsV1]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ManageSkillsV1', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.LPQDEV\MSSQL\DATA\ManageSkillsV1.mdf' , SIZE = 4160KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'ManageSkillsV1_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.LPQDEV\MSSQL\DATA\ManageSkillsV1_log.ldf' , SIZE = 1856KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [ManageSkillsV1] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ManageSkillsV1].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ManageSkillsV1] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET ARITHABORT OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ManageSkillsV1] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ManageSkillsV1] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ManageSkillsV1] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ManageSkillsV1] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [ManageSkillsV1] SET  MULTI_USER 
GO
ALTER DATABASE [ManageSkillsV1] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ManageSkillsV1] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ManageSkillsV1] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ManageSkillsV1] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ManageSkillsV1] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ManageSkillsV1] SET QUERY_STORE = OFF
GO
USE [ManageSkillsV1]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [ManageSkillsV1]
GO
/****** Object:  User [skilldev]    Script Date: 12/24/2019 5:57:49 PM ******/
CREATE USER [skilldev] FOR LOGIN [skilldev] WITH DEFAULT_SCHEMA=[db_owner]
GO
/****** Object:  User [BHAVNACORP\Smewati]    Script Date: 12/24/2019 5:57:49 PM ******/
CREATE USER [BHAVNACORP\Smewati] FOR LOGIN [BHAVNACORP\Smewati] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [BHAVNACORP\Prani]    Script Date: 12/24/2019 5:57:49 PM ******/
CREATE USER [BHAVNACORP\Prani] FOR LOGIN [BHAVNACORP\Prani] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [BHAVNACORP\Jbhardwaj]    Script Date: 12/24/2019 5:57:49 PM ******/
CREATE USER [BHAVNACORP\Jbhardwaj] FOR LOGIN [BHAVNACORP\Jbhardwaj] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [BHAVNACORP\Gkaur]    Script Date: 12/24/2019 5:57:49 PM ******/
CREATE USER [BHAVNACORP\Gkaur] FOR LOGIN [BHAVNACORP\Gkaur] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [skilldev]
GO
ALTER ROLE [db_owner] ADD MEMBER [BHAVNACORP\Smewati]
GO
ALTER ROLE [db_owner] ADD MEMBER [BHAVNACORP\Prani]
GO
ALTER ROLE [db_owner] ADD MEMBER [BHAVNACORP\Jbhardwaj]
GO
ALTER ROLE [db_owner] ADD MEMBER [BHAVNACORP\Gkaur]
GO
/****** Object:  Table [dbo].[auths]    Script Date: 12/24/2019 5:57:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[auths](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NULL,
	[token] [nvarchar](255) NULL,
	[createdAt] [datetimeoffset](7) NULL,
	[updatedAt] [datetimeoffset](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[employee_skills]    Script Date: 12/24/2019 5:57:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[employee_skills](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[employee_id] [int] NOT NULL,
	[skill_id] [int] NOT NULL,
	[skill_version] [nvarchar](255) NULL,
	[exp_in_month] [nvarchar](255) NULL,
	[last_used] [nvarchar](255) NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[ProficiencyID] [int] NULL,
	[CreatedBy] [int] NOT NULL,
	[LastModifiedBy] [int] NULL,
 CONSTRAINT [PK__employee__3213E83F87D6FA11] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeeProjectDetails]    Script Date: 12/24/2019 5:57:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeProjectDetails](
	[EmployeeProjectID] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeID] [int] NOT NULL,
	[ProjectID] [int] NOT NULL,
	[LastModifiedOn] [datetime] NULL,
	[LastModifiedBy] [int] NULL,
	[CreatedOn] [datetime] NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_EmployeeProjectDetails] PRIMARY KEY CLUSTERED 
(
	[EmployeeProjectID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[employees]    Script Date: 12/24/2019 5:57:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[employees](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[first_name] [nvarchar](255) NULL,
	[last_name] [nvarchar](255) NULL,
	[email] [nvarchar](255) NULL,
	[phone] [nvarchar](255) NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[createdBy] [int] NOT NULL,
	[lastModifiedBy] [int] NULL,
	[total_exp_in_month] [int] NULL,
	[relevant_exp_in_month] [int] NULL,
	[designation] [varchar](200) NULL,
	[emp_id] [int] NULL,
 CONSTRAINT [PK__employee__3213E83FC5495D31] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeeSkills]    Script Date: 12/24/2019 5:57:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeSkills](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeId] [int] NOT NULL,
	[SkillName] [nvarchar](500) NULL,
	[TotalExperienceInYears] [decimal](5, 2) NULL,
	[Proficiency] [nvarchar](50) NULL,
	[PriorJoining] [bit] NULL,
	[TechnologyStackId] [int] NULL,
 CONSTRAINT [PK_EmployeeSkills] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[employee-skills]    Script Date: 12/24/2019 5:57:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[employee-skills](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[employee_id] [int] NULL,
	[skill_id] [int] NULL,
	[skill_version] [nvarchar](255) NULL,
	[exp_in_month] [nvarchar](255) NULL,
	[last_used] [nvarchar](255) NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LookUpMaster]    Script Date: 12/24/2019 5:57:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LookUpMaster](
	[LookUpID] [int] IDENTITY(1,1) NOT NULL,
	[Type] [varchar](20) NOT NULL,
	[Value] [varchar](100) NOT NULL,
	[LastModifiedOn] [datetime] NULL,
	[LastModifiedBy] [int] NULL,
	[CreatedOn] [datetime] NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_CodeMaster] PRIMARY KEY CLUSTERED 
(
	[LookUpID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProjectDetails]    Script Date: 12/24/2019 5:57:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProjectDetails](
	[ProjectID] [int] IDENTITY(1,1) NOT NULL,
	[ProjectName] [varchar](200) NOT NULL,
	[LookUpClientID] [int] NOT NULL,
	[LastModifiedOn] [datetime] NULL,
	[LastModifiedBy] [int] NULL,
	[CreatedOn] [datetime] NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_ProjectDetails] PRIMARY KEY CLUSTERED 
(
	[ProjectID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProjectSkillMapping]    Script Date: 12/24/2019 5:57:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProjectSkillMapping](
	[ProjectSkillID] [int] IDENTITY(1,1) NOT NULL,
	[ProjectID] [int] NOT NULL,
	[SkillID] [int] NOT NULL,
	[LookUpProficiencyID] [int] NULL,
	[LastModifiedOn] [datetime] NULL,
	[LastModifiedBy] [int] NULL,
	[CreatedOn] [datetime] NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_ProjectSkillMapping] PRIMARY KEY CLUSTERED 
(
	[ProjectSkillID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SequelizeMeta]    Script Date: 12/24/2019 5:57:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SequelizeMeta](
	[name] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[skills]    Script Date: 12/24/2019 5:57:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[skills](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[skill_name] [nvarchar](255) NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[technology_stacks]    Script Date: 12/24/2019 5:57:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[technology_stacks](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](255) NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TechnologyStacks]    Script Date: 12/24/2019 5:57:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TechnologyStacks](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_TechnologyStacks] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 12/24/2019 5:57:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[employeeId] [int] NULL,
	[first_name] [nvarchar](255) NULL,
	[last_name] [nvarchar](255) NULL,
	[email] [nvarchar](255) NULL,
	[password] [nvarchar](255) NULL,
	[phone] [nvarchar](255) NULL,
	[profile_pic] [nvarchar](255) NULL,
	[user_type] [nvarchar](255) NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NULL,
	[CreatedBy] [int] NOT NULL,
	[ModifiedBy] [int] NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK__users__3213E83F785E187C] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[auths] ON 

INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (5, 3, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJkaGltYW5AYmhhdm5hY29ycC5jb20iLCJpZCI6MywiaWF0IjoxNTY4Nzg3OTEzfQ.IiHEzmC_Vz9UHwRyWV8VUdAohtY_2gC4rRsRCr7ifXc', CAST(N'2019-09-18T06:25:13.9980000+00:00' AS DateTimeOffset), CAST(N'2019-09-18T06:25:13.9980000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (11, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU2ODc5NDU3NH0.viG0qBz33t28HNch4TqadYHbAAQVSOYHabAgUPW0Obk', CAST(N'2019-09-18T08:16:14.8070000+00:00' AS DateTimeOffset), CAST(N'2019-09-18T08:16:14.8070000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (12, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU2ODc5OTI2MH0.aESdwo0kHAEFiU8T8zRMYuK_cebgCxPOu0CJRRvpC74', CAST(N'2019-09-18T09:34:20.4670000+00:00' AS DateTimeOffset), CAST(N'2019-09-18T09:34:20.4670000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (13, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU2ODgwMDk4MH0.p1KC_z0h72zfwTXIsH7-wTKLz540NewvYu2ugnJiXcQ', CAST(N'2019-09-18T10:03:00.5850000+00:00' AS DateTimeOffset), CAST(N'2019-09-18T10:03:00.5850000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (15, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU2ODgwMTE3OH0.F4XwfgjPkKThm3oR2p9D_NWerTWaAFpWpBekoNdqZ58', CAST(N'2019-09-18T10:06:18.8660000+00:00' AS DateTimeOffset), CAST(N'2019-09-18T10:06:18.8660000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (43, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU2ODg4MjIxMH0.bglhlDOcU5N9eZ1D6uQ3QgqtBOIrItPVmC11fx9boUQ', CAST(N'2019-09-19T08:36:50.3040000+00:00' AS DateTimeOffset), CAST(N'2019-09-19T08:36:50.3040000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (44, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU2ODg4MjQ3Nn0.TxbKtqJq6mft6H9YpjD9p9kRGR2GBFgqVigQRXCr77I', CAST(N'2019-09-19T08:41:16.3300000+00:00' AS DateTimeOffset), CAST(N'2019-09-19T08:41:16.3300000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (52, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU2ODg4ODkzMn0.2JW_GSGv1ymMKKBqOC5mKIScWwJazd5PauprKIyh5q4', CAST(N'2019-09-19T10:28:52.1010000+00:00' AS DateTimeOffset), CAST(N'2019-09-19T10:28:52.1010000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (57, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU2ODg5NTI4OX0.73YB-xPyvDHehoUBYnckuyNhd5b7AH-taYz3pur5o08', CAST(N'2019-09-19T12:14:49.8430000+00:00' AS DateTimeOffset), CAST(N'2019-09-19T12:14:49.8430000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (59, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU2ODg5NTk0Nn0.qXdRZIBLX5eBfjrdpKOGprFtx9F8YhQYc7C8tHBghJM', CAST(N'2019-09-19T12:25:46.8430000+00:00' AS DateTimeOffset), CAST(N'2019-09-19T12:25:46.8430000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (77, 3, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJkaGltYW5AYmhhdm5hY29ycC5jb20iLCJpZCI6MywiaWF0IjoxNTY4OTU2MTczfQ.cZ16MxQwF76mCQY-11csL9RqYZEADdo3nxFWrHx6-w0', CAST(N'2019-09-20T05:09:33.8830000+00:00' AS DateTimeOffset), CAST(N'2019-09-20T05:09:33.8830000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (101, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU2ODk3MDA0M30.NaYB48sf1cpmPXPOCUWKqE8aitqVOqdA955g34QN5wA', CAST(N'2019-09-20T09:00:43.7240000+00:00' AS DateTimeOffset), CAST(N'2019-09-20T09:00:43.7240000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (102, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU2ODk3MDA0NH0.t6NAPODxOBP8M7-uQunNwNF3kJdaBjMxNn8cNDd3g9M', CAST(N'2019-09-20T09:00:44.7960000+00:00' AS DateTimeOffset), CAST(N'2019-09-20T09:00:44.7960000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (103, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU2ODk3MDA0NX0.7MPi7dP3rEWFCKNiQIZEWLZ2FZPPSUvZF6pB5JEz21A', CAST(N'2019-09-20T09:00:45.2570000+00:00' AS DateTimeOffset), CAST(N'2019-09-20T09:00:45.2570000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (104, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU2ODk3MDA0N30.KPh9bsRtr8Pmt333B265MBzMaeGokt7k5zyAhNOXbp4', CAST(N'2019-09-20T09:00:47.2010000+00:00' AS DateTimeOffset), CAST(N'2019-09-20T09:00:47.2010000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (105, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU2ODk3MDA0OH0.Q1e_m5QQbQGW6kf9nifKKvCyNmCY9B7S5Ayq2ekoQwo', CAST(N'2019-09-20T09:00:48.8990000+00:00' AS DateTimeOffset), CAST(N'2019-09-20T09:00:48.8990000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (154, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU3MDU5OTM0MH0.EGp0wNO72r2maRNax6hTNyqEOjfKHh94aQyo5uaayE4', CAST(N'2019-10-09T05:35:40.5970000+00:00' AS DateTimeOffset), CAST(N'2019-10-09T05:35:40.5970000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (1157, 4, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpiaGFyZHdhakBiaGF2bmFjb3JwLmNvbSIsImlkIjo0LCJpYXQiOjE1NzI5NDU1MzB9.eZjUwaADQBcPGyRFsunoI-DKZWvJtlDuXIGnW--Zk8A', CAST(N'2019-11-05T09:18:50.8820000+00:00' AS DateTimeOffset), CAST(N'2019-11-05T09:18:50.8820000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (1158, 4, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpiaGFyZHdhakBiaGF2bmFjb3JwLmNvbSIsImlkIjo0LCJpYXQiOjE1NzI5NDU4Nzd9._H6_DVHyRr4q6vONmBCEBGcmxfHGsECXVzcXMwTTtPY', CAST(N'2019-11-05T09:24:37.1670000+00:00' AS DateTimeOffset), CAST(N'2019-11-05T09:24:37.1670000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (2154, 2, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im0ua29obGlAYmhhdm5hY29ycC5jb20iLCJpZCI6MiwiaWF0IjoxNTczMTkwNDA3fQ.CddQeetgs-SVqT-2J_vVCb_N6qukw2UHlLiysoELocQ', CAST(N'2019-11-08T05:20:07.3450000+00:00' AS DateTimeOffset), CAST(N'2019-11-08T05:20:07.3450000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (3209, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU3NDg2MjM2M30.V8E5PQ61kXsI-5LSqpGpUrlbLtPtTtRtPh7cIVTBzFI', CAST(N'2019-11-27T13:46:03.5530000+00:00' AS DateTimeOffset), CAST(N'2019-11-27T13:46:03.5530000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (3325, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU3NjA1OTQ4M30.H1n64AgByBj2FW51SvI84Vqx5H3NQqAX8OhpmF3sHx4', CAST(N'2019-12-11T10:18:03.0910000+00:00' AS DateTimeOffset), CAST(N'2019-12-11T10:18:03.0910000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (3326, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU3NjEzMDM4Nn0.ES04qCiOGJYGfqKARW9ZQ-bnc1PhdsyUGtUOhO5IQiY', CAST(N'2019-12-12T05:59:46.6910000+00:00' AS DateTimeOffset), CAST(N'2019-12-12T05:59:46.6910000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (3343, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU3NjEzNDA5M30.V9X_vF7PkCNQlAX1kUr5wxuibgOdGfnmW94lWUKGkm0', CAST(N'2019-12-12T07:01:33.5790000+00:00' AS DateTimeOffset), CAST(N'2019-12-12T07:01:33.5790000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (3355, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU3NjEzNDkwMX0.Tiq1LU3KSI_NypkX3jpcaCKHxD9lxGFlye_69fPHtfw', CAST(N'2019-12-12T07:15:01.9080000+00:00' AS DateTimeOffset), CAST(N'2019-12-12T07:15:01.9080000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (3356, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU3NjEzNDkxN30.9dCm0nfKmWXFBxLCTJQgvrLdCV-hlzVB7oyXpMXtAcA', CAST(N'2019-12-12T07:15:17.6110000+00:00' AS DateTimeOffset), CAST(N'2019-12-12T07:15:17.6110000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (3361, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU3NjE1ODczN30.F_d0pB8RMCmOWh8wLUuno5A27m3q19e55meZG_OIh0E', CAST(N'2019-12-12T13:52:17.3470000+00:00' AS DateTimeOffset), CAST(N'2019-12-12T13:52:17.3470000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (3369, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU3NjIzNjQ2OH0.mStNQdd3I959VSf7qbid3KRiLbJDBQ3apF6kdFF8Wcg', CAST(N'2019-12-13T11:27:48.0370000+00:00' AS DateTimeOffset), CAST(N'2019-12-13T11:27:48.0370000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (3386, 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHlvcG1haWwuY29tIiwiaWQiOjEsImlhdCI6MTU3NjgyMTU2MX0.4PErqRCmL-aiHwz7ljlqtn2xWXkOjPrSqieiEVIi7u8', CAST(N'2019-12-20T05:59:21.0800000+00:00' AS DateTimeOffset), CAST(N'2019-12-20T05:59:21.0800000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (3388, 4, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpiaGFyZHdhakBiaGF2bmFjb3JwLmNvbSIsImlkIjo0LCJpYXQiOjE1NzY4MjIwMDR9.FUDLduI0V3lxOvfmG8YNdfRfVwxttA5ATJJ4_sQyVFQ', CAST(N'2019-12-20T06:06:44.2820000+00:00' AS DateTimeOffset), CAST(N'2019-12-20T06:06:44.2820000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (3395, 3, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJkaGltYW5AYmhhdm5hY29ycC5jb20iLCJpZCI6MywiaWF0IjoxNTc3MDk1MjQ5fQ.pZF6Wr4iy18sCo6EGNUV4VTk2-kEkIQysZSclJhdgJA', CAST(N'2019-12-23T10:00:49.1340000+00:00' AS DateTimeOffset), CAST(N'2019-12-23T10:00:49.1340000+00:00' AS DateTimeOffset))
INSERT [dbo].[auths] ([id], [user_id], [token], [createdAt], [updatedAt]) VALUES (3406, 23, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdrYXVyQGJoYXZuYWNvcnAuY29tIiwiaWQiOjIzLCJpYXQiOjE1NzcxNzM0NzF9.pX5eGmIn0Js9oFrt4R4Ia3tVwmdbWavtyjYAyo-Ot-4', CAST(N'2019-12-24T07:44:31.1950000+00:00' AS DateTimeOffset), CAST(N'2019-12-24T07:44:31.1950000+00:00' AS DateTimeOffset))
SET IDENTITY_INSERT [dbo].[auths] OFF
SET IDENTITY_INSERT [dbo].[employee_skills] ON 

INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1026, 3, 24, N'1', N'1', N'1', CAST(N'2019-11-15T12:28:09.4870000+00:00' AS DateTimeOffset), CAST(N'2019-12-24T07:09:37.9060000+00:00' AS DateTimeOffset), 7, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1027, 3, 26, N'2', N'12', N'2018', CAST(N'2019-11-15T12:29:50.8910000+00:00' AS DateTimeOffset), CAST(N'2019-11-15T12:29:50.8910000+00:00' AS DateTimeOffset), 7, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1028, 5, 24, N'1', N'11', N'123', CAST(N'2019-11-15T12:31:10.0550000+00:00' AS DateTimeOffset), CAST(N'2019-11-15T12:31:10.0550000+00:00' AS DateTimeOffset), 9, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1029, 2, 26, N'1', N'34', N'65', CAST(N'2019-11-15T12:32:16.3530000+00:00' AS DateTimeOffset), CAST(N'2019-11-15T12:32:16.3530000+00:00' AS DateTimeOffset), NULL, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1030, 2, 27, N'5', N'546', N'45', CAST(N'2019-11-15T12:32:29.2880000+00:00' AS DateTimeOffset), CAST(N'2019-11-15T12:32:29.2880000+00:00' AS DateTimeOffset), NULL, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1031, 1, 28, N'4', N'34', N'2', CAST(N'2019-11-15T12:33:31.8430000+00:00' AS DateTimeOffset), CAST(N'2019-11-15T12:33:31.8430000+00:00' AS DateTimeOffset), NULL, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1032, 5, 27, N'1', N'2', N'32', CAST(N'2019-11-15T12:36:20.2160000+00:00' AS DateTimeOffset), CAST(N'2019-11-15T12:36:20.2160000+00:00' AS DateTimeOffset), NULL, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1033, 5, 26, N'3', N'4', N'21', CAST(N'2019-11-15T12:36:32.0290000+00:00' AS DateTimeOffset), CAST(N'2019-11-15T12:36:32.0290000+00:00' AS DateTimeOffset), NULL, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1034, 18, 26, N'45', N'1', N'2019', CAST(N'2019-12-11T06:08:40.5030000+00:00' AS DateTimeOffset), CAST(N'2019-12-11T06:08:40.5030000+00:00' AS DateTimeOffset), NULL, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1044, 3, 29, N'1', N'8', N'1', CAST(N'2019-12-11T06:22:55.6770000+00:00' AS DateTimeOffset), CAST(N'2019-12-24T07:44:02.0910000+00:00' AS DateTimeOffset), 8, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1053, 3, 25, N'1', N'1', N'1', CAST(N'2019-12-19T09:14:06.8000000+00:00' AS DateTimeOffset), CAST(N'2019-12-19T09:15:17.5000000+00:00' AS DateTimeOffset), 8, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1054, 3, 28, N'1', N'2', N'1', CAST(N'2019-12-19T09:15:24.1750000+00:00' AS DateTimeOffset), CAST(N'2019-12-24T06:58:18.1530000+00:00' AS DateTimeOffset), 8, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1055, 3, 27, N'1', N'4', N'1', CAST(N'2019-12-19T12:12:44.5460000+00:00' AS DateTimeOffset), CAST(N'2019-12-24T07:15:24.4660000+00:00' AS DateTimeOffset), 9, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1057, 3, 31, N'1', N'1', N'1', CAST(N'2019-12-24T07:11:56.3420000+00:00' AS DateTimeOffset), CAST(N'2019-12-24T07:11:56.3420000+00:00' AS DateTimeOffset), 7, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1058, 3, 30, N'1', N'1', N'1', CAST(N'2019-12-24T07:15:46.6240000+00:00' AS DateTimeOffset), CAST(N'2019-12-24T07:15:46.6240000+00:00' AS DateTimeOffset), 7, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1167, 8, 27, N'', N'', N'', CAST(N'2019-12-24T11:06:52.6490000+00:00' AS DateTimeOffset), CAST(N'2019-12-24T11:13:56.9840000+00:00' AS DateTimeOffset), 8, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1168, 8, 29, N'', N'1', N'', CAST(N'2019-12-24T11:06:52.6580000+00:00' AS DateTimeOffset), CAST(N'2019-12-24T11:18:47.1440000+00:00' AS DateTimeOffset), 7, 1, NULL)
INSERT [dbo].[employee_skills] ([id], [employee_id], [skill_id], [skill_version], [exp_in_month], [last_used], [createdAt], [updatedAt], [ProficiencyID], [CreatedBy], [LastModifiedBy]) VALUES (1169, 8, 31, N'', N'', N'', CAST(N'2019-12-24T11:06:52.6590000+00:00' AS DateTimeOffset), CAST(N'2019-12-24T11:06:52.6590000+00:00' AS DateTimeOffset), 7, 1, NULL)
SET IDENTITY_INSERT [dbo].[employee_skills] OFF
SET IDENTITY_INSERT [dbo].[EmployeeProjectDetails] ON 

INSERT [dbo].[EmployeeProjectDetails] ([EmployeeProjectID], [EmployeeID], [ProjectID], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (1, 3, 1, NULL, NULL, CAST(N'2019-12-12T15:33:36.660' AS DateTime), 1, 1)
SET IDENTITY_INSERT [dbo].[EmployeeProjectDetails] OFF
SET IDENTITY_INSERT [dbo].[employees] ON 

INSERT [dbo].[employees] ([id], [first_name], [last_name], [email], [phone], [createdAt], [updatedAt], [createdBy], [lastModifiedBy], [total_exp_in_month], [relevant_exp_in_month], [designation], [emp_id]) VALUES (1, N'Mohit', N'Kohli', N'm.kohli@bhavnacorp.com', N'1234567890', CAST(N'2019-09-18T05:43:56.7970000+00:00' AS DateTimeOffset), CAST(N'2019-09-18T05:43:56.7950000+00:00' AS DateTimeOffset), 1, NULL, 662, 662, N'SENIOR SOFTWARE ENGINEER', 2)
INSERT [dbo].[employees] ([id], [first_name], [last_name], [email], [phone], [createdAt], [updatedAt], [createdBy], [lastModifiedBy], [total_exp_in_month], [relevant_exp_in_month], [designation], [emp_id]) VALUES (2, N'Rupendra', N'Dhiman', N'rdhiman@bhavnacorp.com', N'9891008373', CAST(N'2019-09-18T05:44:13.4170000+00:00' AS DateTimeOffset), CAST(N'2019-09-18T12:42:55.5830000+00:00' AS DateTimeOffset), 1, NULL, 602, 602, N'SENIOR SOFTWARE ENGINEER', 399)
INSERT [dbo].[employees] ([id], [first_name], [last_name], [email], [phone], [createdAt], [updatedAt], [createdBy], [lastModifiedBy], [total_exp_in_month], [relevant_exp_in_month], [designation], [emp_id]) VALUES (3, N'Juhi', N'Bhardwaj', N'jbhardwaj@bhavnacorp.com', N'1234567890', CAST(N'2019-09-18T13:09:29.2030000+00:00' AS DateTimeOffset), CAST(N'2019-09-19T06:36:23.2250000+00:00' AS DateTimeOffset), 1, NULL, 6, 6, N'SOFTWARE TRAINEE', 351)
INSERT [dbo].[employees] ([id], [first_name], [last_name], [email], [phone], [createdAt], [updatedAt], [createdBy], [lastModifiedBy], [total_exp_in_month], [relevant_exp_in_month], [designation], [emp_id]) VALUES (5, N'Madhav', N'Singh', N'msingh@bhavnacorp.com', N'1234567890', CAST(N'2019-09-19T09:48:44.7300000+00:00' AS DateTimeOffset), CAST(N'2019-11-04T08:44:52.2670000+00:00' AS DateTimeOffset), 1, NULL, 551, 551, N'SENIOR SOFTWARE ENGINEER', 382)
INSERT [dbo].[employees] ([id], [first_name], [last_name], [email], [phone], [createdAt], [updatedAt], [createdBy], [lastModifiedBy], [total_exp_in_month], [relevant_exp_in_month], [designation], [emp_id]) VALUES (8, N'Guneet', N'Kaur', N'gkaur@bhavnacorp.com', N'1234567890', CAST(N'2019-12-24T07:39:58.2420000+00:00' AS DateTimeOffset), CAST(N'2019-12-24T07:39:58.2420000+00:00' AS DateTimeOffset), 1, NULL, 22, 22, N'sse', 426)
SET IDENTITY_INSERT [dbo].[employees] OFF
SET IDENTITY_INSERT [dbo].[EmployeeSkills] ON 

INSERT [dbo].[EmployeeSkills] ([Id], [EmployeeId], [SkillName], [TotalExperienceInYears], [Proficiency], [PriorJoining], [TechnologyStackId]) VALUES (17, 1, N'Python 1.0', CAST(2.00 AS Decimal(5, 2)), N'Intermediate', 1, 3)
INSERT [dbo].[EmployeeSkills] ([Id], [EmployeeId], [SkillName], [TotalExperienceInYears], [Proficiency], [PriorJoining], [TechnologyStackId]) VALUES (18, 1, N'ASP.Net', CAST(12.00 AS Decimal(5, 2)), N'Intermediate', 1, 1)
INSERT [dbo].[EmployeeSkills] ([Id], [EmployeeId], [SkillName], [TotalExperienceInYears], [Proficiency], [PriorJoining], [TechnologyStackId]) VALUES (20, 1, N'Core Java 1', CAST(10.00 AS Decimal(5, 2)), N'Intermediate', 1, 2)
INSERT [dbo].[EmployeeSkills] ([Id], [EmployeeId], [SkillName], [TotalExperienceInYears], [Proficiency], [PriorJoining], [TechnologyStackId]) VALUES (21, 1, N'P1', CAST(1.00 AS Decimal(5, 2)), N'Intermediate', 1, 3)
INSERT [dbo].[EmployeeSkills] ([Id], [EmployeeId], [SkillName], [TotalExperienceInYears], [Proficiency], [PriorJoining], [TechnologyStackId]) VALUES (22, 1, N'juhi', CAST(1.00 AS Decimal(5, 2)), N'Beginner', 0, 1)
INSERT [dbo].[EmployeeSkills] ([Id], [EmployeeId], [SkillName], [TotalExperienceInYears], [Proficiency], [PriorJoining], [TechnologyStackId]) VALUES (23, 1, N'SS', CAST(1.00 AS Decimal(5, 2)), N'Beginner', 1, 2)
SET IDENTITY_INSERT [dbo].[EmployeeSkills] OFF
SET IDENTITY_INSERT [dbo].[LookUpMaster] ON 

INSERT [dbo].[LookUpMaster] ([LookUpID], [Type], [Value], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (1, N'Client', N'Meridian Link', NULL, NULL, CAST(N'2019-12-12T13:40:03.867' AS DateTime), 1, 1)
INSERT [dbo].[LookUpMaster] ([LookUpID], [Type], [Value], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (2, N'Client', N'SRS', NULL, NULL, CAST(N'2019-12-12T13:40:30.153' AS DateTime), 1, 1)
INSERT [dbo].[LookUpMaster] ([LookUpID], [Type], [Value], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (3, N'Client', N'Centrify', NULL, NULL, CAST(N'2019-12-12T13:40:30.153' AS DateTime), 1, 1)
INSERT [dbo].[LookUpMaster] ([LookUpID], [Type], [Value], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (7, N'Proficiency', N'Beginner', NULL, NULL, CAST(N'2019-12-12T13:46:04.900' AS DateTime), 1, 1)
INSERT [dbo].[LookUpMaster] ([LookUpID], [Type], [Value], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (8, N'Proficiency', N'Intermediate', NULL, NULL, CAST(N'2019-12-12T13:46:04.900' AS DateTime), 1, 1)
INSERT [dbo].[LookUpMaster] ([LookUpID], [Type], [Value], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (9, N'Proficiency', N'Master/Expert', NULL, NULL, CAST(N'2019-12-12T13:46:04.900' AS DateTime), 1, 1)
SET IDENTITY_INSERT [dbo].[LookUpMaster] OFF
SET IDENTITY_INSERT [dbo].[ProjectDetails] ON 

INSERT [dbo].[ProjectDetails] ([ProjectID], [ProjectName], [LookUpClientID], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (1, N'MLAP', 1, NULL, NULL, CAST(N'2019-12-12T15:02:56.540' AS DateTime), 1, 1)
INSERT [dbo].[ProjectDetails] ([ProjectID], [ProjectName], [LookUpClientID], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (2, N'MLMCL', 1, NULL, NULL, CAST(N'2019-12-12T15:02:56.540' AS DateTime), 1, 1)
INSERT [dbo].[ProjectDetails] ([ProjectID], [ProjectName], [LookUpClientID], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (3, N'MLPQ', 1, NULL, NULL, CAST(N'2019-12-12T15:02:56.540' AS DateTime), 1, 1)
INSERT [dbo].[ProjectDetails] ([ProjectID], [ProjectName], [LookUpClientID], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (4, N'MLQB', 1, NULL, NULL, CAST(N'2019-12-12T15:02:56.540' AS DateTime), 1, 1)
INSERT [dbo].[ProjectDetails] ([ProjectID], [ProjectName], [LookUpClientID], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (5, N'MLXC', 1, NULL, NULL, CAST(N'2019-12-12T15:02:56.540' AS DateTime), 1, 1)
INSERT [dbo].[ProjectDetails] ([ProjectID], [ProjectName], [LookUpClientID], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (6, N'SRS', 2, NULL, NULL, CAST(N'2019-12-12T15:02:56.540' AS DateTime), 1, 1)
SET IDENTITY_INSERT [dbo].[ProjectDetails] OFF
SET IDENTITY_INSERT [dbo].[ProjectSkillMapping] ON 

INSERT [dbo].[ProjectSkillMapping] ([ProjectSkillID], [ProjectID], [SkillID], [LookUpProficiencyID], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (6, 2, 24, 8, NULL, NULL, CAST(N'2019-12-19T12:01:57.620' AS DateTime), 1, 1)
INSERT [dbo].[ProjectSkillMapping] ([ProjectSkillID], [ProjectID], [SkillID], [LookUpProficiencyID], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (28, 2, 25, 7, NULL, NULL, CAST(N'2019-12-23T15:08:12.823' AS DateTime), 1, 1)
INSERT [dbo].[ProjectSkillMapping] ([ProjectSkillID], [ProjectID], [SkillID], [LookUpProficiencyID], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (33, 2, 26, 8, NULL, NULL, CAST(N'2019-12-23T15:23:02.757' AS DateTime), 1, 1)
INSERT [dbo].[ProjectSkillMapping] ([ProjectSkillID], [ProjectID], [SkillID], [LookUpProficiencyID], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (34, 2, 27, 8, NULL, NULL, CAST(N'2019-12-23T15:23:02.757' AS DateTime), 1, 1)
INSERT [dbo].[ProjectSkillMapping] ([ProjectSkillID], [ProjectID], [SkillID], [LookUpProficiencyID], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (41, 1, 27, 8, NULL, NULL, CAST(N'2019-12-24T16:10:56.847' AS DateTime), 1, 1)
INSERT [dbo].[ProjectSkillMapping] ([ProjectSkillID], [ProjectID], [SkillID], [LookUpProficiencyID], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (42, 1, 29, 8, NULL, NULL, CAST(N'2019-12-24T16:10:56.847' AS DateTime), 1, 1)
INSERT [dbo].[ProjectSkillMapping] ([ProjectSkillID], [ProjectID], [SkillID], [LookUpProficiencyID], [LastModifiedOn], [LastModifiedBy], [CreatedOn], [CreatedBy], [IsActive]) VALUES (43, 1, 31, 8, NULL, NULL, CAST(N'2019-12-24T16:10:56.847' AS DateTime), 1, 1)
SET IDENTITY_INSERT [dbo].[ProjectSkillMapping] OFF
INSERT [dbo].[SequelizeMeta] ([name]) VALUES (N'20190903121423-create_users_table.js')
INSERT [dbo].[SequelizeMeta] ([name]) VALUES (N'20190905131836-create-employee.js')
INSERT [dbo].[SequelizeMeta] ([name]) VALUES (N'20190905132809-create-employee-skills.js')
INSERT [dbo].[SequelizeMeta] ([name]) VALUES (N'20190905133616-create-technology-stacks.js')
INSERT [dbo].[SequelizeMeta] ([name]) VALUES (N'20190909123325-create_authentication_table.js')
INSERT [dbo].[SequelizeMeta] ([name]) VALUES (N'20190916173430-create-skill.js')
SET IDENTITY_INSERT [dbo].[skills] ON 

INSERT [dbo].[skills] ([id], [skill_name], [createdAt], [updatedAt]) VALUES (24, N'Javascript', CAST(N'2019-11-15T12:26:44.1480000+00:00' AS DateTimeOffset), CAST(N'2019-11-15T12:26:44.1480000+00:00' AS DateTimeOffset))
INSERT [dbo].[skills] ([id], [skill_name], [createdAt], [updatedAt]) VALUES (25, N'Linux', CAST(N'2019-11-15T12:26:52.0740000+00:00' AS DateTimeOffset), CAST(N'2019-11-15T12:26:52.0740000+00:00' AS DateTimeOffset))
INSERT [dbo].[skills] ([id], [skill_name], [createdAt], [updatedAt]) VALUES (26, N'Unix', CAST(N'2019-11-15T12:27:00.2570000+00:00' AS DateTimeOffset), CAST(N'2019-11-15T12:27:00.2570000+00:00' AS DateTimeOffset))
INSERT [dbo].[skills] ([id], [skill_name], [createdAt], [updatedAt]) VALUES (27, N'C#', CAST(N'2019-11-15T12:27:08.5310000+00:00' AS DateTimeOffset), CAST(N'2019-11-15T12:27:08.5310000+00:00' AS DateTimeOffset))
INSERT [dbo].[skills] ([id], [skill_name], [createdAt], [updatedAt]) VALUES (28, N'Java', CAST(N'2019-11-15T12:27:15.3870000+00:00' AS DateTimeOffset), CAST(N'2019-11-15T12:27:15.3870000+00:00' AS DateTimeOffset))
INSERT [dbo].[skills] ([id], [skill_name], [createdAt], [updatedAt]) VALUES (29, N'Reactjs', CAST(N'2019-11-15T12:27:22.3210000+00:00' AS DateTimeOffset), CAST(N'2019-11-15T12:27:22.3210000+00:00' AS DateTimeOffset))
INSERT [dbo].[skills] ([id], [skill_name], [createdAt], [updatedAt]) VALUES (30, N'VB.NET', CAST(N'2019-12-11T06:18:57.8360000+00:00' AS DateTimeOffset), CAST(N'2019-12-11T06:18:57.8360000+00:00' AS DateTimeOffset))
INSERT [dbo].[skills] ([id], [skill_name], [createdAt], [updatedAt]) VALUES (31, N'TypeScript', CAST(N'2019-12-11T07:16:59.1300000+00:00' AS DateTimeOffset), CAST(N'2019-12-11T07:16:59.1300000+00:00' AS DateTimeOffset))
SET IDENTITY_INSERT [dbo].[skills] OFF
SET IDENTITY_INSERT [dbo].[TechnologyStacks] ON 

INSERT [dbo].[TechnologyStacks] ([Id], [Name]) VALUES (1, N'Microsoft .Net')
INSERT [dbo].[TechnologyStacks] ([Id], [Name]) VALUES (2, N'Java')
INSERT [dbo].[TechnologyStacks] ([Id], [Name]) VALUES (3, N'Python')
INSERT [dbo].[TechnologyStacks] ([Id], [Name]) VALUES (4, N'React JS')
INSERT [dbo].[TechnologyStacks] ([Id], [Name]) VALUES (5, N'Angular')
INSERT [dbo].[TechnologyStacks] ([Id], [Name]) VALUES (6, N'Vu JS')
INSERT [dbo].[TechnologyStacks] ([Id], [Name]) VALUES (7, N'Amber JS')
INSERT [dbo].[TechnologyStacks] ([Id], [Name]) VALUES (8, N'Microsoft SQL Server')
INSERT [dbo].[TechnologyStacks] ([Id], [Name]) VALUES (9, N'Oracle')
SET IDENTITY_INSERT [dbo].[TechnologyStacks] OFF
SET IDENTITY_INSERT [dbo].[users] ON 

INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (1, NULL, N'Admin', N'admin1', N'admin@yopmail.com', N'$2b$10$6q3mLljQPcee7sEqCmTcf.p49kxvXZlRVxnQFz6.LJJyGP/ykNgRG', N'1234567890', N'1572933353755.ico', N'admin', CAST(N'2019-12-12T18:45:12.8230000+00:00' AS DateTimeOffset), CAST(N'2019-11-05T05:55:53.7610000+00:00' AS DateTimeOffset), 1, NULL, 1)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (2, 1, N'Mohit', N'Kohli', N'm.kohli@bhavnacorp.com', N'$2b$10$TsF03KVAoLDKXxu/7JFgaulT7A66LiiHxPz.VVBB1JyVBfxLRkmUO', N'1234567890', NULL, N'user', CAST(N'2019-09-18T05:43:56.8780000+00:00' AS DateTimeOffset), CAST(N'2019-09-18T05:43:56.8780000+00:00' AS DateTimeOffset), 1, NULL, 1)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (3, 2, N'Rupendra', N'Dhiman', N'rdhiman@bhavnacorp.com', N'$2b$10$40r5jbZdoM2GGl2fy0Cb3ePPB1w1FYYKpG2D8BcysALJiEyoN8qIy', N'9891008373', N'1573217295053.png', N'user', CAST(N'2019-09-18T05:44:13.5020000+00:00' AS DateTimeOffset), CAST(N'2019-11-08T12:48:15.0720000+00:00' AS DateTimeOffset), 1, NULL, 1)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (4, 3, N'Juhi', N'Bhardwaj', N'jbhardwaj@bhavnacorp.com', N'$2b$10$PUWqTeBcAwCGz8MrBMng9un257blruo5rHMTcB6JC6JjKQCIvrrRy', N'1234567890', N'1569575233355.png', N'user', CAST(N'2019-09-18T13:09:29.2990000+00:00' AS DateTimeOffset), CAST(N'2019-09-27T09:07:13.3860000+00:00' AS DateTimeOffset), 1, NULL, 1)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (5, 4, N'Madhav', N'Singh', N'msing@gmail.com', N'$2b$10$Hr7e5QwAr7lEkgUU49UsCeg.450SGnGNx5AjAyn.NR9gSwh0kNPt6', N'12345678', NULL, N'user', CAST(N'2019-09-18T13:18:45.8990000+00:00' AS DateTimeOffset), CAST(N'2019-09-18T13:18:45.8990000+00:00' AS DateTimeOffset), 1, NULL, 0)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (6, 5, N'Madhav', N'Singh', N'msingh@bhavnacorp.com', N'$2b$10$8eyuTUZNGcchJSnFOtxo/.FDXq0EuY9DBT.AwkgQQMvndr7kqNn2O', N'1234567890', NULL, N'user', CAST(N'2019-09-19T09:48:44.8300000+00:00' AS DateTimeOffset), CAST(N'2019-09-19T09:48:44.8300000+00:00' AS DateTimeOffset), 1, NULL, 1)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (9, 8, N'Akshay', N'sharma', N'akshay@gmail.com', N'$2b$10$f9GxGJ04yozWRdsc2IOrFOw/A8abKpenh9hRqPKKaN5ou3HsA54/C', N'674567582', NULL, N'user', CAST(N'2019-10-01T05:05:09.4060000+00:00' AS DateTimeOffset), CAST(N'2019-10-01T05:05:09.4060000+00:00' AS DateTimeOffset), 1, NULL, 0)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (10, 9, N'juhi', N'bhardwaj', N'jbhardw@hjn.com', N'$2b$10$MoJx/OcpNt1P1y.mroyAGuhnoI8Ey5eJGmQrPn2O0TEoRmpTDpZue', N'567467257', NULL, N'user', CAST(N'2019-10-01T09:25:34.0590000+00:00' AS DateTimeOffset), CAST(N'2019-10-01T09:25:34.0590000+00:00' AS DateTimeOffset), 1, NULL, 0)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (11, 10, N'madhav', N'sht6aT', N'JUHI@GMAIL.COM', N'$2b$10$Dx2vaTcOf.jFwwXQdETkVuhzQmZE/xI94P4nGiJq/ytgMd/t69sW6', N'56546', NULL, N'user', CAST(N'2019-10-01T09:27:56.8230000+00:00' AS DateTimeOffset), CAST(N'2019-10-01T09:27:56.8230000+00:00' AS DateTimeOffset), 1, NULL, 0)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (12, 11, N'YASHPAL', N'SINGH', N'YASH@GMAIL.COM', N'$2b$10$W8OQqqw4hqG/RZ2IfR2Szu/i7GXyT0CAuSgla98H2EZAQcFBARRge', N'3436576', NULL, N'user', CAST(N'2019-10-01T09:28:48.3080000+00:00' AS DateTimeOffset), CAST(N'2019-10-01T09:28:48.3080000+00:00' AS DateTimeOffset), 1, NULL, 0)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (13, 12, N'YASHUIII', N'YJM', N'FH@GMAIL.COM', N'$2b$10$1AGSxMngygnEcEe.5hpsDenZ.qW6zckw0sdk8l6vE9pizEraBk0lq', N'765768', NULL, N'user', CAST(N'2019-10-01T09:41:07.7600000+00:00' AS DateTimeOffset), CAST(N'2019-10-01T09:41:07.7600000+00:00' AS DateTimeOffset), 1, NULL, 0)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (14, 13, N'ghvvf', N'ddsf', N'juhi@gmail.com', N'$2b$10$8eBLPUFXtFUvynnB/n8tmuLk78u9CP2SPrbeOCujhCDKbZX1TMCsW', N'7y676', NULL, N'user', CAST(N'2019-10-01T12:36:22.1510000+00:00' AS DateTimeOffset), CAST(N'2019-10-01T12:36:22.1510000+00:00' AS DateTimeOffset), 1, NULL, 0)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (15, 14, N'juhi', N'bhardwaj', N'bhardwaj@gmail.com', N'$2b$10$11NV5mHeq0zoIwq1OnL/JuRzwLRM1PiX8xammJcXnK9VYYsqtD/h6', N'346t565', NULL, N'user', CAST(N'2019-10-03T04:24:34.0970000+00:00' AS DateTimeOffset), CAST(N'2019-10-03T04:24:34.0970000+00:00' AS DateTimeOffset), 1, NULL, 0)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (16, 15, N'sawti', N'gupta', N'gupta@hmail.com', N'$2b$10$I0X7iPM7n6InplmzFGKnb.KVlGjWuerjUhm2mzyxschaPjnBjuoym', N'6778', NULL, N'user', CAST(N'2019-10-03T04:33:31.6870000+00:00' AS DateTimeOffset), CAST(N'2019-10-03T04:33:31.6870000+00:00' AS DateTimeOffset), 1, NULL, 0)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (17, 16, N'Saleem', N'mewati', N'sale@gmail.com', N'$2b$10$SaP0LbKnIfcn43mrdTR8OOrIpaNyQ8oVxRIyLQB38Vxu5Dab9mXwm', N'12345678', NULL, N'user', CAST(N'2019-11-22T09:26:52.9830000+00:00' AS DateTimeOffset), CAST(N'2019-11-22T09:26:52.9830000+00:00' AS DateTimeOffset), 1, NULL, 0)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (18, 17, N'Ashraf', N'khan', N'ashrkhan@gmail.com', N'$2b$10$Sh8p5ESRkJxE4ULg2DxTyuzgBxEt28us1u6Bkzh6afJNLmjTjf6SK', N'1234567890', NULL, N'user', CAST(N'2019-12-11T04:49:40.5530000+00:00' AS DateTimeOffset), CAST(N'2019-12-11T04:49:40.5530000+00:00' AS DateTimeOffset), 1, NULL, 0)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (19, 18, N'Ashraf', N'khan', N'ashrkhan@gmail.com', N'$2b$10$8AO.jdE4Cfn9MM/bFpjRGeoehm/humwu0ATF0fQMwSRbCqv4j/dOq', N'1234567890', NULL, N'user', CAST(N'2019-12-11T06:07:43.7390000+00:00' AS DateTimeOffset), CAST(N'2019-12-11T06:07:43.7390000+00:00' AS DateTimeOffset), 1, NULL, 0)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (20, 19, N'kulu', N'want', N'kulu@gmail.com', N'$2b$10$x3gkfcBOdM5GKGHzvszUG.Je6F6GfeFqzC1WwdcpvSeyg7wSLas5a', N'1234567890', NULL, N'user', CAST(N'2019-12-11T06:11:08.0510000+00:00' AS DateTimeOffset), CAST(N'2019-12-11T06:11:08.0510000+00:00' AS DateTimeOffset), 1, NULL, 0)
INSERT [dbo].[users] ([id], [employeeId], [first_name], [last_name], [email], [password], [phone], [profile_pic], [user_type], [createdAt], [updatedAt], [CreatedBy], [ModifiedBy], [IsActive]) VALUES (23, 8, N'Guneet', N'Kaur', N'gkaur@bhavnacorp.com', N'$2b$10$g2lllCi8KpwvyupXZTFb8uAzuITyebm.fJuQ2jUqIBiPwWGAn01Em', N'1234567890', NULL, N'user', CAST(N'2019-12-24T07:39:58.3260000+00:00' AS DateTimeOffset), CAST(N'2019-12-24T07:39:58.3260000+00:00' AS DateTimeOffset), 1, NULL, 1)
SET IDENTITY_INSERT [dbo].[users] OFF
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Sequeliz__72E12F1BA60D07BA]    Script Date: 12/24/2019 5:57:49 PM ******/
ALTER TABLE [dbo].[SequelizeMeta] ADD UNIQUE NONCLUSTERED 
(
	[name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[employee_skills] ADD  CONSTRAINT [DF_employee_skills_createdAt]  DEFAULT (getdate()) FOR [createdAt]
GO
ALTER TABLE [dbo].[EmployeeProjectDetails] ADD  CONSTRAINT [DF_EmployeeProjectDetails_CreatedOn]  DEFAULT (getdate()) FOR [CreatedOn]
GO
ALTER TABLE [dbo].[EmployeeProjectDetails] ADD  CONSTRAINT [DF_EmployeeProjectDetails_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[EmployeeSkills] ADD  CONSTRAINT [DF_EmployeeSkills_PriorJoing]  DEFAULT ((0)) FOR [PriorJoining]
GO
ALTER TABLE [dbo].[LookUpMaster] ADD  CONSTRAINT [DF_CodeMaster_CreatedOn]  DEFAULT (getdate()) FOR [CreatedOn]
GO
ALTER TABLE [dbo].[LookUpMaster] ADD  CONSTRAINT [DF_CodeMaster_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[ProjectDetails] ADD  CONSTRAINT [DF_ProjectDetails_CreatedOn]  DEFAULT (getdate()) FOR [CreatedOn]
GO
ALTER TABLE [dbo].[ProjectDetails] ADD  CONSTRAINT [DF_ProjectDetails_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[ProjectSkillMapping] ADD  CONSTRAINT [DF_ProjectSkillMapping_CreatedOn]  DEFAULT (getdate()) FOR [CreatedOn]
GO
ALTER TABLE [dbo].[ProjectSkillMapping] ADD  CONSTRAINT [DF_ProjectSkillMapping_CreatedBy]  DEFAULT ((1)) FOR [CreatedBy]
GO
ALTER TABLE [dbo].[ProjectSkillMapping] ADD  CONSTRAINT [DF_ProjectSkillMapping_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[users] ADD  CONSTRAINT [DF_users_CreatedBy]  DEFAULT ((1)) FOR [CreatedBy]
GO
ALTER TABLE [dbo].[users] ADD  CONSTRAINT [DF_users_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[employee_skills]  WITH CHECK ADD  CONSTRAINT [FK_employee_skills_LookUpMaster] FOREIGN KEY([ProficiencyID])
REFERENCES [dbo].[LookUpMaster] ([LookUpID])
GO
ALTER TABLE [dbo].[employee_skills] CHECK CONSTRAINT [FK_employee_skills_LookUpMaster]
GO
ALTER TABLE [dbo].[EmployeeProjectDetails]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeProjectDetails_ProjectDetails] FOREIGN KEY([ProjectID])
REFERENCES [dbo].[ProjectDetails] ([ProjectID])
GO
ALTER TABLE [dbo].[EmployeeProjectDetails] CHECK CONSTRAINT [FK_EmployeeProjectDetails_ProjectDetails]
GO
ALTER TABLE [dbo].[ProjectDetails]  WITH CHECK ADD  CONSTRAINT [FK_ProjectDetails_CodeMaster] FOREIGN KEY([LookUpClientID])
REFERENCES [dbo].[LookUpMaster] ([LookUpID])
GO
ALTER TABLE [dbo].[ProjectDetails] CHECK CONSTRAINT [FK_ProjectDetails_CodeMaster]
GO
ALTER TABLE [dbo].[ProjectSkillMapping]  WITH CHECK ADD  CONSTRAINT [FK_ProjectSkillMapping_LookUpMaster] FOREIGN KEY([LookUpProficiencyID])
REFERENCES [dbo].[LookUpMaster] ([LookUpID])
GO
ALTER TABLE [dbo].[ProjectSkillMapping] CHECK CONSTRAINT [FK_ProjectSkillMapping_LookUpMaster]
GO
ALTER TABLE [dbo].[ProjectSkillMapping]  WITH CHECK ADD  CONSTRAINT [FK_ProjectSkillMapping_ProjectDetails] FOREIGN KEY([ProjectID])
REFERENCES [dbo].[ProjectDetails] ([ProjectID])
GO
ALTER TABLE [dbo].[ProjectSkillMapping] CHECK CONSTRAINT [FK_ProjectSkillMapping_ProjectDetails]
GO
ALTER TABLE [dbo].[ProjectSkillMapping]  WITH CHECK ADD  CONSTRAINT [FK_ProjectSkillMapping_skills] FOREIGN KEY([SkillID])
REFERENCES [dbo].[skills] ([id])
GO
ALTER TABLE [dbo].[ProjectSkillMapping] CHECK CONSTRAINT [FK_ProjectSkillMapping_skills]
GO
USE [master]
GO
ALTER DATABASE [ManageSkillsV1] SET  READ_WRITE 
GO
