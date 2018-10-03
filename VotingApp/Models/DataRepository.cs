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
            using (var connection = new SqlConnection(@"Data Source=DESKTOP-AQ0H8S4\SQLEXPRESS;Initial Catalog=SignalR;Integrated Security=True;"))
            {
                connection.Open();
                using (var command = new SqlCommand("SELECT * FROM ObjectInfo ", connection))
                {
                     SqlDataReader reader;
                     reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        Dashboard obj = new Dashboard();
                        obj.FloorName = (string)reader["FloorName"];
                        obj.UniqueId = (int)reader["UniqueId"];
                        obj.RoomType = (int)(byte)reader["RoomType"];
                        obj.IsEmergency = (bool)reader["IsEmergency"];
                        obj.CurrentCount = (int)reader["CurrentCount"];
                        obj.LongStay = (int)reader["LongStay"];
                        obj.LongRecent = (int)reader["LongRecent"];
                        obj.WrongPerson = (int)reader["WrongPerson"];
                        obj.WrongPersonRecent = (int)reader["WrongPersonRecent"];
                        Dashboard.Add(obj);
                    }
                }
            }
            return Dashboard;
        }

    }
}