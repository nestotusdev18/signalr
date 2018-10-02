# signalr


USE [SignalR]
GO

/****** Object:  Table [dbo].[ObjectInfo]    Script Date: 10/2/2018 11:35:11 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ObjectInfo](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FloorName] [varchar](50) NULL,
	[UniqueId] [int] NULL,
	[RoomType] [int] NULL,
	[IsEmergency] [bit] NULL,
	[CurrentCount] [int] NULL,
	[LongStay] [int] NULL,
	[LongRecent] [int] NULL,
	[WrongPerson] [int] NULL,
	[WrongPersonRecent] [int] NULL
) ON [PRIMARY]
GO


