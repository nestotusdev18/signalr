using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;


namespace VotingApp.Models
{
    public class DataRepository 
    {
       
        public List<Dashboard> GetDashboard()
        {
            List<Dashboard> Dashboard = new List<Dashboard>();
            using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                connection.Open();
                using (var command = new SqlCommand("SELECT * FROM  [dbo].[Activity.BathroomSummaryLog] ORDER BY row_number() OVER (PARTITION BY [RoomTypeID] ORDER BY [RoomTypeID]), [RoomTypeID]", connection))
                {
                     SqlDataReader reader;
                     reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        Dashboard obj = new Dashboard();
                        obj.FloorName = (string)reader["BathroomName"];
                        obj.UniqueId = (int)reader["UniqueVisitors"];
                        obj.RoomType = (int)reader["RoomTypeID"];
                        obj.CurrentCount = (int)reader["CurrentCount"];
                        obj.LongStay = (int)reader["TotalLongStayCount"];
                        obj.LongRecent = (int)reader["CurrentLongStayCount"];
                        obj.WrongPerson = (int)reader["TotalWrongPersonCount"];
                        obj.WrongPersonRecent = (int)reader["CurrentWrongPersonCount"];
                        Dashboard.Add(obj);
                    }
                }
            }
            return Dashboard;
        }

    }
}